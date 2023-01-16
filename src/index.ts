import { Product, User, Category, Purchase } from "./models/model";
import express, { Request, Response } from 'express'
import cors from 'cors'

import { users } from "./database"
import { products } from "./database"
import { purchases } from "./database"

//npm run dev

////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////

const app = express();

app.use(express.json()) //transforma aresposta em um json
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})


app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.get('/products', (req: Request, res: Response) => {
    res.status(200).send(products)
})

app.get('/products/search', (req: Request, res: Response) => {
    const q = req.query.q as string  //http://localhost:3003/products/search?q=

    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase())
    })
    res.status(200).send(result)
})

app.post('/users', (req: Request, res: Response) => {

    const{id, email, password} = req.body as User

    const newUser = {
        id,
        email,
        password
    }
    users.push(newUser)
    res.status(201).send("usuário registrado com sucesso")
})

app.post('/products', (req: Request, res: Response) => {

    const{id, name, price, category} = req.body as Product

    const newProduct = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct)
    res.status(201).send("produto registrado com sucesso")
})

app.post('/purchases', (req: Request, res: Response) => {

    const{userId, productId, quantity, totalPrice} = req.body as Purchase

    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice 
    }
    purchases.push(newPurchase)
    res.status(201).send("compra registrada com sucesso")
})

//Get Products by id
app.get("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const result = products.find((product) => product.id === id)

    res.status(200).send(result)
})

//Get User Purchases by User id
app.get("/purchases/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const result = purchases.find((purchase) => purchase.userId === id)

    res.status(200).send(result)
})

//delete user
app.delete("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id

  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex >= 0) {
    users.splice(userIndex, 1)
  }

  res.status(200).send("Item deletado com sucesso")
})

//delete product
app.delete("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id

  const productIndex = products.findIndex((product) => product.id === id)

  if (productIndex >= 0) {
    products.splice(productIndex, 1)
  }

  res.status(200).send("Item deletado com sucesso")
})




//put products
app.put("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id
    
    const newId= req.body.id as string | undefined
    const newName= req.body.name as string | undefined
    const newPrice = req.body.price as number 
    const newCategory= req.body.category as Category | undefined

    const productsToEdit = products.find((product) => product.id === id)

    if(productsToEdit) {
        productsToEdit.id = newId || productsToEdit.id //se vier undifined, mantem o id que já existia
        productsToEdit.name = newName || productsToEdit.name
        productsToEdit.category = newCategory || productsToEdit.category 

        productsToEdit.price = isNaN(newPrice) ? productsToEdit.price : newPrice // para number, precisamos verificar se é number
    }   

    res.status(200).send("atualização realizada com sucesso")
})

//put user
app.put("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id
    
    const newId= req.body.id as string | undefined
    const newEmail= req.body.email as string | undefined
    const newPassword = req.body.password as string | undefined

    const userToEdit = users.find((user) => user.id === id)

    if(userToEdit) {
        userToEdit.id = newId || userToEdit.id //se vier undifined, mantem o id que já existia
        userToEdit.email = newEmail || userToEdit.email
        userToEdit.password = newPassword || userToEdit.password    }   

    res.status(200).send("atualização realizada com sucesso")
})