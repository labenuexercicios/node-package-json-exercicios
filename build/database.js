"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchase = exports.createProduct = exports.createUser = exports.purchase = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
    {
        id: "a001",
        email: "joao@adm.com",
        password: "1234"
    },
    {
        id: "a002",
        email: "maria@adm.com",
        password: "5678"
    }
];
exports.products = [
    {
        id: "b001",
        price: 60,
        name: "Café Geisha",
        category: types_1.CATEGORY.LIGTH_ROAST
    },
    {
        id: "b002",
        price: 80,
        name: "Café Acaiá",
        category: types_1.CATEGORY.MEDIUM_ROAST
    }
];
exports.purchase = [
    {
        userld: "a001",
        productld: "Café Geisha",
        quantity: 2,
        totalPrice: 120
    },
    {
        userld: "a002",
        productld: "Café Acaiá",
        quantity: 3,
        totalPrice: 240
    }
];
function createUser(id, email, password) {
    exports.users.push({
        id,
        email,
        password
    });
    return ("Cadastro realizado com sucesso!");
}
exports.createUser = createUser;
function createProduct(id, name, price, category) {
    exports.products.push({
        id,
        name,
        price,
        category
    });
    return ("Produto criado com sucesso!");
}
exports.createProduct = createProduct;
function createPurchase(userld, productld, quantity, totalPrice) {
    exports.purchase.push({
        userld,
        productld,
        quantity,
        totalPrice
    });
    return ("Compra realizada com sucesso!");
}
exports.createPurchase = createPurchase;
//# sourceMappingURL=database.js.map