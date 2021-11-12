const express = require('express')
const morgan = require('morgan')

 
const db = require("./config/database")
db.connect()



const apiRouter = require('./route/api')



const app = express()
const port = 4000
const path = require('path')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))  
app.use(morgan('combined'));

 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
   res.send("hello")
})

app.use('/api',apiRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})