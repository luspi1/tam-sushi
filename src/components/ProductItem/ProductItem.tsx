import React, { FC } from 'react'
import styles from './style.module.css'
import { ProductCounter } from '../../UI/Counter/ProductCounter'
import { useAppDispatch } from '../../store/store'
import { addCartItem, removeCartItem } from '../../modules/CartList/store/CartSlice'

interface IProductItemProps {
	title: string,
	desc: string,
	price: number,
	img: string,
	amount?: number,
	id: number
}

const ProductItem: FC<IProductItemProps> = ({title, price, desc, img, amount, id}) => {

	const dispatch = useAppDispatch()

	const newItem = {
		title,
		price,
		desc,
		img,
		amount
	}
	const createItem = () => {
		dispatch(addCartItem(newItem))
	}

	const deleteItem = () => {
		dispatch(removeCartItem(newItem))
	}

	return (
			<li className={styles.productItem}>
				<div>
					<img className={styles.productImg} src={img} alt={title}/>
					<h3 className={styles.productTitle}>{title}</h3>
					<p className={styles.productDesc}>{desc}</p>
				</div>

				<div className={styles.productBottom}>
					<p className={styles.productPrice}>{price} ₽</p>
					<ProductCounter amount={0} addEvent={createItem} removeEvent={deleteItem}/>
				</div>
			</li>
	)
}

export default ProductItem