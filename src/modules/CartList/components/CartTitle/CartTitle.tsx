import React, { FC } from 'react'
import styles from './style.module.css'
import MainButton from '../../../../UI/MainButton/MainButton'
import { useAppDispatch } from '../../../../store/store'
import { clearCart } from '../../store/CartSlice'

const CartTitle: FC = () => {

	const dispatch = useAppDispatch()

	return (
			<div className={styles.cartTitle}>
				<h1>Корзина:</h1>
				<MainButton onClick={() => dispatch(clearCart())}>
					Очистить корзину
				</MainButton>
			</div>
	)
}

export default CartTitle