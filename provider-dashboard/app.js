var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var apiRouter = require('./routes/case');
var app = express();
var mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb://ec2-18-206-211-81.compute-1.amazonaws.com:27017/crm-new',
    { promiseLibrary: require('bluebird') }
  )
  .then(() => console.log('connection successful'))
  .catch(err => console.error(err));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/crm-new')));
app.use('/', express.static(path.join(__dirname, 'dist/crm-new')));
app.use('/api', apiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () =>
  console.log(`Server is running on Port ${port}`)
);
module.exports = app;
