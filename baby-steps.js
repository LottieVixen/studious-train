var total = 0;
for (var i = 2;i <= process.argv.length - 1; i++) {
	total +=parseInt(process.argv[i]);
};
console.log(total);