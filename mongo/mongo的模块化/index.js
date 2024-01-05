//导入db模块
const db = require("./db/db");
//导入UserModels模块
const UserModels = require("./models/UserModels");

//导入mongoose
const mongoose = require("mongoose");

db(
  () => {
    UserModels.create({ name: "张三", age: 18 }).then((data) => {
      console.log(data, "我是添加的data");
    });
  },
  () => {
    console.log("连接失败");
  }
);
