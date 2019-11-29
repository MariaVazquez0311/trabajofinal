const express=require('express');
const bodyParser=require('body-parser');
const app= express();
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://marvazquez:curso2019@myapp-usw5b.mongodb.net/Myappbd?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

var cors = require('cors');

const citiesRoutes = require('./citiesrouter');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api',cors(), citiesRoutes);

// app.get('/api', function(req, res) {
//   res.send('ciudades!');  
// });


app.use('/api', citiesRoutes);
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});




