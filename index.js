const Express = require('express');
const app = Express();
const multer = require('multer');
const bodyParser = require('body-parser')
const fileMod = require('./module/index').file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage,
    preservePath: true
})
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(upload()); // for parsing multipart/form-data
app.post('/upload', upload.single('fieldname'), function (req, res, next) {
    console.log(req)
})
app.listen(3000, function () {
    console.log('servers run ::3000')
})