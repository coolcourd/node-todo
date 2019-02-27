const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err){
        return console.log("unable to connect to db");
    }
    console.log("Connected to db")

    // db.collection("Todos").deleteMany({text: "eat lunch"}).then((res) => {
    //     console.log(res)
    // })

    // db.collection("Todos").deleteOne({text: "eat lunch"}).then((res) => {
    //     console.log(res)
    // })

    // db.collection("Todos").findOneAndDelete({text: "eat lunch"}).then((doc) => {
    //     console.log(doc)
    // })

    // db.collection("Users").deleteMany({name: "Courd"}).then((res) => {
    //     console.log(res)
    // })

    db.collection("Users").findOneAndDelete({name: "Michael"}).then((res) => {
        console.log(res)
    })

    // db.close()
})