import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchOneProduct } from '../../api/fetchOneProduct'
import { IProduct } from '../../../../types/types'
import styles from './style.module.css'
import { ProductCounter } from '../../../../UI/Counter/ProductCounter'
import { useSelector } from 'react-redux'
import { addCartItem, removeCartItem, selectCartItemById } from '../../../CartList/store/CartSlice'
import { useAppDispatch } from '../../../../store/store'
import MainButton from '../../../../UI/MainButton/MainButton'

export const ProductItemInfo: FC = () => {
	const {pathname} = useLocation()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()


	const {id} = useParams()


	const productId = Number(id)

	const cartItem = useSelector(selectCartItemById(productId))


	const [oneProduct, setOneProduct] = useState<IProduct | null>(null)

	const createItem = () => {
		dispatch(addCartItem(oneProduct))
	}

	const deleteItem = () => {
		dispatch(removeCartItem(oneProduct))
	}

	useEffect(() => {
		fetchOneProduct(pathname)
				.then(data => setOneProduct(data))

	}, [pathname])


	return (
			<>
				{
					oneProduct ? (
							<div className={styles.oneProduct}>
								<img src={oneProduct.image} alt={oneProduct.name}/>
								<h2>{oneProduct.name}</h2>
								<p className={styles.oneProductDesc}>{oneProduct.description}</p>
								<ProductCounter className={styles.oneProductCounter} amount={cartItem?.amount || 0} addEvent={createItem}
								                removeEvent={deleteItem}/>
								<MainButton onClick={() => navigate(-1)}>Назад</MainButton>
							</div>
					) : <h2>Продукт не найден =(</h2>
				}
			</>
	)
}

