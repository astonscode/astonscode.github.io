//node requirements

const _ = require("lodash")
const cors = require("cors")
const { v4: uuid } = require("uuid")
const express = require("express")
const fs = require("fs/promises")

const app = express()
app.use(express.json())

//listen on port and send a message when server goes active 
app.listen(3000, () => {
    console.log(`API Server Active. `)
})

//post and handle data to txt
app.post("/udata", async(req, res) => {
    const id = uuid();
    const content = req.body.content;
    const password = req.body.password;

    if (!content) {
        console.log(`Error creating. No content provided. `)
        return res.status(400)
    }

    await fs.mkdir(`data/userids`, { recursive: true })
    await fs.writeFile(`data/userids/data.txt`, `(${id}) ${content} [ ${password} ]`);

    console.log(`New user id (${id}) created. Username: "${content}", Password: "${password}"`);
    res.status(201).json({
        id: id
    });
})