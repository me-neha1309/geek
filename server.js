const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')

app.use(expressLayout)
app.set('views', path.join(__dirname, 'views'));

console.log(path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World...');
})


app.get('/user', (req, res) => {
    res.render('user');
})


const server = app.listen(process.env.PORT || 3999, () => {
    console.log(`Listening....`) 
})