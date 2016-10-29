var fs = require('fs');
fileBuf = fs.readFileSync(process.argv[2]);
console.log(fileBuf.toString().split('\n').length-1);
