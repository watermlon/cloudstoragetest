const express = require('express')
const route = express.Router()
const fs = require('fs')
const floderMod = require('../module/index').floder
const config = require('../config')
route.post('/createDir',function(req,res,next){
    let dirname = req.body.dirname
    console.log(req)
    fs.mkdir(config.filePath+'/'+dirname,function(err){
        if(err){
            next(err)
        }else{
            res.send('success')
            
        }
    })
})
module.exports = route