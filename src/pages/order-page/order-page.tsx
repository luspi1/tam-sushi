import { FC } from 'react'

import styles from './index.module.scss'
import { OrderForm } from 'src/modules/order-form/order-form'

export const OrderPage: FC = () => {
	return (
		<div className={styles.orderPage}>
			<h1>Оформление заказа</h1>
			<OrderForm />
		</div>
	)
}
