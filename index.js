const express = require("express");
const { createtodo, updatetodo } = require("./type");
const { todo } = require("./db");
const app = express();
app.use(express.json());


app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsePayload = createtodo.safeparse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "you send the wrong input",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        desc: createPayload.desc,
        completed: false,
    })
    res.json({
        msg: "todo created"
    })
})

app.get("/todo", async function (res, rej) {
    const todos = await todo.find()
    res.json({
        todos,
    })
    await todo.update({ _id: req.body },
        {
            completed: true,
        }
    )
    res.json({
        msg: "todo updated"
    })
})

app.put("completed", function (res, rej) {
    const updatePayload = req.body;
    const parsePayload = updatetodo.safeparse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "got the wrong inputs"
        })
        return;
    }

})

app.listen(3001);