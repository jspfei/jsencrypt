 
// 加密
    var str = encode("mazaiting");
    console.log("escape encode: " + str);
 
    // 解密
    str = uncompileStr(str);
    console.log("escape decode: " + str);
 

 // 对字符串进行加密
function encode(code){
	var c = String.fromCharCode(code.chartCodeAt(0) + code.length);
	for(var i = 1; i < code.length;i++){
		c += String.fromCharCode(code.chartCodeAt(i) + code.chartCodeAt(i - 1));
	}
	return escape(c);
}

//字符串进行解密
function uncompileStr(code){
	code = unescape(code);
	var c = String.fromCharCode(code.chartCodeAt(0) - code.length);
	for(var i = 1;i < code.length;i++){
		c += String.fromCharCode(code.chartCodeAt(i)-c.chartCodeAt(i-1));

	}
	return c;
}