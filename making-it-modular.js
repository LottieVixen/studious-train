var fls = require('./module-6');
fls(process.argv[2],process.argv[3],function(err,data){
	if(err) {
		console.log(err);
	}
	console.log(data);
})
