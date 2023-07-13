const express = require('express')
var cors = require('cors')
const app = express()
let { getCurrentTime } = require('./DAL/ModelSequelize')
require("dotenv").config()
app.use(express.json())
app.use(cors())
let mainRoutes = require("./routes/mainRoutes/mainRoutes")

mainRoutes(app)

async function getTime(){
  let time = await getCurrentTime()
}
getTime()
const port = process.env.MYPORT_TRANSITIONS
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
