const express = require('express');
const port = process.env.PORT ||3000;
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) =>console.log("hi"));

app.listen(port, () => console.log(`Listening on ${ port }`))

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('/', (req, res) => res.render('public/index'))
//   .set('view engine', 'jsx')
//   .listen(port, () => console.log(`Listening on ${ port }`))

