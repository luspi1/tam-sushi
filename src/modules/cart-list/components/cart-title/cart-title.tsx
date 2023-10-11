import { FC } from 'react'
import styles from './index.module.css'
import { useAppDispatch } from 'src/store'
import MainButton from 'src/UI/main-button/MainButton'
import { clearCart } from 'src/modules/cart-list/store/cart.slice'

export const CartTitle: FC = () => {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.cartTitle}>
			<h1>Корзина:</h1>
			<MainButton onClick={() => dispatch(clearCart())}>Очистить корзину</MainButton>
		</div>
	)
}
