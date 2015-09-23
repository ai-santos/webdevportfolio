var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');


//middleware
app.use(bodyParser.urlencoded({extended: true}));  
app.use(express.static(__dirname + '/clean')); 

// //STATIC ROUTES
//homepage
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/clean/index.html');
});

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});