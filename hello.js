const fs = require("fs");
const ejs = require("ejs");
let isLogin = true;
let str = fs.readFileSync("index.html").toString();

let result = ejs.render(str, { isLogin: isLogin });

if (isLogin) {
  console.log("我登录了");
} else {
  console.log("我没登录");
}

console.log(result);
