// 写入文件
let fs = require('fs')
fs.writeFile('./demo.txt','writefile写入文件',(err)=>{
  // 如果写入不成功就打印 err
  if(err != null){
    console.log(err);
  }
  console.log('写入文件成功');
})