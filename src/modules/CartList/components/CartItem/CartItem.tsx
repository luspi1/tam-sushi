import React, { FC } from 'react'
import styles from './style.module.css'
import { ProductCounter } from '../../../../UI/Counter/ProductCounter'
import { useSelector } from 'react-redux'
import { addCartItem, cartSlice, removeCartItem, selectCartItemById } from '../../store/CartSlice'
import { useAppDispatch } from '../../../../store/store'


interface ICartItemProps {
	img: string,
	title: string,
	price: number,
	amount: number,
	id: number
}

const CartItem: FC<ICartItemProps> = ({img, title, price, amount, id}) => {
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
					<img src={img} alt={title}/>
					<h3>{title}</h3>
				</div>
				<div className={styles.cartControl}>
					<p className={styles.cartPrice}>{price} ₽</p>
					<ProductCounter amount={cartItem?.amount || 0} addEvent={createItem}
					                removeEvent={deleteItem}/>
				</div>


			</li>
	)
}

export default CartItem