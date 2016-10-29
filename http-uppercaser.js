/*
Take POST request from port specified as first argv,
change to uppercase,
send to response.
*/
var stream = require('stream')
var http = require('http');
var upper = new stream.Transform();

upper._transform = function (chunk, encoding, done){
	console.error(chunk.toUpperCase());
	done(null,chunk.toUpperCase());
};

server = http.createServer(function(request, response){
	request.on('error',function(data){
		requset.end();
	})
	request.on('POST',function(data){
		data.pipe(upper).pipe(response)
		requset.end();
	});
});

server.listen(process.argv[2]);