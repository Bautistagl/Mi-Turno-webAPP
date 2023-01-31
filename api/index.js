const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
require('./database/config')


const app = express()
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(3000,()=>{
    console.log('server on port 3000')
})
