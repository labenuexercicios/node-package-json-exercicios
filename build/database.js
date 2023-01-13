"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
const model_1 = require("./models/model");
exports.users = [
    {
        id: "1",
        email: "f@gmail.com",
        password: "123456"
    },
    {
        id: "2",
        email: "g@gmail.com",
        password: "1234567"
    }
];
exports.products = [
    {
        id: "1",
        name: 'PS5',
        price: 4900,
        category: model_1.Category.ELECTRONICS
    },
    {
        id: "2",
        name: 'notebook',
        price: 3900,
        category: model_1.Category.ELECTRONICS
    },
    {
        id: "3",
        name: 'tenis',
        price: 390,
        category: model_1.Category.CLOTHES_AND_SHOES
    }
];
exports.purchases = [
    {
        userId: "1",
        productId: "1",
        quantity: 1,
        totalPrice: 4900
    }
];
//# sourceMappingURL=database.js.map