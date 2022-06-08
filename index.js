const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: true })
// Set Templating Enginge
app.set('view engine', 'ejs')

// Navigation
app.get('/', (req, res)=> {
    res.render('form')
})

app.post("/game",urlencodedParser, (req,res) => {
    res.render("index", {
	name:req.body.name,
	age:req.body.age,
	email:req.body.email,
	number:req.body.number
	})
})



app.listen(4000, () => console.info('App listening on port 3000'))
