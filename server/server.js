const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()


const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};
const bookingSchema = new mongoose.Schema({
  movie_name: String,
  silver: Array,
  date: Number,
  day: String,
  time: String,
  cinemas_name: String,
  silver: Array,
  platinium: Array,
  price: Number,
  total_price: Number,
  banner_image_url: String,
  movie_grade: String
});
const Booking = mongoose.model("booking", bookingSchema);

app.post("/booking", async (req, res) => {
  const booking = await Booking.create(req.body);
  res.status(201).json({
    data: booking
  });
});
app.get("/booking", async (req, res) => {
  const booking = await Booking.find({}).lean().exec();
  res.status(200).json({
    data: booking
  });
});
app.patch("/booking/:id", async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    data: booking
  });
});
const locationSchema = new mongoose.Schema({
  cinemas: String,
  sub_region: String,
  Languages: String,
  price_range: String,
  show_timings: String,
  pricing_type: Array,
  cancellation_availability: Boolean,
});

const Location = mongoose.model("location", locationSchema);

app.get("/location", async (req, res) => {
  const locations = await Location.find({}).lean().exec();
  res.status(200).json({
    data: locations
  });
});
const foodSchema = new mongoose.Schema({
  food_name: String,
  food_price: Number,
  is_popcorn: Boolean,
  is_coke: Boolean,
  is_combo: Boolean,
  food_tag: String,
  food_image: String,
});
const Food = mongoose.model("food", foodSchema);

app.get("/food", async (req, res) => {
  const food = await Food.find({}).lean().exec();
  res.status(200).json({
    data: food
  });
});
const outdoorSchema = new mongoose.Schema({
  image: String,
  event_name: String,
  venue: String,
  is_popular: Boolean,
});
const Outdoor = mongoose.model("outdoor", outdoorSchema);

app.get("/outdoor", async (req, res) => {
  const outdoors = await Outdoor.find({}).lean().exec();
  res.status(200).json({
    data: outdoors
  });
});
const laughterSchema = new mongoose.Schema({
  image: String,
  event_name: String,
  venue: String,
});
const Laughter = mongoose.model("laughter", laughterSchema);

app.get("/laughter", async (req, res) => {
  const laughters = await Laughter.find({}).lean().exec();
  res.status(200).json({
    data: laughters
  });
});
const popularSchema = new mongoose.Schema({
  image: String,
  event_name: String,
  venue: String,
});
const Popular = mongoose.model("popular", popularSchema);

app.get("/popular", async (req, res) => {
  const populars = await Popular.find({}).lean().exec();
  res.status(200).json({
    data: populars
  });
});
const latestSchema = new mongoose.Schema({
  image: String,
  event_name: String,
  venue: String,
});
const Latest = mongoose.model("latest", latestSchema);

app.get("/latest", async (req, res) => {
  const latests = await Latest.find({}).lean().exec();
  res.status(200).json({
    data: latests
  });
});
const cinemaSchema = new mongoose.Schema({
  name: String,
  sub_region: String,
  cancellation_availability: String,
  timings: Array,
});
const Cinema = mongoose.model("cinema", cinemaSchema);

app.get("/cinema", async (req, res) => {
  const cinemas = await Cinema.find({}).lean().exec();
  res.status(200).json({
    data: cinemas
  });
});

const movieSchema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: true
  },
  cover_url: {
    type: String,
    required: true
  },
  banner_url: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  screen_types: {
    type: Array,
    required: true
  },
  languages: {
    type: Array,
    required: true
  },
  movie_duration: {
    type: String,
    required: true
  },
  rating: {
    percentage: {
      type: Number
    },
    no_of_ratings: Number
  },
  about_movie: {
    type: String,
    required: true
  },
  cast: {
    type: Array,
    required: true
  },
  crew: {
    type: Array,
    required: true
  },
  review: {
    type: Array,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  is_primier: {
    type: Boolean
  }
});

const Movie = mongoose.model("movie", movieSchema);

app.post("/movies", async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json({
    data: movie
  });
});
app.get("/movies", async (req, res) => {
  const movies = await Movie.find({}).lean().exec();
  res.status(201).json({
    data: movies
  });
});
app.get("/movies/:id", async (req, res) => {
  const movies = await Movie.findById(req.params.id).lean().exec();
  res.status(201).json({
    data: movies
  });
});
app.patch("/movies/:id", async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    data: movie
  });
});
let port = process.env.PORT || 8000;
const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log(`Listen on Port ${port}`);
  });
};
start();