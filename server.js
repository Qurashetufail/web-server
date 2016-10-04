var express = require('express');
var app =  express();
var PORT=3000; 

var middleware = {
	requireAuthentication : function (req, res, next){
		console.log('private route hit!')
		next();
	},
	logger:function(req,res,next) {
		console.log('Request on '+new Date().toString()+':'+req.method+' '+req.originalUrl);
		next();
	}
};

//order of definition is important
//adding application level middleware
//app.use(middleware.requireAuthentication);

app.use(middleware.logger);

//route level middleware
app.get('/about',middleware.requireAuthentication,function (req,res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function () {
	console.log("Express server started on port:"+PORT);
});