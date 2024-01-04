//引入fs
const fs = require("fs");

//引入ejs
const ejs = require("ejs");

//引入express
const express = require("express");

//创建应用对象

const app = express();

//设置模板引擎

app.set("view engine", "ejs");

//设置模板目录
app.set("views", "./views");

//创建路由
app.get("/", (req, res) => {
  //render响应
  const index = fs.readFileSync("./views/index.ejs");
  res.render("index", { title: "Hello World" });
});

//监听端口

app.listen(9000, () => {
  console.log("http://127.0.0.1:9000监听中---");
});
