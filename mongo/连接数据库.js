const mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost:27017/hangdudu");

//设置回调
mongoose.connection.once("open", () => {
  console.log("数据库连接成功");
});
mongoose.connection.once("error", () => {
  console.log("数据库连接错误");
});
mongoose.connection.once("close", () => {
  console.log("数据库连接关闭");
});
