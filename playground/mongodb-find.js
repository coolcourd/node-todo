const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err){
        return console.log("unable to connect to db");
    }
    console.log("Connected to db")

    // db.collection('Todos').find({_id: new ObjectID("5c7232b9089d851334a18645")}).toArray().then((docs) => {
    //     console.log("Todos", JSON.stringify(docs, undefined, 2));  
    // }, (err) => {
    //     console.log("unable to get documents", err);
    // })

    db.collection("Users").find({name: "Courd"}).toArray().then((data) => {
        console.log(JSON.stringify(data, undefined, 2));        
    }, (err) => {
        console.log(err)
    })

    db.close()
})