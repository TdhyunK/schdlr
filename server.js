const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.static(path.resolve(__dirname, './src')));
