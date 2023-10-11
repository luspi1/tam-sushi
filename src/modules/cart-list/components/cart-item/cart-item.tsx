import React, { FC } from 'react'
import styles from './index.module.css'
import { ProductCounter } from 'src/components/product-counter/ProductCounter'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'src/store'
import { selectCartItemById } from 'src/modules/cart-list/store/cart.selectors'
import { addCartItem } from 'src/modules/cart-list/store/cart.slice'

interface ICartItemProps {
	img: string
	title: string
	price: number
	amount: number
	id: number
}

export const CartItem: FC<ICartItemProps> = ({ img, title, price, amount, id }) => {
	const dispatch = useAppDispatch()
	const cartItem = useSelector(selectCartItemById(id))

	const createItem = () => {
		dispatch(addCartItem(cartItem))
	}

	const deleteItem = () => {
		dispatch(removeCartItem(cartItem))
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
					addEvent={createItem}
					removeEvent={deleteItem}
				/>
			</div>
		</li>
	)
}
