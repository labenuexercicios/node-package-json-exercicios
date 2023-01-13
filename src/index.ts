import { Product, User, Category, Purchase } from "./models/model";

import { users } from "./database"
import { products } from "./database"
import { purchases } from "./database"

function createUser(id: string, email: string, password: string){
    const newUser: User = {
        id: id,
        email: email,
        password: password
    }
    users.push(newUser);
    console.log("Cadastro realizado com sucesso")
}

createUser("3", "h@gmail.com", "123456")

function getAllUsers() {
    users.map((user: User) => 
    console.log(user))
}

getAllUsers() 


function createProduct(id: string, name: string, price: number, category:Category){
    const newProduct: Product = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct);
    console.log("Cadastro realizado com sucesso")
}

createProduct("4", "fone", 200, Category.ELECTRONICS)

function getAllProducts() {
    products.map((product: Product) => 
    console.log(product))
}

getAllProducts()

function getProductById(id: string) {
    const result = products.filter((product: Product) => {
        return (product.id.includes(id))
    })
    console.log(result)
}

getProductById("1")


function queryProductsByName(searchProduct: string) {
    const result = products.filter((product: Product) => {
        return (product.name.toLowerCase().includes(searchProduct.toLowerCase()))
    })
    console.log(result)
}

queryProductsByName("PS")

function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number) {
    const newPurchase: Purchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }
    purchases.push(newPurchase);
    console.log("Compra realizada com sucesso")
}

createPurchase("2", "1", 1, 3900)

function getAllPurchasesFromUserId(userIdToSearch: string){
    const result = purchases.filter((purchase: Purchase) => {
        return (purchase.userId.includes(userIdToSearch))
    })
    console.log(result)
}

getAllPurchasesFromUserId("1")
