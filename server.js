// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

// config .env
require('dotenv').config({
    path:'./config/config.env'
});


// Connect to DataBase
connectDB();


// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load all routes
const authRouter = require('./routes/auth.route.js');
const userRouter = require('./routes/user.route');

// config for only development
if(process.env.NODE_ENV==='development')
{
    app.use(cors({
        origin: process.env.CLIENT_URL
    }));

    app.use(morgan('dev'));
    // Morgan gives information about each request
    // cors allows to deal with react for localhost at port 3000 without any problem
}


// Use Routes
app.use('/api',authRouter);
app.use('/api',userRouter);

app.use((req, res)=>{
    res.status(404).json({
        success: false,
        msg: "Page not found"
    });
});

const PORT =  process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});