import React, { FC } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

type ProductItemProps = {
	name: string
	description: string
	price: number
	image: string
}

export const ProductItem: FC<ProductItemProps> = ({ name, price, description, image }) => {
	return (
		<li className={styles.productItem}>
			<Link to={AppRoute.Home}>
				<img className={styles.productImg} src={image} alt={name} />
				<h3 className={styles.productTitle}>{name}</h3>
				<p className={styles.productDesc}>{description}</p>
			</Link>

			<div className={styles.productBottom}>
				<p className={styles.productPrice}>{price} ₽</p>
				{/*<ProductCounter*/}
				{/*	amount={cartItem?.amount || 0}*/}
				{/*	addEvent={createItem}*/}
				{/*	removeEvent={deleteItem}*/}
				{/*/>*/}
			</div>
		</li>
	)
}
