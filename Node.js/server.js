var http = require("http");
var url = require("url");

function start(route,handle) {
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		response.writeHead(200,{"Content-Type":"text/plain"});
		var content = route(handle,pathname);
		response.write(content);
		response.end();
	}
	
	http.createServer(onRequest).listen(8910);
	console.log("Server has started in port 8910...");
}

exports.start = start;



// var http = require("http");

// http.createServer(function(request,response) {
	// response.writeHead(200,{"Content-Type":"text/plain"});
	// response.write("Hello Node.js");
	// response.end();
// }).listen(8910);