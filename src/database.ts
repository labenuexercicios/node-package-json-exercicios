import { TProduct, TPurchase, TUser } from "./types";

export const users: TUser[] = [
	{
		id: "54988",
		email: "user1@email.com",
        password: "1111"
	},
	{
		id: "848",
		email: "user2@email.com",
        password: "2222"
	}
]

export const products: TProduct[] = [
	{
		id: "1",
		name: "Queijos",
        price: 29.90,
        category: "Lacticínios"
	},
	{
		id: "2",
		name: "Kit para cabelos",
        price: 74.50,
        category: "Beleza"
	}
]

export const purchase: TPurchase[] = [
	{
		userId: "1",
		productId: "1",
        quantity: 4,
        totalPrice: 119.60
	},
	{
		userId: "2",
		productId: "2",
        quantity: 2,
        totalPrice: 149
	}
]