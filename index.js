const express = require('express');
const port = 3000;
app.connect()
const app = express();
app.use(express.static('public'));


// app.get('/', (req, res)=>{

//     res.render('main.html');
// })

app.listen(port, function() {
    console.log(`listening on port ${port}`);
  });

