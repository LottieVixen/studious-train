var net = require('net');

function leftpad(str) {
	if (str.toString().length == 1){
		return ('0'+str.toString());
	} else {
		return str;
	}
}

var server = net.createServer(function (socket) {
	date = new Date();
	socket.end(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate())+' '+leftpad(date.getHours())+':'+leftpad(date.getMinutes())+'\n');
})
server.listen(process.argv[2]);