var http = require('http');

var data1 = '';
var data2 = '';
var data3 = '';

var collect = function(url,callback){
	var collection = '';
	http.get(url,function (response) {
		response.on("data",function (data) {
			collection += data.toString();
		});
		response.on('end',function (){
			callback(null,collection);
		});
		response.on('error',function(err){
			callback(err);
		});
	});
}

function main1(){
		collect(process.argv[2],function(err,data){
			data1 = data;
			output();
		});
}

function main2(){
		collect(process.argv[3],function(err,data){
			data2 = data;
			output();
		});
}

function main3(){
		collect(process.argv[4],function(err,data){
			data3 = data;
			output();
		});
}

function output(){
	if(data1&&data2&&data3){
		console.log(data1);
		console.log(data2);
		console.log(data3);
	}
}
main1();
main2();
main3();