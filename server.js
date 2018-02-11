const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
var router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "ajsdklfja" });
});

app.use("/api", router);
app.listen(PORT);
console.log('Magic happens on port ' + PORT);
