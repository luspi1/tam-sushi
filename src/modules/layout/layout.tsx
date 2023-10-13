import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'src/modules/header/header'

export const Layout: FC = () => {
	return (
		<>
			<Header />
			<main className='container'>
				<Outlet />
			</main>
		</>
	)
}
