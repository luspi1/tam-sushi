import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser } from 'src/store/auth/auth.selectors'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
import { selectAllCart } from 'src/modules/cart-list/store/cart.selectors'

export const DecorOrder: FC = () => {
	const user = useAppSelector(getCurrentUser)

	const cartItems = useAppSelector(selectAllCart)
	return (
		<div className={styles.decorOrder}>
			{user ? (
				<Link className={cartItems.length ? '' : '_disabled'} to={AppRoute.Order}>
					Оформить заказ
				</Link>
			) : (
				<p>Авторизуйтесь для оформления заказа!</p>
			)}
		</div>
	)
}
