const mongoose = require("../conf");

const productCategorySchema = new mongoose.Schema({}, { strict: false });
const productCategory = mongoose.model(
  "productCategory",
  productCategorySchema
);

module.exports = productCategory;
