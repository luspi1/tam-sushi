import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from 'src/pages/error-page/error-page'
import { Layout } from 'src/modules/layout/layout'
import { HomePage } from 'src/pages/home-page/home-page'
import { AppRoute } from 'src/helpers/consts'
import { PizzasPage } from 'src/pages/pizzas-page/pizzas-page'
import { RollyPage } from 'src/pages/rolly-page/rolly-page'
import { SoupPage } from 'src/pages/soup-page/soup-page'
import { CartPage } from 'src/pages/cart-page/cart-page'

const router = createBrowserRouter([
	{
		path: AppRoute.Home,
		element: <Layout />,
		errorElement: <ErrorPage />,

		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: AppRoute.Pizzas,
				element: <PizzasPage />,
			},
			{
				path: AppRoute.Rolly,
				element: <RollyPage />,
			},
			{
				path: AppRoute.Soup,
				element: <SoupPage />,
			},
			{
				path: AppRoute.Cart,
				element: <CartPage />,
			},
		],
	},
])

const App: FC = () => {
	return <RouterProvider router={router} />
}

export default App
