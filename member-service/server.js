const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// route declaration
const members = require('./routes/api/members');
// routes

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Congif
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.info('MongoDb Connected'))
  .catch(err => console.warn(err));

// Member Routes
app.use(cors());
app.use('/api', members);

const port = process.env.PORT || 8081;

app.listen(port, '0.0.0.0', () =>
  console.info(`Server is running on Port ${port}`)
);
