let request = require("request");
let cheerio = require("cheerio");
let url = "https://github.com/topics"
let fs = require("fs")
let path = require("path")

fs.mkdirSync("IPL 2020");