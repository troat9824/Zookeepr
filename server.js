// https://fast-lake-90377.herokuapp.com/ |
//  https://git.heroku.com/fast-lake-90377.git
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// use CSS and JS files
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
const { animals } = require('./data/animals.json')



app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});
