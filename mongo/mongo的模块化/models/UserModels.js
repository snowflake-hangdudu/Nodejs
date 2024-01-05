//导入mongoose
const mongoose = require("mongoose");

//创建文档的结构对象
let UserSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: Number,
});

//创建模型对象，对文档操作的封装对象
let UserModel = mongoose.model("users", UserSchema);


module.exports = UserModel;
