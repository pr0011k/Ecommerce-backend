const mongoose = require("../conf");

const productReviewSchema = new mongoose.Schema({}, { strict: false });
const productReview = mongoose.model("productReview", productReviewSchema);

module.exports = productReview;
