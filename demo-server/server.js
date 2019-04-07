const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const port = 3000;
const helmet = require('helmet');
const ee = require('@google/earthengine');
const PRIVATE_KEY = require('./medialab-1-233820-943caa4aa5f6.json');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

//pre-flight requests
app.options('*', function(req, res) {
	res.send(200);
});

ee.data.authenticateViaPrivateKey(PRIVATE_KEY, () => {
	console.log("test")
  ee.initialize(null, null, () => {
  	console.log("test2")
    // app.listen(PORT);
	app.listen(PORT, (err) => {
		if (err) {
			throw err;
		}
		/* eslint-disable no-console */
		console.log('Node Endpoints working :)');
    	console.log(`Listening on port ${PORT}`);
	});
  });
});


module.exports = server;

// const PORT = process.env.PORT || 3000;

