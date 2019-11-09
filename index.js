const express = require('express');
const port = process.env.PORT ||3000;
const path = require('path')
const request =require('request')
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'module-0')));
app.use(express.static(path.join(__dirname, 'node_modules')))
app.get('/', (req, res) =>console.log("hi"));
// app.set('view engine', 'jsx')

app.get('/mod1', function(req, res){ 
  request('http://127.0.0.1:3001/main.js', function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      console.log(body); 
      res.send(body); 
    } 
   }); 
});

app.listen(port, () => console.log(`Listening on ${ port }`))

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('/', (req, res) => res.render('public/index'))
//   .set('view engine', 'jsx')
//   .listen(port, () => console.log(`Listening on ${ port }`))

