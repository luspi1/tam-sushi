import express from 'express'
import cors from 'cors'

import { categories } from './mockData/categories.mjs'
import { pizzas } from './mockData/pizzas.mjs'
import { rolly } from './mockData/rolly.mjs'
import { soups } from './mockData/soups.mjs'

const PORT = 4001
const app = express()
const corsOptions = {
	origin: '*',
	credentials: true,
	optionSuccessStatus: 200
}


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(corsOptions))

const getAllCategories = (req, res) => {
	res.status(200).json(categories)
}
const getProductItems = (req, res) => {
	const param = req.params.category
	let currentProducts
	switch (param) {
		case 'pizza':
			currentProducts = pizzas
			break
		case 'rolly':
			currentProducts = rolly
			break
		case 'soups':
			currentProducts = soups
			break
		default:
			currentProducts = []
	}
	res.status(200).json(currentProducts)
}
const getProduct = (req, res) => {
	const id = req.params.productId


	const allProducts = [...pizzas, ...rolly, ...soups]

	const currentProduct = allProducts.find(product => +id === product.id)

	res.status(200).json(currentProduct)
}


app.get('/api/v1/categories', getAllCategories)
app.get('/api/v1/:category', getProductItems)
app.get('/api/v1/one-product/:productId', getProduct)

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))



