const router = require("express").Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getAllProducts);
router.get("/:productId", productController.productsReviews);

module.exports = router;
