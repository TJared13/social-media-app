require("dotenv").config();
const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");
const { AWS_BUCKET_NAME, AWS_REGION, AWS_KEY, AWS_SECRET } = process.env;

const s3 = new S3({
	AWS_REGION,
	AWS_KEY,
	AWS_SECRET
});

//UPLOAD TO s3
function uploadFile(file) {
	const fileStream = fs.createReadStream(file.path);
	const uploadParams = {
		Bucket: AWS_BUCKET_NAME,
		Body: fileStream,
		Key: file.filename
	};
	return s3.upload(uploadParams).promise();
}
exports.uploadFile = uploadFile;

//DOWNLOAD FROM s3
function getFileStream(fileKey) {
	const downloadParams = {
		Key: fileKey,
		Bucket: AWS_BUCKET_NAME
	};
	return s3.getObject(downloadParams).createReadStream();
}
exports.getFileStream = getFileStream;
