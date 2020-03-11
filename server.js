require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const convert = require("xml-js");
const rateLimit = require("express-rate-limit");
var cors = require("cors");
var path = require('path');
const app = express();
const port = 3000;

const bodyParser = require('body-parser'); 


// Rate limiting - Goodreads limits to 1/sec, so we should too

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // limit each IP to 1 requests per windowMs
});

//  apply to all requests
app.use(limiter);

// Allow CORS from any origin
app.use(cors());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
  res.sendFile(__dirname+"/index.html");
   res.send('user ' + req.body.message);
return res.body;



  // return res.json({
  //     success: true
  //   });
 //  	var request = require('request');
	// var username = 'demo.bmonzel.api';
	// var apiKey = '7af56d0c-53a8-e9df-f0b7-6c84223456ef';
	// var dbMode = '1';
	// var password = apiKey + '|' + dbMode;
	// var options = {
	//   headers: { 'Content-type' : 'application/json' },
	//   auth: {
	//     user: username,
	//     password: password
	//   },
	//   json: {
	//     "message": "Hello, world"
	//   },
	//   uri: 'https://api.securevan.com/v4/echoes'
	// };

	//   request.post(options, function (err, res, body) {
	//     if (err) {
	//       console.dir(err);
	//       return;
	//     }
	//     console.dir(res.statusCode);
	//     console.dir(body);
	//   });



  });






// This spins up our sever and generates logs for us to use.
// Any console.log statements you use in node for debugging will show up in your
// terminal, not in the browser console!
app.listen(port, () => console.log(`Example app listening on port ${port}!`));