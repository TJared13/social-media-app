const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("../server/controllers/userController");
const authRoute = require("../server/controllers/authController");
const postRoute = require("../server/controllers/postController");
const multer = require("multer");
const path = require("path");
dotenv.config();

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

//FILE UPLOAD
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	}
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
	try {
		return res.status(200).json("File uploaded successfully");
	} catch (err) {
		console.log(err);
	}
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(SERVER_PORT, () => {
	console.log("Server is up and running");
});
