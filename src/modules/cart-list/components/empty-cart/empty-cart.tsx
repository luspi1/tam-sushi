import React, { FC } from 'react'
import styles from './index.module.css'
import catImg from 'src/assets/cat.jpg'
import { Link } from 'react-router-dom'
import { MainButton } from 'src/UI/main-button/main-button'

export const EmptyCart: FC = () => {
	return (
		<div className={styles.cartEmpty}>
			<h2>Корзина пуста =(</h2>
			<img src={catImg} alt='Cat' />
			<MainButton>
				<Link to='/'>К каталогу</Link>
			</MainButton>
		</div>
	)
}
