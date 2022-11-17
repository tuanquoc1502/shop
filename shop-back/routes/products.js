const express = require("express");
const router = express.Router();

const productController = require("../app/controllers/ProductsController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.postProduct);
router.patch("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
