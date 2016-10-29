/*
Take POST request from port specified as first argv,
change to uppercase,
send to response.
*/
var http = require('http');
/*
var stream = require('stream')
var upper = new stream.Transform({decodeStrings: false});

upper._transform = function (chunk, encoding, done){
	done(null,chunk.toUpperCase());
};

server = http.createServer(function(request, response){
	request.on('error',function(data){
		requset.end();
	})
	request.on('POST',function(data){
		console.error(data);
		data.pipe(upper).pipe(response)
		requset.end();
	});
});

server.listen(process.argv[2]);
/*/
const Transform = require('stream').Transform;

const upper = new Transform();
upper._transform = function (chunk, encoding, callback){
	callback(null,data.toUpperCase());
}

server = http.createServer(function(request, response){
	request.on('error',function(data){
		request.end();
	})
	request.on('POST',function(data){
		console.error(data);
		data.pipe(upper).pipe(response)
		request.end();
	});
});

server.listen(process.argv[2]);

/*/
//*/