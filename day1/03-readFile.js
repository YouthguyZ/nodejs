// 系统 api fs 模块 文件操作
let fs = require('fs')
// 读取文件
fs.readFile('./01-hellonode.js','utf-8',(err,doc)=>{
  console.log(err);
  console.log(doc)

})