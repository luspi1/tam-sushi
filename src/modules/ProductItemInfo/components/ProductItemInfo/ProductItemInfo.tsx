import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchProductsOnCategory } from '../../api/fetchOneProduct'
import { IProduct } from '../../../../types/types'
import styles from './style.module.css'
import { ProductCounter } from '../../../../UI/Counter/ProductCounter'
import { useSelector } from 'react-redux'
import { addCartItem, removeCartItem, selectCartItemById } from '../../../CartList/store/CartSlice'
import { useAppDispatch } from '../../../../store/store'
import MainButton from '../../../../UI/MainButton/MainButton'
import { parsePathname } from '../../../../helpers/functions'
import Loader from '../../../../UI/Loader/Loader'

export const ProductItemInfo: FC = () => {
	const {pathname} = useLocation()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const {id} = useParams()


	const processedPath: string = parsePathname(pathname)


	const cartItem = useSelector(selectCartItemById(Number(id)))


	const [oneProduct, setOneProduct] = useState<IProduct | null>(null)

	const createItem = () => {
		dispatch(addCartItem(oneProduct))
	}

	const deleteItem = () => {
		dispatch(removeCartItem(oneProduct))
	}

	useEffect(() => {
		fetchProductsOnCategory(processedPath)
				.then(products => {
					return products.find(el => el.id === Number(id))
				})
				.then(data => data ? setOneProduct(data) : setOneProduct(null))

	}, [id])


	return (
			<>
				{
					oneProduct ? (
							<div className={styles.oneProduct}>
								<img src={oneProduct.image} alt={oneProduct.name}/>
								<h2>{oneProduct.name}</h2>
								<p className={styles.oneProductDesc}>{oneProduct.description}</p>
								<ProductCounter className={styles.oneProductCounter} amount={cartItem?.amount || 0}
								                addEvent={createItem}
								                removeEvent={deleteItem}/>
								<MainButton onClick={() => navigate(-1)}>Назад</MainButton>
							</div>
					) : <Loader/>
				}
			</>
	)
}

