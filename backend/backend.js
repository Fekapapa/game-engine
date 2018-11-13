'use strict'

const fs = require('fs');
const http = require('http');
const path = require('path');
const port = 3000;
const data = {};

data.mapData = JSON.parse(fs.readFileSync('./json/map_data.json'));
data.droneData = JSON.parse(fs.readFileSync('./json/drone_data.json'));

http.createServer(function(req, res){
	const filePath = path.join(__dirname, '../', req.url );

	if (req.url === '/') {
		fs.readFile('../index.html', 'UTF-8', function(err, html) {
			res.writeHead(200, {'Conten-Type': 'text/html'});
			res.end(html);
		})
	} else if (req.url.match('\.css$')) {
		const fileStream = fs.createReadStream(filePath, 'UTF-8');
		res.writeHead(200, {'Conten-Type': 'text/css'});
		fileStream.pipe(res);
	} else if (req.url.match('\.js$')) {
		const fileStream = fs.createReadStream(filePath, 'UTF-8');
		res.writeHead(200, {'Conten-Type': 'text/javascript'});
		fileStream.pipe(res);
	} else if (req.url.match('\.png$')) {
		const fileStream = fs.createReadStream(filePath);
		res.writeHead(200, {'Conten-Type': 'image/png'});
		fileStream.pipe(res);
	}

	if (req.url === '/data') {
		(function(err, json) {
			res.writeHead(200, {'Conten-Type': 'text/json'});
			res.end(JSON.stringify(data));
		})();
	}

	console.log(req.url);
}).listen(port)
