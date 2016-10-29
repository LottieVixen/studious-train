var http = require('http');

var collection = '';
var chars = 0;

http.get(process.argv[2],function (response) {
	response.on("data",function (data) {
		chars += data.toString().length;
		collection += data.toString();
		console.error(collection);
	});
	response.on('end',function (){
		console.log(chars);
		console.log(collection);
	});
});