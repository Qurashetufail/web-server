var express = require('express');
var app =  express();
var PORT=3000;  //declaration of constant

//req: info send by user
//response : info send back to user
//get: http request method
// app.get('/',function (req,res) {
// 	res.send('Hello Express!');
// });

app.get('/about',function (req,res) {
	res.send('About Us');
});

//takes the folder you want to expose
app.use(express.static(__dirname + '/public'));

//gets the current folder directory
//console.log(__dirname);

//listens on the specified port
app.listen(PORT,function () {
	console.log("Express server started on port:"+PORT);
});