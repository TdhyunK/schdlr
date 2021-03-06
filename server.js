const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 8080;
console.log(PORT);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use("/api", routes);
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));
app.listen(PORT);
