import { TProduct, TPurchase, TUser } from "./types";

export const users: TUser[] = [
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
]

export const products: TProduct[] = [
    {
        id: "b001",
        price: 60 ,
        name: "Café Geisha",
        category: "Café Especial"
    },
    {
        id: "b002",
        price: 80 ,
        name: "Café Acaiá",
        category: "Café Especial"
    }
]

export const purchase: TPurchase[] = [
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
]