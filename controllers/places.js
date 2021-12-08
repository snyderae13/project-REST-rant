const router = require('express').Router()
var bodyParser = require('body-parser')
const { urlencoded } = require('express')

//create application/json parser
var jsonParser = bodyParser.json()


//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended : false})






router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res)=> {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/css/images/korean-food.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/css/images/bar-picture.jpg'
      }]
    res.render('places/index', {places})
})


router.post("/", urlencodedParser, (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body))
  console.log(obj);
  res.send("POST/places")
})




module.exports = router