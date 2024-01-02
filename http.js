//导入express

const express = require("express");

//导入body-parser

const bodyParser = require("body-parser");

//创建app

const app = express();

//静态资源中间件

app.use(express.static(__dirname + "/public"));
console.log(__dirname);

//创建中间件

const jsionParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);

//创建路由

app.get("/login", (req, res) => {
  //响应html文件
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send("登录成功");
});
//监听端口

app.listen(9000, () => {
  console.log("server running at http://127.0.0.1:9000");
});
