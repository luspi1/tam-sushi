export type ProductItemType = {
	name: string
	id: number
	description: string
	image: string
	price: number
	category_slug: string
	amount?: number
}

export type CategoryItemType = {
	id: string
	image: string
	name: string
	slug: string
}

export type CartProduct = {
	name: string
	id: number
	image: string
	price: number
	amount: number
}
