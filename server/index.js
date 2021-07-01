require("dotenv").config();
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("../server/controllers/userController");
const authRoute = require("../server/controllers/authController");
const postRoute = require("../server/controllers/postController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const path = require("path");
const { uploadFile, getFileStream } = require("./controllers/awsController");

const { SERVER_PORT, MONGO_URL } = process.env;

mongoose.connect(
	`${MONGO_URL}`,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected to MongoDB");
	}
);
//SERVER IMAGES PATH
app.use("/images", express.static(path.join("public/images")));

//MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//AWS S3
app.get("/images/:key", (req, res) => {
	const key = req.params.key;
	const readStream = getFileStream(key);

	readStream.pipe(res);
});
app.post("/uploads", upload.single("image"), async (req, res) => {
	const file = req.file;
	const result = await uploadFile(file);
	await unlinkFile(file.path);
	console.log(result);
	const desc = req.body.desc;
	res.status(200).send({ imagePath: `/images/${result.Key}` });
});

//ROUTES
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(SERVER_PORT, () => {
	console.log("Server is up and running");
});
