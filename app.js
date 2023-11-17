require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

app.use('/pasien', require('./routes/pasien-route'))

app.use((err,req,res,next) =>{
    console.log(error.stack)
    console.log(error.name)
    console.log(error.code)

    res.status(500).json({
        message: "Something went wrong"
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

