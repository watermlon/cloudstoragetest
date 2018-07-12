const mongoose = require('mongoose')
let createFloder = mongoose.Schema({
    floderName:String,
    parentName:String,
    sunName:String
})
let createFloderMod = createFloder.module('floder',createFloder,'floder')
module.exports = createFloderMod