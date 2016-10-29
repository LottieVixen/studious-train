var fs = require('fs');
function callback(_,dataBuf){
	console.log(dataBuf.toString().split('\n').length-1);
}
fileBuf = fs.readFile(process.argv[2],callback);
