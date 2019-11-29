// get an instance of router

const express = require('express');
const router = express.Router();
const citiesModel= require('./citiesmodels');

router.get('/city',
    (req, res) => {
        citiesModel.find((err, cities) => {
      if (err) {
          console.log('Error find users: ', error);
          return res.status(500).json({ err: 'Error al consultar usuarios.'})
      }
      res.status(200).json({ cities: cities });
  });
});

/*
//this is how you implement a city route by specific city
router.get('/:name',
	(req, res) => {
  		let cityRequested = req.params.name;
  		cityModel.findOne({ name: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});
*/

// // route with parameters (http://localhost:8080/hello/:name)
// router.get('/test', function(req, res) {
//     res.send('"msg: Test work"');

router.post('/ciudades',(req, res) => {
    const newCity = new citiesModel(req.body);
    newCity.save ((err, citySaved) => {
        if (err){
            console.log('error')
            return res.status (500).json({err:'Error'})
        }
        res.status (200).json ({newCity:citySaved});
    })
});

// apply the routes to our application

module.exports = router;


