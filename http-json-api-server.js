var http = require('http');
var url = require('url');

var server = http.createServer(function (request,response){
	if (request.method == 'GET'){
		reqObj = url.parse(request.url,true);
		if (reqObj.pathname == '/api/parsetime' ) {
			var dateString = reqObj.query.iso;
			//console.error(reqObj);
			var date = new Date(dateString)
			var dater = {};
			//console.error(date);
			dater['hour'] = date.getHours();
			dater['minute'] = date.getMinutes();
			dater['second'] = date.getSeconds();
			//console.error(JSON.stringify(dater));
			response.end(JSON.stringify(dater));
		};
		if (reqObj.pathname == '/api/unixtime' ) {
			var dateString = reqObj.query.iso;
			var date = new Date(dateString)
			var dater = {};
			dater['unixtime'] = date.getTime();
			response.end(JSON.stringify(dater));
		};
	};
});

server.listen(process.argv[2]);