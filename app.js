require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

app.use('/pasien', require('./routes/pasien-route'))
app.use('/vaksin', require('./routes/vaksin-route'))
app.use('/lokasi', require('./routes/lokasi-route'))
app.use('/vaksinasi', require('./routes/vaksinasi-route'))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
})

