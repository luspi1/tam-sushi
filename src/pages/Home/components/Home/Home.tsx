import React, { FC, useEffect, useState } from 'react'
import styles from './style.module.css'
import { HomeCategories } from '../../../../modules/HomeCategories/components'

const Home: FC = () => {

	const [sushi, setSushi] = useState([])


	useEffect(() => {
		fetch('http://localhost:3000/categories')
				.then(res => res.json())
				.then((json) => setSushi(json))
	}, [])


	return (
			<div className={styles.homePage}>
				<h1 className={styles.title}>
					Категории:
				</h1>

				<HomeCategories/>


			</div>
	)
}

export default Home