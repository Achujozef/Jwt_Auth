const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

require('dotenv').config();

const registerRoute = require('./routes/auth/register')
const loginRoute = require('./routes/auth/login')
const meRoute = require('./routes/auth/me')
const logoutRoute = require('./routes/auth/logout')
const verifyRoute = require('./routes/auth/verify')


const app = express();


app.use(express.json());
app.use(cookieParser());


app.use(registerRoute)
app.use(loginRoute)
app.use(meRoute)
app.use(logoutRoute)
app.use(verifyRoute)

app.use(express.static('client/build'));
app.get('*',(req,res)=>{
    return res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server listening on Port ${PORT}`));