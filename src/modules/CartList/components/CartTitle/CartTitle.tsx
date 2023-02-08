import React, { FC } from 'react'
import styles from './style.module.css'
import MainButton from '../../../../UI/MainButton/MainButton'

const CartTitle: FC = () => {
	return (
			<div className={styles.cartTitle}>
				<h1>Корзина:</h1>
				<MainButton>
					Очистить корзину
				</MainButton>
			</div>
	)
}

export default CartTitle