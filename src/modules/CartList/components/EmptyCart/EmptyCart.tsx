import React, { FC } from 'react'
import styles from './styles.module.css'
import catImg from '../../../../assets/cat.jpg'
import { Link } from 'react-router-dom'
import MainButton from '../../../../UI/MainButton/MainButton'

const EmptyCart: FC = () => {
	return (
			<div className={styles.cartEmpty}>
				<h2>Корзина пуста =(</h2>
				<img src={catImg} alt="Cat"/>
				<MainButton>
					<Link to="/">К каталогу</Link>
				</MainButton>
			</div>
	)
}

export default EmptyCart