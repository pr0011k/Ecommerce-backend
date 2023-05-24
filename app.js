const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1>Hello from E-Commerce!</h1>");
});

const productRoutes = require("./routes/product.route");

app.use("/products", productRoutes);

module.exports = app;
