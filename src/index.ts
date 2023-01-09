import { User } from "./models/model";
import { Product } from "./models/model";
import { Purchase } from "./models/model";

const users: User[] = [
    {
        id: "1",
        email : "f@gmail.com",
        password : "123456"
    },
    {
        id: "2",
        email : "g@gmail.com",
        password : "1234567"
    }
]

const products: Product[] = [
    {
        id: "1",
        name : 'PS5',
        price : 4900,
        category: "video games"
    },
    {
        id: "2",
        name : 'notebook',
        price : 3900,
        category: "computador"
    }
]

const purchases: Purchase[] = [
    {
        userId: "1",
        productId: "1",
        quantity: 1,
        totalPrice: 4900
    }
]

console.log(users[1])
console.log(products[0])
console.log(purchases[0])