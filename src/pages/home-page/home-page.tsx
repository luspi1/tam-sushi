import React, { FC } from 'react'
import styles from './index.module.css'
import { HomeCategories } from 'src/modules/home-categories/home-categories'

export const HomePage: FC = () => {
	return (
		<div className={styles.homePage}>
			<HomeCategories />
		</div>
	)
}
