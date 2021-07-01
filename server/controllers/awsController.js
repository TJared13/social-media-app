require("dotenv").config();
const fs = require("fs");
const aws = require("aws-sdk");
const { AWS_BUCKET_NAME, AWS_REGION, AWS_KEY, AWS_SECRET } = process.env;

const s3 = new aws.S3({
	accessKeyId: AWS_KEY,
	secretAccessKey: AWS_SECRET
});

const uploadFile = (filename) => {
	const fileContent = fs.readFileSync(filename);

	const params = {
		Bucket: AWS_BUCKET_NAME,
		Key: "photo.jpg",
		Body: fileContent
	};

	s3.upload(params, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log("File uploaded successfully", data.Location);
		}
	});
};
exports.uploadFile = uploadFile;

// //DOWNLOAD FROM s3
// function getFileStream(fileKey) {
// 	const downloadParams = {
// 		Key: fileKey,
// 		Bucket: AWS_BUCKET_NAME
// 	};
// 	return s3.getObject(downloadParams).createReadStream();
// }
// exports.getFileStream = getFileStream;
