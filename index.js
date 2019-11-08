const express = require('express');
const port = process.env.PORT ||3000;
const path = require('path')


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('view engine', 'jsx')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

