import React, { FC } from 'react'
import styles from './index.module.scss'

interface ICartSum {
	sum?: number
}

export const CartSum: FC<ICartSum> = ({ sum }) => {
	return (
		<div className={styles.cartSum}>
			<h3>Итого:</h3>
			<p>{sum ?? 0} ₽</p>
		</div>
	)
}
