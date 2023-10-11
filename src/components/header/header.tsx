import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { CartSvg } from 'src/UI/icons/cartSVG'
import { AccountSvg } from 'src/UI/icons/accountSVG'
import { PhoneSvg } from 'src/UI/icons/phoneSVG'
import { AppRoute } from 'src/helpers/consts'

export const Header = () => {
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
						</Link>
					</li>
					<li>
						<Link to='/auth'>
							<AccountSvg />
							<span>Войти</span>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}
