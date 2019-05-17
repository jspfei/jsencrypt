// npm install --save js-base64

require("./base64")
console.log("----------base64加密解密---------------------")
 //加密
var str = Base64.encode("ssssssssfffssf")
console.log("Base64 encode: "+str)

//解密
str = Base64.decode(str);
console.log("Base64 decode: "+str)

