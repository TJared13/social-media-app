const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('../server/controllers/userController');
const authRoute = require('../server/controllers/authController');
const postRoute = require('../server/controllers/postController');
dotenv.config();

const {SERVER_PORT, MONGO_URL} = process.env;


mongoose.connect(`${MONGO_URL}`, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to MongoDB')
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users' , userRoute)
app.use('/api/auth' , authRoute)
app.use('/api/posts' , postRoute)


app.listen(SERVER_PORT, () => {
    console.log('Server is up and running')
})