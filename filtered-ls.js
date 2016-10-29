// take directory as arg1 take exetension filter #2, 
//output files that match the exetension
// must use async readdir and a callback function

var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var exe = '.'+process.argv[3];

function checkExtension(_,list){
	lsArray = list;
	for (var i = 0;i <= lsArray.length - 1; i++) {
		if ((path.extname(lsArray[i])==exe)){
			console.log(lsArray[i]);
		};
	};
};

fs.readdir(dir,checkExtension)
