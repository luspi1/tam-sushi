import React, { FC } from 'react'
import styles from './style.module.css'
import { HomeCategories } from '../../../../modules/HomeCategories'


const Home: FC = () => {

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