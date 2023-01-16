import { users, products, purchase, createUser, createProduct, createPurchase} from "./database";
import { CATEGORY } from "./types";

// console.log(users)
// console.log(products)
// console.log(purchase)

console.log(createUser("a003", "beltrano@email.com", "0910"))
console.log(createProduct("b003", "Café Catuaí", 800, CATEGORY.DARK_ROAST))
console.log(createPurchase("a003", "b003", 2, 1600))