var express = require('express');
var app = express();

var ejs = require('ejs');

app.set('view engine', ejs);
app.use(express.static('./public'));

app.get('/',function(req,res){
    res.render('index');
});

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Server running on port 3000');
})
