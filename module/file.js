const mongoose = require('mongoose')
let file = mongoose.Schema({
    fileName:String,
    path:String,
    createTime:Date,
    fileType:String,
    size:Number
})
let fileModel = mongoose.model('file', file,'file')
