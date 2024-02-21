const Aarti = require("../models/aarti.model");

exports.getAllAarti = (req, res, next) => {
  Aarti.find()
    .then((aarti) => {
      res.status(200).json({
        aarti,
        success: true,
        totalRecords: aarti.length,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createAarti = (req, res, next) => {
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const lyrics = req.body.lyrics;

  const post = new Aarti({
    name: name,
    lyrics: lyrics,
    imageUrl: imageUrl,
  });

  post
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        aarti: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
