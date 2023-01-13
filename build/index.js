"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./models/model");
const database_1 = require("./database");
const database_2 = require("./database");
const database_3 = require("./database");
function createUser(id, email, password) {
    const newUser = {
        id: id,
        email: email,
        password: password
    };
    database_1.users.push(newUser);
    console.log("Cadastro realizado com sucesso");
}
createUser("3", "h@gmail.com", "123456");
function getAllUsers() {
    database_1.users.map((user) => console.log(user));
}
getAllUsers();
function createProduct(id, name, price, category) {
    const newProduct = {
        id,
        name,
        price,
        category
    };
    database_2.products.push(newProduct);
    console.log("Cadastro realizado com sucesso");
}
createProduct("4", "fone", 200, model_1.Category.ELECTRONICS);
function getAllProducts() {
    database_2.products.map((product) => console.log(product));
}
getAllProducts();
function getProductById(id) {
    const result = database_2.products.filter((product) => {
        return (product.id.includes(id));
    });
    console.log(result);
}
getProductById("1");
function queryProductsByName(searchProduct) {
    const result = database_2.products.filter((product) => {
        return (product.name.toLowerCase().includes(searchProduct.toLowerCase()));
    });
    console.log(result);
}
queryProductsByName("PS");
function createPurchase(userId, productId, quantity, totalPrice) {
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    };
    database_3.purchases.push(newPurchase);
    console.log("Compra realizada com sucesso");
}
createPurchase("2", "1", 1, 3900);
function getAllPurchasesFromUserId(userIdToSearch) {
    const result = database_3.purchases.filter((purchase) => {
        return (purchase.userId.includes(userIdToSearch));
    });
    console.log(result);
}
getAllPurchasesFromUserId("1");
//# sourceMappingURL=index.js.map