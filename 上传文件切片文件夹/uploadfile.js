const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

const filePath = "./Pictures.zip"; // 大文件路径

const key = "hang"; // 文件的唯一键

const token =
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJKMlNBVVBUMDkyODhXOFRIVzBHQiIsImV4cCI6MTcwNDI3NjUyMiwicGFyZW50Ijoicm9vdCJ9.tJjtywZ_3FDEmRc_XDxnL35piY4CbMsaoA6YeVzYnN8-LOOYAub17TXvUGrHdKwcgtn3W0HNtkT286TDMWw1kQ"; // 身份验证令牌

// 读取文件
const file = fs.readFileSync(filePath);
console.log(file, "读取后的文件");

// 文件分片
const chunkSize = 5242880; // 每个分片的大小（这里假设为1MB）
const totalChunk = Math.ceil(file.length / chunkSize);

for (let chunkIndex = 0; chunkIndex < totalChunk; chunkIndex++) {
  const start = chunkIndex * chunkSize;
  console.log(start, "每次的start");
  const end =
    start + chunkSize >= file.length ? file.length : start + chunkSize;
  console.log(end, "每次的end");

  const chunk = file.slice(start, end);

  // 计算MD5
  const md5 = "f39d702527a35c71a3a121d6e3ed366d"; // 可选参数，用于验证分片数据的完整性
  // 构造请求参数
  const formData = new FormData();
  formData.append("chunkIndex", chunkIndex);
  formData.append("chunkSize", chunkSize);
  formData.append("file", chunk, {
    filename: "chunk_" + chunkIndex, // 你需要为每个分片指定一个文件名
    contentType: "application/octet-stream", // 你需要为每个分片指定一个内容类型
  });
  formData.append("key", key);
  formData.append("md5", md5);
  formData.append("token", token);
  formData.append("totalChunk", totalChunk);

  console.log(formData, "每次的请求参数");

  sendRequest(formData);
}

async function sendRequest(formData) {
  try {
    const response = await axios.post(
      "http://192.168.0.100:8080/minio/fileUpload/big",
      formData
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getToken() {
  try {
    const response = await axios.get(
      "http://192.168.0.100:8080/minio/get/token"
    );
    // 处理响应数据
    console.log(response.data);
  } catch (error) {
    // 处理错误
    console.error(error);
  }
}

getToken();
