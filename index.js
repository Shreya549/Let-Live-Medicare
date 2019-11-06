var express = require('express');
var opn = require('opn');
var app = express();


app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/',function(req,res){
    res.render('index');
});

app.get('/dochome', function(req,res){
    res.render('DocHome');
})

app.get('/patSignIn', function(req, res){
    res.render('PatSignIn');
})

app.get('/store', function(req, res){
    res.render('Store');
})

app.get('/PatSearch', function(req, res){
    res.render('PatSearch');
})

app.get('/PatSignUp', function(req, res){
    res.render('PatSignUp');
})

app.get('/StoreSignUp', function(req, res){
    res.render('StoreSignUp');
})

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/style.css");
});


app.get('/DocResult', function (req, res) {
    res.sendFile(__dirname + "/DocResult.html");
});



app.get('/images/android-chrome-192x192.png', function(req, res){
    res.sendFile(__dirname + "/images/android-chrome-192x192.png");
});

app.get('/images/android-chrome-512x512.png', function(req, res){
    res.sendFile(__dirname + "/images/android-chrome-512x512.png");
});

app.get('/images/apple-touch-icon.png', function(req, res){
    res.sendFile(__dirname + "/images/apple-touch-icon.png");
});

app.get('/images/background.jpg', function(req, res){
    res.sendFile(__dirname + "/images/background.jpg");
});

app.get('/images/docicon.jpg', function(req, res){
    res.sendFile(__dirname + "/images/docicon.jpg");
});

app.get('/images/favicon-16x16.png', function(req, res){
    res.sendFile(__dirname + "/images/favicon-16x16.png");
});

app.get('/images/favicon-32x32.png', function(req, res){
    res.sendFile(__dirname + "/images/favicon-32x32.png");
});

app.get('/images/favicon.ico', function(req, res){
    res.sendFile(__dirname + "/images/favicon.ico");
});

app.get('/images/favicon.svg', function(req, res){
    res.sendFile(__dirname + "/images/favicon.svg");
});

app.get('/images/patienticon.jpg', function(req, res){
    res.sendFile(__dirname + "/images/patienticon.jpg");
});

app.get('/images/site.webmanifest', function(req, res){
    res.sendFile(__dirname + "/images/site.webmanifest");
});

app.get('/images/storeicon.jpg', function(req, res){
    res.sendFile(__dirname + "/images/storeicon.jpg");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
    opn('http://localhost:3000');
});