import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser } from 'src/store/auth/auth.selectors'

import styles from './index.module.scss'
import { AppRoute } from 'src/helpers/consts'

export const DecorOrder: FC = () => {
	const user = useAppSelector(getCurrentUser)

	return (
		<div className={styles.decorOrder}>
			{user ? (
				<Link to={AppRoute.Order}>Оформить заказ</Link>
			) : (
				<p>Авторизуйтесь для оформления заказа!</p>
			)}
		</div>
	)
}
