const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kirags1231BqPESKTKBEhbss@cluster.130lbue.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean,
})

const todo = mongoose.model('todoS', todoSchema)
module.exports = {
    todo,
}