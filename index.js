var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/DocHome.html', function(req, res){
    res.sendFile(__dirname + "/DocHome.html");
})

app.get('/PatientSearch.html', function(req, res){
    res.sendFile(__dirname + "/PatientSearch.html");
})

app.get('/PatientSignin.html', function(req, res){
    res.sendFile(__dirname + "/PatientSignin.html");
})

app.get('/PatientSignup.html', function(req, res){
    res.sendFile(__dirname + "/PatientSignup.html");
})

app.get('/storepg1.html', function(req, res){
    res.sendFile(__dirname + "/storepg1.html");
})

app.get('/StoreSignup.html', function(req, res){
    res.sendFile(__dirname + "/StoreSignup.html");
})
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});