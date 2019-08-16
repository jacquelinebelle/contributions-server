const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';

app.set('port', process.env.PORT || 3000);
app.locals.title = 'contributions';

app.get('/', (request, response) => {
  response.send('helo');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});