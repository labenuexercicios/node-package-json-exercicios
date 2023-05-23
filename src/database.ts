import { User } from "./models/model";
import { Category, Product } from "./models/model";
import { Purchase } from "./models/model";

export let users: User[] = [
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


export const products: Product[] = [
    {
        id: "1",
        name : 'PS5',
        price : 4900,
        category: Category.ELECTRONICS
    },
    {
        id: "2",
        name : 'notebook',
        price : 3900,
        category: Category.ELECTRONICS
    },
    {
        id: "3",
        name : 'tenis',
        price : 390,
        category: Category.CLOTHES_AND_SHOES
    }
]

export const purchases: Purchase[] = [
    {
        userId: "1",
        productId: "1",
        quantity: 1,
        totalPrice: 4900
    }
]