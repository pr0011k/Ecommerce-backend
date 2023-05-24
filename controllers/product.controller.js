const productService = require("../services/product.service");

exports.getAllProducts = ({ query, body }, res) => {
  productService
    .getAllProducts(query, body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.productsReviews = ({ params }, res) => {
  productService
    .getReviewsById(params)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
