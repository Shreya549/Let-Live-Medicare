var express = require('express');
var opn = require('opn');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/LetLiveMedicare'); 
var db=mongoose.connection; 

db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 

app.get('/',function(req,res){
    res.render('index');
});

app.get('/dochome', function(req,res){
    res.render('DocHome');
})

app.post('/DocSignIn', function(req, res){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    var pass = req.body.password;
    var user = req.body.email;

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("LetLiveMedicare");
    var query = { email : user };

    dbo.collection("Doctor").find(query).toArray(function(err, result) {
        if (err) throw err;
        var passorig = result[0]["password"];

        if (pass == passorig)
        {
            console.log("User Verified");
            res.redirect('/PatSearch');
        }

        else{
            console.log("Wrong User Id or Password");
            res.redirect('/dochome');
        }
        db.close();
    });
    });
})

app.get('/PatientSignIn', function(req, res){
    res.render('PatSignIn');
})


app.post('/Pat_Sign_In', function(req, res){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    var pass = req.body.pass;
    var user = req.body.user;

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("LetLiveMedicare");
    var query = { "username" : user };

    dbo.collection("Patient").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        var passorig = result[0]["password"];
        if (pass == passorig)
        {
            console.log("User Verified");
            res.redirect('/Personal');
        }

        else{
            console.log("Wrong User Id or Password");
           res.redirect('/PatientSignIn');
        }
        db.close();
    });
    });
})

app.get('/storelogin', function(req, res){
    res.render('Store');
})
app.get('/Personal', function(req,res){
    res.render('Personal');
})
app.get('/personal/Medicine', function(req,res){
    res.render('Medicine');
})

app.get('/personal/Medicine/SearchStore', function(req, res){
    res.render('SearchStore');
})


app.get('/personal/Health', function(req,res){
    res.render('Health');
})
app.get('/personal/Test', function(req,res){
    res.render('Test');
})

app.post('/pat_signup', function(req, res){
    var name = req.body.name;
    var age = req.body.age;
    var gender = req.body.gender;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var phone = req.body.phone;
    var blood = req.body.blood;
    var height = req.body.height;
    var weight = req.body.weight;
    var allergy = req.body.allergy;

    var data = {
        "name" : name,
        "age" : age,
        "gender" : gender,
        "email" : email,
        "username" : username,
        "password" : password,
        "phone" : phone,
        "blood" : blood,
        "height" : height,
        "weight" : weight,
        "allergy" : allergy
    }

    db.collection('Patient').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        
        console.log("Record inserted Successfully"); 
        res.render('PatSignIn');
            
     }); 
})


app.get('/PatSearch', function(req, res){
    res.render('PatSearch');
})

app.post('/pat_search', function(req, res){
    res.redirect('/PatDetails');
})

app.get('/PatDetails', function(req, res){
    res.render('PatDetails');
})

app.get('/pat/test', function(req, res){
    res.render('PatTest');
})

app.get('/pat/health', function(req, res){
    res.render('PatHealth');
})

app.get('/pat/medicine', function(req, res){
    res.render('PatMedicine');
})

app.get('/pat/addMedicine', function(req, res){
    res.render('PatAddMed');
})

app.get('/pat/addTest',function(req, res){
    res.render('AddTest');
})
app.get('/PatSignUp', function(req, res){
    res.render('PatSignUp');
})

app.get('/pat/UpdateHealth', function(req, res){
    res.render('UpdateHealth');
})
app.get('/StoreSignUp', function(req, res){
    res.render('StoreSignUp');
})

app.post('/store_sign_up', function(req, res){
    var name = req.body.name;
    var sname = req.body.sname;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;
    var location = req.body.location;

    var data = {
        "name" : name,
        "sname" : sname,
        "email" : email,
        "password" : password,
        "phone" : phone,
        "location" : location
    }

    dbo.collection("Store").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    db.collection('Store').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        
        console.log("Record inserted Successfully"); 
        res.render('Store');
            
     });
});

app.post('/Store_sign_in', function(req, res){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    var pass = req.body.pass;
    var sname = req.body.sname;

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("LetLiveMedicare");
    var query = { "store" : sname };
    res.redirect('/StoreDetails');
    dbo.collection("Store").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        //var passorig = result[0]["password"];
        // if (pass == passorig)
        // {
        //     console.log("User Verified");
        //     res.redirect('/');
        // }

        // else{
        //     console.log("Wrong User Id or Password");
        //    res.redirect('/storelogin');
        // }
        db.close();
    });
    });
})


app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/style.css");
});


app.get('/StoreDetails', function(req, res){
    res.render('StoreDetails');
})

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