var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("LetLiveMedicare");
  var myobj = [{
    "name" : "Nishi Jain",
    "age" : 19,
    "gender" : "female",
    "email" : "nishi@gmail.com",
    "username" : "nishij",
    "password" : "nishij",
    "phone" : 6381033638,
    "blood" : "B+ve",
    "height" : 172,
    "weight" : 52,
    "allergy" : "Dust"
}
  ];
  dbo.collection("Patient").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});