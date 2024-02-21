const Aarti = require("../models/aarti.model");

exports.getAllAarti = (req, res, next) => {
  Aarti.find()
    .then((aarti) => {
      res.status(200).json({
        aarti,
        success: true,
        message: "",
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
