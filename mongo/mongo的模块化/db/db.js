/* 

* @param {*} success 成功的回调
* @param {*} error 失败的回调


 */
module.exports = function (success, error) {
  //判断是否传入了错误的回调
  if (typeof error !== "function") {
    error = () => {
      console.log("连接失败~");
    };
  }
  //安装 mongoose
  //导入 mongoose 模块
  const mongoose = require("mongoose");

  //导入配置文件
  const { DBHOST, DBPORT, DBNAME } = require("../config/config");
  //还未使用，脑子疼，以后配
  console.log(DBHOST, DBPORT, DBNAME);

  // 连接 mongodb 服务
  mongoose.connect("mongodb://localhost:27017/hangdudu");

  //设置回调
  //设置连接成功的回调
  mongoose.connection.once("open", () => {
    success();
    console.log("数据库连接成功");
  });

  //设置连接失败的回调
  mongoose.connection.once("error", () => {
    error();
    console.log("数据库连接失败");
  });

  //设置连接关闭的回调
  mongoose.connection.once("close", () => {
    console.log("数据库连接关闭");
  });
};
