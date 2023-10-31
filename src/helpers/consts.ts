export const BASE_URL = 'http://localhost:4001/api/v1'

export enum AppRoute {
	Home = '/',
	Pizzas = '/pizza',
	Soup = '/soup',
	Rolly = '/rolly',
	SoupItem = '/soup/:id',
	RollyItem = '/rolly/:id',
	PizzaItem = '/pizza/:id',
	Cart = '/cart',
	Auth = '/auth',
	Order = '/order',
}
export enum NameSpace {
	Products = 'PRODUCTS',
	Cart = 'CART',
	Auth = 'AUTH',
}
