import React, { FC } from 'react'
import styles from './index.module.css'
import { selectCartItemById } from 'src/modules/cart-list/store/cart.selectors'
import { useAppSelector } from 'src/hooks/store'
import { useActions } from 'src/hooks/actions/actions'
import { ProductCounter } from 'src/components/product-counter/product-counter'

interface ICartItemProps {
	img: string
	title: string
	price: number
	amount: number
	id: number
}

export const CartItem: FC<ICartItemProps> = ({ img, title, price, amount, id }) => {
	const cartItem = useAppSelector(selectCartItemById(id))

	const { addCartItem, removeCartItem } = useActions()

	const currentItem = {
		id,
		name: title,
		price,
		image: img,
		amount,
	}
	return (
		<li className={styles.cartItem}>
			<div className={styles.cartInfo}>
				<img src={img} alt={title} />
				<h3>{title}</h3>
			</div>
			<div className={styles.cartControl}>
				<p className={styles.cartPrice}>{price} ₽</p>
				<ProductCounter
					amount={cartItem?.amount || 0}
					addEvent={() => addCartItem(currentItem)}
					removeEvent={() => removeCartItem(currentItem)}
				/>
			</div>
		</li>
	)
}
