import React, { FC } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { ProductCounter } from 'src/components/product-counter/product-counter'
import { useActions } from 'src/hooks/actions/actions'
import { useAppSelector } from 'src/hooks/store'
import { selectCartItemById } from 'src/modules/cart-list/store/cart.selectors'

type ProductItemProps = {
	id: number
	name: string
	description: string
	price: number
	image: string
	amount: number
}

export const ProductItem: FC<ProductItemProps> = ({
	name,
	price,
	description,
	image,
	id,
	amount,
}) => {
	const { addCartItem, removeCartItem } = useActions()

	const cartItem = useAppSelector(selectCartItemById(id))

	const currentItem = {
		id,
		name,
		price,
		image,
		amount,
	}

	return (
		<li className={styles.productItem}>
			<Link to={String(id)}>
				<img className={styles.productImg} src={image} alt={name} />
				<h3 className={styles.productTitle}>{name}</h3>
				<p className={styles.productDesc}>{description}</p>
			</Link>

			<div className={styles.productBottom}>
				<p className={styles.productPrice}>{price} ₽</p>
				<ProductCounter
					amount={cartItem?.amount ?? 0}
					addEvent={() => addCartItem(currentItem)}
					removeEvent={() => removeCartItem(currentItem)}
				/>
			</div>
		</li>
	)
}
