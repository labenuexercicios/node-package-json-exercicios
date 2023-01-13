"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.products = exports.users = void 0;
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
        category: "Café Especial"
    },
    {
        id: "b002",
        price: 80,
        name: "Café Acaiá",
        category: "Café Especial"
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
    },
];
//# sourceMappingURL=database.js.map