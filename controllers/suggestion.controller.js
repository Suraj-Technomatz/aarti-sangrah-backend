const Suggestion = require("../models/suggestion.model");

exports.getAllSuggestion = (req, res, next) => {
  Suggestion.find()
    .then((suggestions) => {
      res.status(200).json({
        suggestions,
        success: true,
        totalRecords: suggestions.length,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createSuggestion = (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const suggestion = req.body.suggestion;
  const rating = req.body.rating;

  const record = new Suggestion({
    name: name,
    phone: phone,
    suggestion: suggestion,
    rating: rating,
  });

  record
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        suggestion: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
