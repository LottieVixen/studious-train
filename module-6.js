var fs = require('fs');
var path = require('path');
module.exports = function (dir,filter,callback) {
	filter = '.'+filter;
	fs.readdir(dir,function(err, data){
		if (err){ return callback(err);}
		for (var i = 0;i <= data.length - 1; i++) {
			if ((path.extname(data[i])==filter)){
				callback(null,data[i]);
			};
    	};
	});
};