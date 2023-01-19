export type TUser = {
    id: string,
    email: string,
    password: string
}

export enum CATEGORY {
    LIGTH_ROAST = "Torra Clara",
    MEDIUM_ROAST = "Torra Média",
    DARK_ROAST = "Torra Escura"
}

export type TProduct = {
    id: string,
    name: string,
    price: number,
    category: CATEGORY
}

export type TPurchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}