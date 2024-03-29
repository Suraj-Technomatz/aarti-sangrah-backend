const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const aartiRoutes = require("./routes/aarti.route");
const suggestionRoutes = require("./routes/suggestion.route");

const PORT = 8080;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1/aarti", aartiRoutes);
app.use("/v1/suggestion", suggestionRoutes);

app.use((req, res, error) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data || [];
  res.status(status).json({
    message: message,
    data: data,
  });
});

mongoose
  .connect("mongodb+srv://sharad:Test12345@cluster0.367g8lu.mongodb.net/", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(PORT, () => {
      console.log("Server is listen on port " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
