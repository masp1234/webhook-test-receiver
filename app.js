import express from "express"

const app = express();
app.use(express.json())

app.post("/payload", (req, res) => {
    console.log(req.body.pusher.name)
    res.status(200).send()
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`the server is listening on port ${PORT}...`)
})