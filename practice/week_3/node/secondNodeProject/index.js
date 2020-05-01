const fs = require("fs");
const express = require("express");

const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('<em>Hello world!</em>'));
app.get('/Node', (req, res) => res.send('<h2>Tutorial on Node.</h2>'));

app.get('/Angular', (req, res) => res.send('<h2>Tutorial on Angular</h2>'));

app.get('/', (req, res) => res.send('<h1>Welcome to Guru99 Tutorials</em>'));

let server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
console.log(`host = ${server.address().address}`);
console.log(`port = ${server.address().port}`);

