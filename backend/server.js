const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const prayerRouter = require('./routes/prayers')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes
app.use('/prayers', prayerRouter)

// connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen on port
    app.listen(port, () => console.log(`connected to db & listening on port ${port}!`))
  })
  .catch(err => console.log(err))

