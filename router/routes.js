const { MainController } = require("../controllers/MainController");
const { ErrorPagesController } = require("../controllers/ErrorPagesController");
const { ProductsController } = require("../controllers/ProductsController");

const routes = {
    "/": {
        code: 200,
        contentType: 'application/json',
        body: (new MainController).index()
    },
    "/products": {
        code: 200,
        contentType: 'application/json',
        body: (new ProductsController).get()
    },
    "E404": {
        code: 404,
        contentType: 'application/json',
        body: (new ErrorPagesController).E404()
    },
};

module.exports = { routes };