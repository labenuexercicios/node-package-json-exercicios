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
    try{
        res.status(200).send(users)
    } catch(error:any){
        res.status(500)
        res.send(error.message)
    }
})


app.get('/products', (req: Request, res: Response) => {
    try{
    res.status(200).send(products)
    } catch(error:any){
        res.status(500)
        res.send(error.message)
    }

})

app.get('/products/search', (req: Request, res: Response) => {
    

    try{
        const q = req.query.q as string  //http://localhost:3003/products/search?q=

        if(q !== undefined) {
             if(q.length < 1) {
                 res.status(400)
                 throw new Error("a pesquisa deve ter pelo menos 1 caracter")
             }
        }
    
        const result = products.filter((product) => {
            return product.name.toLowerCase().includes(q.toLowerCase())
        })
        console.log(result)
        if(result[0] === undefined){
             res.status(404)
             console.log("aqui")
             throw new Error("nenhum produto encontrado")
           
         }
        res.status(200).send(result)

    } catch(error:any) {
        if(res.statusCode === 200){ //significa que é um erro inesperado e que não possui mensagem especifica
            res.status(500)
        }
        res.send(error.message)
    }
   
})

app.post('/users', (req: Request, res: Response) => {

    try{
        const{id, email, password} = req.body as User

        for(let user of users) {
            if (id !== undefined) {
                if (id === user.id) {
                    res.status(400)
                    throw new Error("id já existe")
                }
            }

            if (email !== undefined) {
                if (email === user.email) {
                    res.status(400)
                    throw new Error("email já existe")
                }
            }
        }


        const newUser: User = {
            id,
            email,
            password
        }
        users.push(newUser)
        res.status(201).send("usuário registrado com sucesso")

    } catch(error: any){
        if(res.statusCode === 200){ //significa que é um erro inesperado e que não possui mensagem especifica
            res.status(500)
        }
        res.send(error.message)

    }
   
})

app.post('/products', (req: Request, res: Response) => {
    
    try{
    const{id, name, price, category} = req.body as Product


    if(!name){
        res.status(400)
            throw new Error("nome do produto não pode ser vazio")
    }

    if(!price){
        res.status(400)
            throw new Error("preço do produto não pode ser 0")
    }

    if(!category){
        res.status(400)
            throw new Error("a categoria do produto não pode ser vazio")
    }

    if(!id){
        res.status(400)
            throw new Error("id não pode ser vazio")
    }

    for(let product of products) {
        if (id !== undefined) {
            if (id === product.id) {
                res.status(400)
                throw new Error("id já existe")
            }
        }
    }

    const newProduct = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct)
    res.status(201).send("produto registrado com sucesso")
    } catch (error: any){
        if(res.statusCode === 200){ //significa que é um erro inesperado e que não possui mensagem especifica
            res.status(500)
        }
        res.send(error.message)
    }
})

app.post('/purchases', (req: Request, res: Response) => {

    try{
    const{userId, productId, quantity, totalPrice} = req.body as Purchase

    const statusIdBuyer = users.find((user) => user.id === userId)
    //verifica se o userID digitado existe no banco de dados
    if(!statusIdBuyer) {
        res.status(404) 
        throw new Error("id não cadastrado")
    }

    //verifica se a quantidade bate com o valor total
    const priceById = products.find((product) => product.id === productId)
    if (priceById?.price != undefined) {
        if(quantity * priceById?.price !== totalPrice){
            res.status(400)
            throw new Error("preço total não corresponde")
        }
    }

    const statusProductIdBuyer = products.find((product) => product.id === productId)

    //verifica se o userID digitado existe no banco de dados
    if(!statusProductIdBuyer) {
        res.status(404) 
        throw new Error("produto não cadastrado")
    }
    

    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice 
    }
    purchases.push(newPurchase)
    res.status(201).send("compra registrada com sucesso")
    }catch (error: any){
        if(res.statusCode === 200){ //significa que é um erro inesperado e que não possui mensagem especifica
            res.status(500)
        }
        res.send(error.message)
    } 
})

//Get Products by id
app.get("/products/:id", (req: Request, res: Response) => {
    try {
    const id = req.params.id
    const result = products.find((product) => product.id === id)

    if(!result){
        res.status(404)
        throw new Error("produto não encontrada. Verifique o id")//se cair aqui, o throw joga direto pro catch
    }        

    res.status(200).send(result)
    } catch (error:any) {  //qualquer erro vai cair aqui

        if(res.statusCode === 200){ //significa que é um erro inesperado e que não possui mensagem especifica
            res.status(500)
        }
        res.send(error.message)
    }
})

//Get User Purchases by User id
app.get("/purchases/:id", (req: Request, res: Response) => {
    try {
    const id = req.params.id

    const result = purchases.find((purchase) => purchase.userId === id)

    if(!result){
        res.status(404)
        throw new Error("compra não encontrada. Verifique o id")//se cair aqui, o throw joga direto pro catch
    }        

    res.status(200).send(result)
    } catch (error:any) {  //qualquer erro vai cair aqui

        if(res.statusCode === 200){ //significa que é um erro inesperado e que não possui mensagem especifica
            res.status(500)
        }
        res.send(error.message)
    }
})


//delete user
app.delete("/users/:id", (req: Request, res: Response) => {
    try{
        const id = req.params.id

        const userIndex = users.findIndex((user) => user.id === id)

        if(!userIndex){
            res.status(404)
            throw new Error("usuario não encontrado. Verifique o id")//se cair aqui, o throw joga direto pro catch
        } 

        if (userIndex >= 0) {
            users.splice(userIndex, 1)
        }

        res.status(200).send("Item deletado com sucesso")
    }catch (error:any) {
            
        if(res.statusCode === 200){ //significa que é um erro inesperado e que não possui mensagem especifica
            res.status(500)
        }
        res.send(error.message)
    }
})

//delete product
app.delete("/products/:id", (req: Request, res: Response) => {
    try{
    const id = req.params.id

    const productIndex = products.findIndex((product) => product.id === id)

    if(!productIndex){
        res.status(404)
        throw new Error("produto não encontrado. Verifique o id")//se cair aqui, o throw joga direto pro catch
    } 

    if (productIndex >= 0) {
        products.splice(productIndex, 1)
    } 

    res.status(200).send("Item deletado com sucesso")
    }catch (error:any) {
            
        if(res.statusCode === 200){ //significa que é um erro inesperado e que não possui mensagem especifica
            res.status(500)
        }
        res.send(error.message)
    }
})




//put products
app.put("/products/:id", (req: Request, res: Response) => {
    try{

    const id = req.params.id
    
    const newId= req.body.id as string | undefined
    const newName= req.body.name as string | undefined
    const newPrice = req.body.price as number 
    const newCategory= req.body.category as Category | undefined

    const productsToEdit = products.find((product) => product.id === id)

    if(!productsToEdit){
        res.status(404)
        throw new Error("produto não encontrada. Verifique o id")//se cair aqui, o throw joga direto pro catch
    }  

    if(!newName){
        res.status(400)
            throw new Error("nome do produto não pode ser vazio")
    }

    if(!newPrice){
        res.status(400)
            throw new Error("preço do produto não pode ser 0")
    }

    if(!newCategory){
        res.status(400)
            throw new Error("a categoria do produto não pode ser vazio")
    }

    if(!newId){
        res.status(400)
            throw new Error("id não pode ser vazio")
    }

    
    if(newId !== id){   //se for o mesmo id que já estava, não tem problema
        for(let product of products) {
            if (newId !== undefined) {
                if (newId === product.id) {
                    res.status(400)
                    throw new Error("id já existe")
                }
            }
        }
    }
    

    
        productsToEdit.id = newId || productsToEdit.id //se vier undifined, mantem o id que já existia
        productsToEdit.name = newName || productsToEdit.name
        productsToEdit.category = newCategory || productsToEdit.category 

        productsToEdit.price = isNaN(newPrice) ? productsToEdit.price : newPrice // para number, precisamos verificar se é number

    res.status(200).send("atualização realizada com sucesso")
    }catch (error:any) {
                
        if(res.statusCode === 200){ //significa que é um erro inesperado e que não possui mensagem especifica
            res.status(500)
        }
        res.send(error.message)
    }
})

//put user
app.put("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id
    
    const newId= req.body.id as string | undefined
    const newEmail= req.body.email as string | undefined
    const newPassword = req.body.password as string | undefined

    const userToEdit = users.find((user) => user.id === id)

    if(!userToEdit){
        res.status(404)
        throw new Error("usuário não encontrado. Verifique o id")//se cair aqui, o throw joga direto pro catch
    }  

    if(!newEmail){
        res.status(400)
            throw new Error("email do usuario não pode ser vazio")
    }

    if (newPassword != undefined) {
        if(newPassword.length < 8){
            res.status(400)
                throw new Error("a senha deve conter pelo menos 8 caracteres")
        }
    }

    if(!newId){
        res.status(400)
            throw new Error("id não pode ser vazio")
    }

    
    if(newId !== id){   //se for o mesmo id que já estava, não tem problema
        for(let product of products) {
            if (newId !== undefined) {
                if (newId === product.id) {
                    res.status(400)
                    throw new Error("id já existe")
                }
            }
        }
    }
    

    if(userToEdit) {
        userToEdit.id = newId || userToEdit.id //se vier undifined, mantem o id que já existia
        userToEdit.email = newEmail || userToEdit.email
        userToEdit.password = newPassword || userToEdit.password    }   

    res.status(200).send("atualização realizada com sucesso")
})