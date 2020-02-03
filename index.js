const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
app.use(cors());
app.listen(5000, () => {
    console.log(`Fragbite Server Listening on port 5000`)
});


app.get("/", function(req, res) {
  res.send("");
});

app.listen(3000);