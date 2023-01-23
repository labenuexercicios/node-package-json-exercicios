--criando tabela users
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users( id, email, password) --ADICIONANDO VALORES
VALUES ("a001", "Fulano1@gmail.com", "123456"),
("a002", "Fulano2@gmail.com", "234567"),
("a003", "Fulano3@gmail.com", "345678");

PRAGMA table_info ('users'); --mostrar tabela

SELECT * FROM users; --pegar as infos da tabela


--criando tabela products
CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO products( id, name, price, category) --ADICIONANDO VALORES
VALUES ("p001", "produto1", 100.0, "cat1"),
("p002", "produto2", 200, "cat2"),
("p003", "produto3", 300, "cat3");

PRAGMA table_info ('products'); --mostrar tabela

SELECT * FROM products; --pegar as infos da tabela

-----------------------------------------
 --GetAllUsers
SELECT * FROM users;

 --SearchProductByName
SELECT * FROM products
WHERE name LIKE "produto2%";

  --CreatePurchase

CREATE TABLE 
purchases (
    userId TEXT PRIMARY KEY NOT NULL,
    productId TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    totalPrice REAL NOT NULL
);
INSERT INTO purchases (userId, productId, quantity, totalPrice)
VALUES ("a001", "p003", 1, 300),
("a002", "p003", 2, 600);


SELECT * FROM purchases;

--SearchProductsById
SELECT * FROM products 
WHERE id = "p002";

  --DeleteProductById
DELETE FROM products
WHERE id = "p002";

  --DeleteUserById
DELETE FROM users
WHERE id = "a002";

--EditUSerById
UPDATE users
SET password = "bananinha123"
WHERE id = "a001";


--EditProductById
UPDATE products
SET price = 50
WHERE id = "p001";


--EditUsersEmailById
UPDATE users
SET email = "teste@gmail.com"
WHERE id = "a001";


--GetUserCrescentOrder
SELECT * FROM users
ORDER BY email ASC;


--GetProductsByPrice
SELECT * FROM products
ORDER BY price ASC
LIMIT 20;


--GetProductsByBetweenPrice
SELECT * FROM products
WHERE price >=200 AND price <=1000
ORDER BY price ASC;