"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./models/model");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const database_2 = require("./database");
const database_3 = require("./database");
const knex_1 = require("./database/knex");
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
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get('/users', (req, res) => {
    try {
        res.status(200).send(database_1.users);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
app.get('/products', (req, res) => {
    try {
        res.status(200).send(database_2.products);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
app.get('/products/search', (req, res) => {
    try {
        const q = req.query.q;
        if (q !== undefined) {
            if (q.length < 1) {
                res.status(400);
                throw new Error("a pesquisa deve ter pelo menos 1 caracter");
            }
        }
        const result = database_2.products.filter((product) => {
            return product.name.toLowerCase().includes(q.toLowerCase());
        });
        console.log(result);
        if (result[0] === undefined) {
            res.status(404);
            console.log("aqui");
            throw new Error("nenhum produto encontrado");
        }
        res.status(200).send(result);
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.post('/users', (req, res) => {
    try {
        const { id, email, password } = req.body;
        for (let user of database_1.users) {
            if (id !== undefined) {
                if (id === user.id) {
                    res.status(400);
                    throw new Error("id já existe");
                }
            }
            if (email !== undefined) {
                if (email === user.email) {
                    res.status(400);
                    throw new Error("email já existe");
                }
            }
        }
        const newUser = {
            id,
            email,
            password
        };
        database_1.users.push(newUser);
        res.status(201).send("usuário registrado com sucesso");
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.post('/products', (req, res) => {
    try {
        const { id, name, price, category } = req.body;
        if (!name) {
            res.status(400);
            throw new Error("nome do produto não pode ser vazio");
        }
        if (!price) {
            res.status(400);
            throw new Error("preço do produto não pode ser 0");
        }
        if (!category) {
            res.status(400);
            throw new Error("a categoria do produto não pode ser vazio");
        }
        if (!id) {
            res.status(400);
            throw new Error("id não pode ser vazio");
        }
        for (let product of database_2.products) {
            if (id !== undefined) {
                if (id === product.id) {
                    res.status(400);
                    throw new Error("id já existe");
                }
            }
        }
        const newProduct = {
            id,
            name,
            price,
            category
        };
        database_2.products.push(newProduct);
        res.status(201).send("produto registrado com sucesso");
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.post('/purchases', (req, res) => {
    try {
        const { userId, productId, quantity, totalPrice } = req.body;
        const statusIdBuyer = database_1.users.find((user) => user.id === userId);
        if (!statusIdBuyer) {
            res.status(404);
            throw new Error("id não cadastrado");
        }
        const priceById = database_2.products.find((product) => product.id === productId);
        if ((priceById === null || priceById === void 0 ? void 0 : priceById.price) != undefined) {
            if (quantity * (priceById === null || priceById === void 0 ? void 0 : priceById.price) !== totalPrice) {
                res.status(400);
                throw new Error("preço total não corresponde");
            }
        }
        const statusProductIdBuyer = database_2.products.find((product) => product.id === productId);
        if (!statusProductIdBuyer) {
            res.status(404);
            throw new Error("produto não cadastrado");
        }
        const newPurchase = {
            userId,
            productId,
            quantity,
            totalPrice
        };
        database_3.purchases.push(newPurchase);
        res.status(201).send("compra registrada com sucesso");
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.get("/products/:id", (req, res) => {
    try {
        const id = req.params.id;
        const result = database_2.products.find((product) => product.id === id);
        if (!result) {
            res.status(404);
            throw new Error("produto não encontrada. Verifique o id");
        }
        res.status(200).send(result);
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.get("/purchases/:id", (req, res) => {
    try {
        const id = req.params.id;
        const result = database_3.purchases.find((purchase) => purchase.userId === id);
        if (!result) {
            res.status(404);
            throw new Error("compra não encontrada. Verifique o id");
        }
        res.status(200).send(result);
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.delete("/users/:id", (req, res) => {
    try {
        const id = req.params.id;
        const userIndex = database_1.users.findIndex((user) => user.id === id);
        if (!userIndex) {
            res.status(404);
            throw new Error("usuario não encontrado. Verifique o id");
        }
        if (userIndex >= 0) {
            database_1.users.splice(userIndex, 1);
        }
        res.status(200).send("Item deletado com sucesso");
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.delete("/products/:id", (req, res) => {
    try {
        const id = req.params.id;
        const productIndex = database_2.products.findIndex((product) => product.id === id);
        if (!productIndex) {
            res.status(404);
            throw new Error("produto não encontrado. Verifique o id");
        }
        if (productIndex >= 0) {
            database_2.products.splice(productIndex, 1);
        }
        res.status(200).send("Item deletado com sucesso");
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.put("/products/:id", (req, res) => {
    try {
        const id = req.params.id;
        const newId = req.body.id;
        const newName = req.body.name;
        const newPrice = req.body.price;
        const newCategory = req.body.category;
        const productsToEdit = database_2.products.find((product) => product.id === id);
        if (!productsToEdit) {
            res.status(404);
            throw new Error("produto não encontrada. Verifique o id");
        }
        if (!newName) {
            res.status(400);
            throw new Error("nome do produto não pode ser vazio");
        }
        if (!newPrice) {
            res.status(400);
            throw new Error("preço do produto não pode ser 0");
        }
        if (!newCategory) {
            res.status(400);
            throw new Error("a categoria do produto não pode ser vazio");
        }
        if (!newId) {
            res.status(400);
            throw new Error("id não pode ser vazio");
        }
        if (newId !== id) {
            for (let product of database_2.products) {
                if (newId !== undefined) {
                    if (newId === product.id) {
                        res.status(400);
                        throw new Error("id já existe");
                    }
                }
            }
        }
        productsToEdit.id = newId || productsToEdit.id;
        productsToEdit.name = newName || productsToEdit.name;
        productsToEdit.category = newCategory || productsToEdit.category;
        productsToEdit.price = isNaN(newPrice) ? productsToEdit.price : newPrice;
        res.status(200).send("atualização realizada com sucesso");
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const newId = req.body.id;
    const newEmail = req.body.email;
    const newPassword = req.body.password;
    const userToEdit = database_1.users.find((user) => user.id === id);
    if (!userToEdit) {
        res.status(404);
        throw new Error("usuário não encontrado. Verifique o id");
    }
    if (!newEmail) {
        res.status(400);
        throw new Error("email do usuario não pode ser vazio");
    }
    if (newPassword != undefined) {
        if (newPassword.length < 8) {
            res.status(400);
            throw new Error("a senha deve conter pelo menos 8 caracteres");
        }
    }
    if (!newId) {
        res.status(400);
        throw new Error("id não pode ser vazio");
    }
    if (newId !== id) {
        for (let product of database_2.products) {
            if (newId !== undefined) {
                if (newId === product.id) {
                    res.status(400);
                    throw new Error("id já existe");
                }
            }
        }
    }
    if (userToEdit) {
        userToEdit.id = newId || userToEdit.id;
        userToEdit.email = newEmail || userToEdit.email;
        userToEdit.password = newPassword || userToEdit.password;
    }
    res.status(200).send("atualização realizada com sucesso");
});
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield knex_1.db.raw(`
            SELECT * FROM users;
        `);
        res.status(200).send({ bandas: result });
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
//# sourceMappingURL=index.js.map