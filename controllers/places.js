const router = require('express').Router()
const places = require("../models/places")
var bodyParser = require('body-parser')
const { urlencoded } = require('express')

//create application/json parser
var jsonParser = bodyParser.json()


//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended : false})


router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
      req.body.city = 'Anytown'
  }
  if (!req.body.state) {
      req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})



router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res)=> {
   
    res.render('places/index', {places})
})


router.post("/", urlencodedParser, (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body))
  console.log(obj);
  res.send("POST/places")
})




module.exports = router