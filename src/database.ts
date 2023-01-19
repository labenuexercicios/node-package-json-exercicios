import { CATEGORY, TProduct, TPurchase, TUser } from "./types";

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
        category: CATEGORY.LIGTH_ROAST
    },
    {
        id: "b002",
        price: 80 ,
        name: "Café Acaiá",
        category: CATEGORY.MEDIUM_ROAST
    }
]

export const purchase: TPurchase[] = [
    {
        userId: "a001",
        productId: "Café Geisha",
        quantity: 2,
        totalPrice: 120
    },
    {
        userId: "a002",
        productId: "Café Acaiá",
        quantity: 3,
        totalPrice: 240
    }
]

export function createUser(id: string, email: string, password: string) : string{
    users.push({
        id,
        email,
        password
    });
    return ("Cadastro realizado com sucesso!");
}

export function createProduct(id: string, name: string, price: number, category: CATEGORY) : string{
    products.push({
    id,
    name,
    price,
    category
    });
    return ("Produto criado com sucesso!");
}

export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number) : string{
    purchase.push({
    userId,
    productId,
    quantity,
    totalPrice
    });
    return ("Compra realizada com sucesso!");
}