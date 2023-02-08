import React, { FC } from 'react'
import styles from './style.module.css'
import { ProductCounter } from '../../../../UI/Counter/ProductCounter'


interface ICartItemProps {
	img: string,
	title: string,
	price: number,
	amount: number
}

const CartItem: FC<ICartItemProps> = ({img, title, price, amount}) => {
	return (
			<li className={styles.cartItem}>
				<div className={styles.cartInfo}>
					<img src={img} alt={title}/>
					<h3>{title}</h3>
				</div>
				<div className={styles.cartControl}>
					<p className={styles.cartPrice}>{price} ₽</p>
					<ProductCounter/>
				</div>


			</li>
	)
}

export default CartItem