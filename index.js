const express = require('express');
const path = require('path');
const request = require('request');
const app = express();
const mongoose = require('mongoose');
const db = require('./db/db');
const fackdata = require('./config/data');
const config = require(__dirname + '/config/keys');

//-----------------------------------------------------------------------------------------------------------//
//------------------- requiring and using body parser to parse our req body ---------------------------------//
//-----------------------------------------------------------------------------------------------------------//

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//------------------------------------------------------------------------------------------------------------//
//-------- if the app is deployed then the port is ganna be taken from the env ,otherwise its 3003 -----------//
//------------------------------------------------------------------------------------------------------------//
const port = process.env.PORT || 3003;

//------------------------------------------------------------------------------------------------------------//
//------------------------------------- this line is for te cross origin - proplem----------------------------//
//------------------------------------------------------------------------------------------------------------//
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//-------------------------------------------------------------------------------------------------------------//
//-----------------------------to handel the get request of the component -------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
app.get('/discrp', (req, res) => {
  //------------------------------------------------------------------------------------------------------------//
  //----- geting the id number from the page query by substring the link string and index of variable-----------//
  //---------------------------------- userId length of this word ----------------------------------------------//
  //------------------------------------------------------------------------------------------------------------//
  var val = req.url.substring(
    req.url.indexOf('userId') + 'userId'.length + 1,
    req.url.length
  );
  //-------------------------------------------------------------------------------------------------------------//
  //-------------- depending on the user id from the link query we will get the discription for a the item ------//
  //-------------------------------------------------------------------------------------------------------------//
  db.Product.findOne({ userID: val }, function(err, data) {
    if (err) {
      console.log('err', err);
    }
    res.send({ data: data });
  });
});

//----------------------------------------------------------------------------------------------------------//
//------------------------------ define and use our static directores in the app ---------------------------//
//----------------------------------------------------------------------------------------------------------//
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_nmodules')));

app.get('/', (req, res) => {});

app.listen(port, () => console.log(`Listening on ${port}`));
