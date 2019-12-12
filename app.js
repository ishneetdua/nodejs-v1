
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', function(req, res, next) {
    let data = {
        message: 'Hello World!'
    };
    res.status(200).send(data);
});
app.post('/api', function(req, res, next) {
    let data = req.body;
    // query a database and save data
    res.status(200).send(data);
});

/**
 * STATIC FILES
 */
app.use('/', express.static('app'));

// Default every route except the above to serve the index.html
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});

module.exports = app;
