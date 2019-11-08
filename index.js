const express = require('express');
const port = process.env.PORT ||3000;
const path = require('path')


express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.render('public/index'))
  .set('view engine', 'jsx')
  .listen(port, () => console.log(`Listening on ${ port }`))

