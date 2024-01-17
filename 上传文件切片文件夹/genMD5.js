const fs = require("fs");
const crypto = require("crypto");

// 读取文件内容并计算MD5哈希值
function calculateFileMD5(filename) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("md5");
    const input = fs.createReadStream(filename);

    input.on("readable", () => {
      const data = input.read();
      if (data) {
        hash.update(data);
      } else {
        resolve(hash.digest("hex"));
      }
    });

    input.on("error", (error) => {
      reject(error);
    });
  });
}

// 示例用法
const filename = "./Pictures.zip";

calculateFileMD5(filename)
  .then((md5) => {
    console.log(`文件 ${filename} 的MD5哈希值为：${md5}`);
  })
  .catch((error) => {
    console.error("计算MD5哈希值时出错：", error);
  });
