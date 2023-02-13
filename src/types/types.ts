export interface IProduct {
	name: string,
	id: number,
	description: string,
	image: string,
	price: number,
	category_slug: string,
	amount?: number
}