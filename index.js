// Modules and Globals
require('dotenv').config()
const express = require('express')
const path = require('path');
const methodOverride = require('method-override')

const app = express()

// Express Settings
// Express Settings
// app.set('views', __dirname + '/views')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json());

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}`);
})