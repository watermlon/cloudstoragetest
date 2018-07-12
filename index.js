const Express = require('express');
const app = Express();
const multer = require('multer');
const bodyParser = require('body-parser')
const path = require('path')
const fileMod = require('./module/index').file
const config = require('./config')
const log4js = require('log4js')
const logger = require('./log')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, config.filePath)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage,
    preservePath: true
}).single('fieldname')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(log4js.connectLogger(logger, { level: 'auto', format: ':method :url' }));//日志
//app.use(upload()); // for parsing multipart/form-data
app.post('/upload', function (req, res, next) {
    console.log(req)
    upload(req, res, function (err) {
        if (err) {
            next('error')
            // 发生错误
            return
        }
        console.log(req)
        let addParams = {
            fileName:req.file.filename,
            path:req.file.destination,
            createTime:new Date(),
            fileType:path.extname(req.file.filename),
            size:req.file.size
        }
        logger.info(`file_name:${req.file.filename},file_path:${req.file.destination}/${req.file.filename},file_size:${req.file.size}`)
        console.log(addParams)
        fileMod.create(addParams,function(){
            console.log('储存成功')
        })
        res.send('success')
        // 一切都好
    })
})
//错误处理
app.use(function(err, req, res, next) {
    console.error('错误',err)
    res.status(500).send('Something broke!');
});
app.listen(3000, function () {
    console.log('servers run ::3000')
})