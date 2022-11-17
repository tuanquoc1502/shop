const productsRouter = require('./products')

function route(app) {
    app.use("/products", productsRouter);
}

module.exports = route;
