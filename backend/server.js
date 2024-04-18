const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./configs/mongoose");
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  credentials: true,
  origin: 'https://movie-review-app-kappa.vercel.app',
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});