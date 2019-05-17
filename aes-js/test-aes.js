//npm install -g aes-js
var aesjs = require('aes-js');

var key = [1,2 ,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
var iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];


// 加密

// Convert text to bytes (text must be a multiple of 16 bytes)
var text = 'TextMustBe16Byte';
console.log("原文： "+text)
var textByte = aesjs.utils.utf8.toBytes(text);


// To print or store the binary data, you may convert it to hex
var aesCbc = new aesjs.ModeOfOperation.cbc(key,iv);
var encryptedBytes = aesCbc.encrypt(textByte);


var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
console.log("encrypt : "+encryptedHex);

//解密

// When ready to decrypt the hex string, convert it back to bytes
var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

var aesCbc = new aesjs.ModeOfOperation.cbc(key,iv);
var decryptedBytes = aesCbc.decrypt(encryptedBytes);


var decrptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
console.log("decrypt : "+decrptedText);
