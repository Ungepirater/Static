var static = require('node-static');
var fileServer = new static.Server('./public', { cache: 3600 });
require('http').createServer(function (request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");
	request.addListener('end', function () {
		console.log(request);
		fileServer.serve(request, response);
	}).resume();
}).listen(3002);