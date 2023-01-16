"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
console.log((0, database_1.createUser)("a003", "beltrano@email.com", "0910"));
console.log((0, database_1.createProduct)("b003", "Café Catuaí", 800, types_1.CATEGORY.DARK_ROAST));
console.log((0, database_1.createPurchase)("a003", "b003", 2, 1600));
//# sourceMappingURL=index.js.map