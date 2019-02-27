const {MongoClient, ObjectID} = require('mongodb')

const obj = new ObjectID()
console.log(obj);


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err){
        return console.log("unable to connect to db");
    }
    console.log("Connected to db")

//     db.collection('Todos').insertOne({
//         text: "Courd is Great!",
//         completed: false
//     }, (err, res) => {
//         if (err) {
//         return console.log("unable to insert todo")
//     }
//     console.log(JSON.stringify(res.ops, undefined, 2))
// })

        // db.collection("Users").insertOne({
        //     name: "Courd",
        //     age: 28,
        //     location: "Arizona"
        // }, (err, res) => {
        //     if (err) {
        //         return "Couldnt save to users collection"
        //     }
        //     console.log(res.ops[0]._id.getTimestamp())
        // })

    db.close()
})