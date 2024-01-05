const mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost:27017/hangdudu");

//设置回调
mongoose.connection.once("open", () => {
  //创建文档的结构对象
  const Schema = new mongoose.Schema({
    name: {
      required: true,
      type: String,
    },
    age: Number,
  });
  //创建模型对象，对文档操作的封装对象
  const model = mongoose.model("users", Schema);

  model
    .create({ name: "张三", age: 18 })
    .then((data) => {
      console.log(data, "我是添加的data");
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log("添加失败");
    });
});
mongoose.connection.once("error", () => {
  console.log("数据库连接错误");
});
mongoose.connection.once("close", () => {
  console.log("数据库连接关闭");
});
