import React, { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MainButton } from 'src/UI/main-button/main-button'

import styles from './index.module.scss'
import { useGetProductQuery } from 'src/store/products/products.api'
import { Loader } from 'src/components/loader/loader'
import { ProductCounter } from 'src/components/product-counter/product-counter'
import { useAppSelector } from 'src/hooks/store'
import { selectCartItemById, selectOneProduct } from 'src/modules/cart-list/store/cart.selectors'
import { useActions } from 'src/hooks/actions/actions'

export const OneProductPage: FC = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const { addCartItem, removeCartItem, setOneProduct } = useActions()

	const cartItem = useAppSelector(selectCartItemById(Number(id)))
	const oneProduct = useAppSelector(selectOneProduct)

	const { data: productItem } = useGetProductQuery(id ?? '')

	useEffect(() => {
		if (productItem) {
			setOneProduct({
				name: productItem.name,
				id: productItem.id,
				image: productItem.image,
				price: productItem.price,
				amount: cartItem?.amount ?? 0,
			})
		}
	}, [productItem])

	if (!productItem || !oneProduct) return <Loader />
	return (
		<div className={styles.oneProduct}>
			<img src={productItem.image} alt={productItem.name} />
			<h2>{productItem.name}</h2>
			<p className={styles.oneProductDesc}>{productItem.description}</p>
			<ProductCounter
				className={styles.oneProductCounter}
				amount={cartItem?.amount || 0}
				addEvent={() => addCartItem(oneProduct)}
				removeEvent={() => removeCartItem(oneProduct)}
			/>
			<MainButton onClick={() => navigate(-1)}>Назад</MainButton>
		</div>
	)
}
