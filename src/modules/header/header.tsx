import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { CartSvg } from 'src/UI/icons/cartSVG'
import { AccountSvg } from 'src/UI/icons/accountSVG'
import { PhoneSvg } from 'src/UI/icons/phoneSVG'
import { AppRoute } from 'src/helpers/consts'
import { useAppSelector } from 'src/hooks/store'
import { selectAmountProducts } from 'src/modules/cart-list/store/cart.selectors'
import { getCurrentUser } from 'src/store/auth/auth.selectors'
import { MainButton } from 'src/UI/main-button/main-button'
import { useActions } from 'src/hooks/actions/actions'

export const Header = () => {
	const { logoutUser } = useActions()

	const cartAmount = useAppSelector(selectAmountProducts)
	const currentUser = useAppSelector(getCurrentUser)
	return (
		<header className={styles.header}>
			<div className='container'>
				<ul className={styles.headerTopList}>
					<li>
						<Link to={AppRoute.Home}>
							<img className={styles.headerTopLogo} src={logo} alt='логотип' />
						</Link>
					</li>
					<li>
						<a href='tel:88005553535'>
							<PhoneSvg />
							<span>8(800)555-35-35</span>
						</a>
					</li>
					<li>
						<Link to={AppRoute.Cart}>
							<CartSvg />
							<span>Корзина</span>
							<p className={styles.cartCounter}>{cartAmount}</p>
						</Link>
					</li>
					<li>
						{currentUser ? (
							<div className={styles.authUser}>
								<span>{currentUser?.name ?? 'Пользователь'}</span>
								<MainButton onClick={() => logoutUser()}>Выйти</MainButton>
							</div>
						) : (
							<Link to='/auth'>
								<AccountSvg />
								<span>Войти</span>
							</Link>
						)}
					</li>
				</ul>
			</div>
		</header>
	)
}
