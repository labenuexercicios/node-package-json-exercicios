export type User = {
    id: string,
    email : string,
    password : string,
  }

export enum Category {
    ACCESSORIES = "Acessórios",
    CLOTHES_AND_SHOES = "Roupas e calçados",
    ELECTRONICS = "Eletrônicos"
}

export type Product = {
    id: string,
    name : string,
    price : number,
    category: string
  }

export type Purchase = {
    userId: string,
    productId  : string,
    quantity  : number,
    totalPrice : number
  }

