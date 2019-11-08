const express = require('express');
const port = process.env.PORT+1 ||3001;
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) =>console.log("hi"));


app.listen(port, () => console.log(`Listening on ${ port }`))