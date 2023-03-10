import React, { FC } from 'react'
import styles from './styles.module.css'

interface ICartSum {
	sum?: number
}

const CartSum: FC<ICartSum> = ({sum}) => {
	return (
			<div className={styles.cartSum}>
				<h3>Итого:</h3>
				<p>{sum || 0} ₽</p>
			</div>
	)
}

export default CartSum