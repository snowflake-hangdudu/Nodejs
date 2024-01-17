var express = require("express");
const formidable = require("formidable");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/portrait", (req, res) => {
  res.render("portrait");
});

router.post("/portrait", (req, res) => {
  const form = new formidable.IncomingForm({
    multiples: true,
    uploadDir: "./public/uploads", //上传文件的保存路径
    keepExtensions: true  //保持文件后缀
  });
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return;
    }
    //图片访问路径
    let url = '/uploads/'+ files.file[0].newFilename;

    console.log(fields,'fields'); // 获取表单提交的数据 text radio checkbox select
    console.log(files,'files'); // 获取上传的文件 file
    res.send(url);
  });
});
module.exports = router;
