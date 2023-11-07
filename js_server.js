const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.get('/page1', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Сервер запущен по адресу http://localhost:${port}`);
});