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