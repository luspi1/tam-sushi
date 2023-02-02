import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './modules/Layout'
import Home from './pages/Home/components/Home/Home'
import Cart from './pages/Cart/Cart/Cart'

const App: FC = () => {
	return (
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Home/>}/>
					<Route path="/cart" element={<Cart/>}/>
				</Route>
			</Routes>
	)
}

export default App
