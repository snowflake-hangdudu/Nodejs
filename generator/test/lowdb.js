//导入lowdb
var lowdb = require("lowdb");
const fileSync = require("lowdb/adapters/FileSync");
const adapters = new fileSync("db.json");

//获取db对象

var db = lowdb(adapters);

//初始化数据
db.defaults({ posts: [], user: {} }).write();

//添加数据
db.get("posts").push({ id: 1, title: "lowdb is awesome" }).write();
