const request = require("request");
const cheerio = require("cheerio");

const fs = require("fs")
const path = require("path")

function creareDir(dir){
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}


module.exports = {
    request,
    cheerio,
    fs,
    path,
    creareDir
}