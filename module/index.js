const mongoose = require('mongoose');
const config = require('../config');
mongoose.connect(`mongodb://${config.dbUrl}`,{
    user:config.dbUsername,
    pass:config.dbpassword,
    dbName:config.dbName
})
const db = mongoose.connection;
db.on('error',function(err){
    console.log('链接失败')
    console.log(err)
})
db.on('open',function(){
    console.log('链接成功')
})
const file = require('./file')
const floder = require('./floder')
module.exports = {
    file,
    floder
}