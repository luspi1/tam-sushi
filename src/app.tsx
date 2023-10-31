import React, { FC, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from 'src/pages/error-page/error-page'
import { Layout } from 'src/modules/layout/layout'
import { HomePage } from 'src/pages/home-page/home-page'
import { AppRoute } from 'src/helpers/consts'
import { PizzasPage } from 'src/pages/pizzas-page/pizzas-page'
import { RollyPage } from 'src/pages/rolly-page/rolly-page'
import { SoupPage } from 'src/pages/soup-page/soup-page'
import { CartPage } from 'src/pages/cart-page/cart-page'
import { OneProductPage } from 'src/pages/one-product-page/one-product-page'
import { LoginPage } from 'src/pages/login-page/login-page'
import { useActions } from 'src/hooks/actions/actions'
import { useLazyCheckUserQuery, useLazyGetUserQuery } from 'src/store/auth/auth.api'
import { jwtDecode } from 'jwt-decode'
import { OrderPage } from 'src/pages/order-page/order-page'

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
				path: AppRoute.Auth,
				element: <LoginPage />,
			},
			{
				path: AppRoute.Order,
				element: <OrderPage />,
			},
			{
				path: AppRoute.Pizzas,
				element: <PizzasPage />,
			},
			{
				element: <OneProductPage />,
				path: AppRoute.PizzaItem,
			},
			{
				path: AppRoute.Rolly,
				element: <RollyPage />,
			},
			{
				element: <OneProductPage />,
				path: AppRoute.RollyItem,
			},
			{
				path: AppRoute.Soup,
				element: <SoupPage />,
			},
			{
				element: <OneProductPage />,
				path: AppRoute.SoupItem,
			},
			{
				path: AppRoute.Cart,
				element: <CartPage />,
			},
		],
	},
])

const App: FC = () => {
	const { checkLoginUser, logoutUser } = useActions()
	const [checkUser] = useLazyCheckUserQuery()
	const [getUser] = useLazyGetUserQuery()
	useEffect(() => {
		;(async () => {
			const userInfo = await checkUser(null)
			const token = localStorage.getItem('token')
			if (userInfo.data && token) {
				const decodedToken = jwtDecode(token)
				const user = await getUser(decodedToken.sub ?? '')
				checkLoginUser(user.data)
			} else {
				logoutUser()
			}
		})()
	}, [])
	return <RouterProvider router={router} />
}

export default App
