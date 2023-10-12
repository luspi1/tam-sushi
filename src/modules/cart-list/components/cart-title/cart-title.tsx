import { FC } from 'react'
import styles from './index.module.css'
import { MainButton } from 'src/UI/main-button/main-button'
import { useActions } from 'src/hooks/actions/actions'

export const CartTitle: FC = () => {
	const { clearCart } = useActions()

	return (
		<div className={styles.cartTitle}>
			<h1>Корзина:</h1>
			<MainButton onClick={clearCart}>Очистить корзину</MainButton>
		</div>
	)
}
