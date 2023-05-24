const mongoose = require("../conf");

const productDetailSchema = new mongoose.Schema({}, { strict: false });
const productDetail = mongoose.model("productDetail", productDetailSchema);

module.exports = productDetail;
