var static = require('node-static');
var fileServer = new static.Server('./public', { cache: 3600 });
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
    	console.log(request);
        fileServer.serve(request, response);
    }).resume();
}).listen(3002);