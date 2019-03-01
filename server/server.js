const express = require("express")
const bodyParser = require('body-parser')

const {mongoose} = require("./db/mongoose")
const {User} = require("./models/User")
const {Todo} = require("./models/Todo")


const app = express()
const port = process.env.PORT | 3000

app.use(bodyParser.json())

app.post("/todos", (req, res) => {
    const todo = new Todo(req.body)
    todo.save().then((r) => {
        res.send(r)
    }, (e) => {
        res.status(400).send(e)        
    })
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)    
})

module.exports.app=(app)