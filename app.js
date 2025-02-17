const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/v1/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});