var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("LetLiveMedicare");
  var myobj = [{
    "name" : "Sourav Kumar",
    "store" : "STS1202",
    "email" : "sourav@gmail.com",
    "phone" : "7488525065",
    "password" : "sourav",
    "location" : "Green Circle"
}
  ];

  dbo.collection("Store").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result); });

//   dbo.collection("Store").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });

  
});