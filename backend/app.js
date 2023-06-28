const express = require('express')
const serverless = require('serverless-http')
var bodyParser = require('body-parser');

const app = express('')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://chandrakiranreddykovvuri:kiran@cluster0.1g1by8b.mongodb.net/test')
    .then((res) => {
        console.log('connected to database')
    }).catch(err => console.log(err))


app.use('/', require('./routes/Route'))

// app.get('/details',(req,res,err)=>{
//     console.log(res)
// })

app.listen(3001, () => {
    console.log('server connected')
})

module.exports = app
module.exports.handler = serverless(app)