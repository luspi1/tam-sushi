import React, { FC } from 'react'
import styles from './style.module.css'
import { ProductCounter } from '../../UI/Counter/ProductCounter'
import { useAppDispatch } from '../../store/store'
import {
	addCartItem,
	removeCartItem,
	selectCartItemById
} from '../../modules/CartList/store/CartSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

interface IProductItemProps {
	name: string,
	desc: string,
	price: number,
	image: string,
	amount?: number,
	id: number,
	category: string
}

const ProductItem: FC<IProductItemProps> = ({name, price, desc, image, amount, id, category}) => {

	const dispatch = useAppDispatch()

	const cartItem = useSelector(selectCartItemById(id))

	const newItem = {
		name,
		price,
		desc,
		image,
		amount,
		id,
		category
	}
	const createItem = () => {
		dispatch(addCartItem(newItem))
	}

	const deleteItem = () => {
		dispatch(removeCartItem(newItem))
	}

	return (
			<li className={styles.productItem}>
				<Link to={`/${category}/${id}`}>
					<img className={styles.productImg} src={image} alt={name}/>
					<h3 className={styles.productTitle}>{name}</h3>
					<p className={styles.productDesc}>{desc}</p>
				</Link>

				<div className={styles.productBottom}>
					<p className={styles.productPrice}>{price} ₽</p>
					<ProductCounter amount={cartItem?.amount || 0} addEvent={createItem} removeEvent={deleteItem}/>
				</div>
			</li>
	)
}

export default ProductItem