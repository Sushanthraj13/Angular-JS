var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("MCA");

    dbo.createColletion("Final", function)
    console.log("Database Created");
    db.close();
});