require('dotenv').config();

const key = process.env.key;

const express = require('express');
const app = express();
const fetch = require('node-fetch');
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/articles', (request, response, next) => {
  fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+request.query.q+'&api-key='+key)
    .then(data => data.json())
    .then(data => {
      console.log(data.response);
      response.render('articles', data.response);
    });
});


app.listen(3000, () => console.log("Listening"));