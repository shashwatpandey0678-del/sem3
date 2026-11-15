import express from 'express'
import fs from 'fs'

const app = express()

app.get('/home', (req, res) => {

    const data = fs.readFileSync('index.html', 'utf-8')

    res.send(data)

})

const PORT = 3000

app.listen(PORT, () => {
    console.log("Server running ........")
})