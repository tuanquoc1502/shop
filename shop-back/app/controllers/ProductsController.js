const Product = require("../models/Product");
const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: "AKIAWLIMT56TUAGXHRO2",
  secretAccessKey: "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",
});

const BUCKET_NAME = "myphoto-q2";

const params = {
  Bucket: BUCKET_NAME,
  CreateBucketConfiguration: {
    LocationConstraint: "ap-northeast-1",
  },
  ACL: "public-read",
};

// s3.createBucket(params, function (err, data) {
//   if (err) {
//     // console.log(err);
//   } else {
//     console.log("Bucket Created Successfully", data.Location);
//   }
// });

// s3.listObjects({ Bucket: "myphoto-q" }, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     const href = "https://myphoto-q.s3.us-west-1.amazonaws.com/";
//   }
// });

const uploadFileAWS = (file) => {
  const fileContent = fs.readFileSync(file.tempFilePath);

  const params = {
    Bucket: BUCKET_NAME,
    Key: file.name,
    Body: fileContent,
    ACL: "public-read",
  };

  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully`);
  });
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

const uploadFile = (req) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ msg: "No files were uploaded" });
  }
  const file = req.files.image;
  // 1024 * 1024 meaning  > 1mb
  if (file.size > 1024 * 1024) {
    removeTmp(file.tempFilePath);
    return res.status(400).json({ msg: "File must < 1mb" });
  }

  // only image
  if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
    removeTmp(file.tempFilePath);
    return res
      .status(400)
      .json({ msg: "File format is incorrect (jpg,jpeg,png) " });
  }

  uploadFileAWS(file);
  const urlImage = `https://myphoto-q2.s3.ap-northeast-1.amazonaws.com/${file.name}`;
  removeTmp(file.tempFilePath);

  return urlImage;
};

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

    const urlImage = uploadFile(req);
    product.image = urlImage;

    product
      .save()
      .then(() => res.json(product))
      .catch((error) => {
        console.log(error);
      });
  }

  // [PATCH] /product/:id/
  editProduct(req, res, next) {
    const urlImage = uploadFile(req);

    const data = {
      ...req.body,
      image: urlImage,
    };

    Product.updateOne({ _id: req.params.id }, data)
      .then((product) => res.json(product))
      .catch((error) => {
        console.log(error);
      });
  }

  // [DELETE] /product/:id/
  deleteProduct(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.json(""))
      .catch(next);
  }
}

module.exports = new ProductController();
