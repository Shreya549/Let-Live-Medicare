var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("LetLiveMedicare");
  var myobj = [
    { email: 'jai@gmail.com', password: 'jai'},
    { email: 'shreya@gmail.com', password: 'shreya'},
    { email: 'tishu@gmail.com', password: 'tishu'},
    { email: 'mitra@gmail.com', password: 'mitra'}
  ];
  dbo.collection("Doctor").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});