require('dotenv').config();
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const userCtrl = require('../server/controllers/userController');
const authCtrl = require('./controllers/authController');
const messageCtrl = require('../server/controllers/messageController');
const conversationCtrl = require('../server/controllers/conversationController');
const postCtrl = require('../server/controllers/postController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const { uploadFile, getFileStream } = require('./controllers/awsController');

const { SERVER_PORT, SESSION_SECRET, MONGO_URL } = process.env;

mongoose.connect(
	`${MONGO_URL}`,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Connected to MongoDB');
	}
);
//SERVER IMAGES PATH
app.use('/images', express.static(path.join('public/images')));

//MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(
	session({
		saveUninitialized: false,
		resave: false,
		secret: SESSION_SECRET,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7 * 4
		}
	})
);

//AWS S3
app.get('/images/:key', (req, res) => {
	const key = req.params.key;
	const readStream = getFileStream(key);

	readStream.pipe(res);
});

app.post('/upload', upload.single('file'), async (req, res) => {
	const file = req.file;
	const result = await uploadFile(file);
	await unlinkFile(file.path);
	console.log(result);
	const desc = req.body.desc;
	res.status(200).send({ imagePath: `/images/${result.Key}` });
});

//ROUTES
app.use('/api/users', userCtrl);
app.use('/api/auth', authCtrl);
app.use('/api/posts', postCtrl);
app.use('/api/conversations', conversationCtrl);
app.use('/api/messages', messageCtrl);

app.listen(SERVER_PORT, () => {
	console.log('Server is up and running');
});
