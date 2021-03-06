var static = require('node-static');
var fileServer = new static.Server('./public', { cache: 3600 });
require('http').createServer(function (request, response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	request.addListener('end', function () {
		fileServer.serve(request, response);
	}).resume();
}).listen(3002);