const Product = require("../models/Product");

class ProductController {
  // [GET] /product/
  getProducts(req, res, next) {
    Product.find({})
      .then((product) => res.json(product))
      .catch(next);
  }

  // [GET] /product/:id
  getProduct(req, res, next) {
    Product.findOne({ _id: req.params.id })
      .then((product) => res.json(product))
      .catch(next);
  }

  // [POST] /product/
  postProduct(req, res, next) {
    const product = new Product(req.body);
    product
      .save()
      .then(() => res.json(product))
      .catch((error) => {
        console.log(error);
      });
  }

  // [PATCH] /product/:id/
  editProduct(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
      .then((product) => console.log(product))
      .catch(next);
  }

  // [DELETE] /product/:id/
  deleteProduct(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.json(""))
      .catch(next);
  }
}

module.exports = new ProductController();
