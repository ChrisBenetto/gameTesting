if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const router = require('./app/routers/router');
const session = require('express-session');
const app = express();

const port = process.env.PORT || 3000;

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('./app/public'));
app.use(express.urlencoded({extended: true}));

app.use(session({
   secret: process.env.SESSION_SECRET,
   resave: true,
   saveUninitialized: true
}));
app.use(cors('*'));
app.use(express.json());
app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});