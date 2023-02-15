import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './modules/Layout'
import Home from './pages/Home/components/Home/Home'
import Cart from './pages/Cart/Cart/Cart'
import RollyPage from './pages/Rolly/components/RollyPage/RollyPage'
import PizzaPage from './pages/Pizza/components/PizzaPage/PizzaPage'
import SoupPage from './pages/Soup/components/SoupPage/SoupPage'
import OneProductPage from './pages/OneProduct/components/OneProductPage/OneProductPage'
import LoginPage from './pages/LoginPage/components/LoginPage/LoginPage'

const App: FC = () => {
	return (
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Home/>}/>
					<Route path="/cart" element={<Cart/>}/>
					<Route path="/rolly" element={<RollyPage/>}/>
					<Route path="/pizza" element={<PizzaPage/>}/>
					<Route path="/soup" element={<SoupPage/>}/>
					<Route path="/auth" element={<LoginPage/>}/>
					<Route path="/rolly/:id" element={<OneProductPage/>}/>
					<Route path="/pizza/:id" element={<OneProductPage/>}/>
					<Route path="/soup/:id" element={<OneProductPage/>}/>
				</Route>
			</Routes>
	)
}

export default App
