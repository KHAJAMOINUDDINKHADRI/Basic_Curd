const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('./routes/index');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('common'));

const PORT = 3001;

app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
})

