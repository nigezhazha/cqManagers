//导入模块
const express = require('express')
// var multer  = require('multer')
const dbHerper =require('./libs/dbHelper')

//实例化服务器对象
const app = express()

//托管静态资源
app.use(express.static('views'))

//开启监听
app.listen(666)