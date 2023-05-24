const productDetail = require("../mongodb/schemas/productDetails.schema");
const productCategory = require("../mongodb/schemas/productCategory.schema");
const productReview = require("../mongodb/schemas/productReview.schema");

const getAllProducts = async (search, filters) => {
  return new Promise((resovle, reject) => {
    let conditionObject = {};

    // searchName for fuzzy search
    if (search.searchName) {
      conditionObject.name = { $regex: new RegExp(search.searchName, "i") };
    }

    // filterColor for color filters
    if (filters.filterColor && filters.filterColor.length > 0) {
      conditionObject.color = { $in: filters.filterColor };
    }

    // filterBrand for brand filters
    if (filters.filterBrand && filters.filterBrand.length > 0) {
      conditionObject.brand = { $in: filters.filterBrand };
    }

    // filterMaterial for material filters
    if (filters.filterMaterial && filters.filterMaterial.length > 0) {
      conditionObject.material = { $in: filters.filterMaterial };
    }

    // filterSize for size filters
    if (filters.filterSize && filters.filterSize.length > 0) {
      conditionObject.size = { $in: filters.filterSize };
    }

    productDetail
      .find(conditionObject)
      .then((result) => {
        resovle(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getReviewsById = async (conditionObject) => {
  return new Promise((resolve, reject) => {
    productReview
      .find(conditionObject)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getAllProducts,
  getReviewsById,
};
