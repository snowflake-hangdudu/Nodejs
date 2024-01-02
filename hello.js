//导入express

const express = require("express");

//创建app

const app = express();

//静态资源中间件

app.use(express.static(__dirname + "/public"));
console.log(__dirname);

//创建路由

app.get("/", (req, res) => {
  //响应html文件
  res.sendFile(__dirname + "/public/index.html");
});

//监听端口

app.listen(9000, () => {
  console.log("server running at http://127.0.0.1:9000");
});
