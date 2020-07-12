const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
},() => {
	console.log("MongoDB database connection established. ");
});

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/api/exercises', exerciseRouter);
app.use('/api/users', usersRouter);

// If no API routes are hit, send the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
