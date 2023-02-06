import React, { FC } from 'react'
import { Header } from '../../../../components/Header/Header'
import { Outlet } from 'react-router-dom'


export const Layout: FC = () => {
	return (
			<>
					<Header/>
				<main className="container">
					<Outlet/>
				</main>
			</>
	)
}

