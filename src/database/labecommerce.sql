-- Active: 1674396086099@@127.0.0.1@3306
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
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    totalPrice REAL NOT NULL,
    paid INTEGER NOT NULL, --boolean 0 false 1 true
    delivered_at TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users (id) 
);
INSERT INTO purchases (id, totalPrice, paid, delivered_at, buyer_id)
VALUES ("c001", 3000, 1, NULL, "a001"),
("c002", 4000, 0, NULL, "a001"),
("c003", 2000, 1, NULL, "a002"),
("c004", 1000, 0, NULL, "a003");


--consultar compras de usuario
SELECT users.id AS user_id,
users.email,
purchases.id AS purchase_id,
purchases.totalPrice
FROM users
INNER JOIN purchases
ON users.id = purchases.buyer_id
WHERE users.id= "a001";

DROP TABLE purchases;

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