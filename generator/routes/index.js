var express = require("express");
var router = express.Router();

//导入lowdb
var lowdb = require("lowdb");
const fileSync = require("lowdb/adapters/FileSync");

//导入shortId
var shortId = require("shortid");

const adapters = new fileSync("./data/db.json");

//获取db对象
var db = lowdb(adapters);

// 记账本的列表
router.get("/account", function (req, res, next) {
  //获取所有的账单信息
  let accounts = db.get("accounts").value();
  res.render("index", { accounts });
});

// 添加记账
router.get("/account/add", function (req, res, next) {
  res.render("add");
});

// 添加记账
router.post("/account", function (req, res, next) {
  console.log(req.body);
  let id = shortId.generate();
  //写入文件
  db.get("accounts")
    .push({ id, ...req.body })
    .write();
  res.render("success");
});

module.exports = router;
