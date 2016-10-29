/*
Take POST request from port specified as first argv,
change to uppercase,
send to response.
*/
var stream = require('stream')
var http = require('http');
var upper = new stream.Transform();

upper._transform = function (chunk, encoding, done){
	var data = chunk.toString().toUpperCase();
	data.forEach(this.push(this));
	done();
};

server = http.createServer(function(request, response){
	request.on('error',function(data){
		data.pipe(response);
	})
	request.on('POST',function(data){
		data.pipe(upper).pipe(response)
	});
});

server.listen(process.argv[2]);