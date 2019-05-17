// npm install -g js-sha1
sha1 = require("./sha1.min.js")

var str = sha1("chinese")
console.log("原文： "+"chinese")
console.log("sha1 encode: "+str)