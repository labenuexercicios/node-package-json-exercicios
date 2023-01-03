"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "01",
        email: "user1@email.com",
        password: "1111"
    },
    {
        id: "02",
        email: "user2@email.com",
        password: "2222"
    }
];
exports.products = [
    {
        id: "1",
        name: "Alimentos",
        price: 29.90,
        category: "Lacticínios"
    },
    {
        id: "2",
        name: "Kit para cabelos",
        price: 74.50,
        category: "Beleza"
    }
];
exports.purchase = [
    {
        userId: "1",
        productId: "1",
        quantity: 4,
        totalPrice: 119.60
    },
    {
        userId: "2",
        productId: "2",
        quantity: 2,
        totalPrice: 149
    }
];
