
import express from "express"
import hashtagsAPI from "./hashtagsAPI.js"

const app = express()

// app.get('/', (req,res) => {
//     res.send("Server is ready")
// })

// Get hashtag routes


app.get('/api/v1/hashtags', (req, res) => {
   res.send(hashtagsAPI)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    
})