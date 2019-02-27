const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err){
        return console.log("unable to connect to db");
    }
    console.log("Connected to db")

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5c73017bcb96683a8fb67b87")
    }, {
        $set: {
            name: "Courd"
        },
        $inc: {
            age: 1
        }
        }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
        
    })

    // db.close()
})