import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import styles from './style.module.css'
import phoneIcon from '../../assets/phone-icon.svg'
import cartIcon from '../../assets/cart-icon.svg'
import accountIcon from '../../assets/account-icon.svg'
import {selectAmountProducts} from '../../modules/CartList/store/CartSlice'
import {useSelector} from 'react-redux'

export const Header = () => {


	const productAmount = useSelector(selectAmountProducts)


	return (
		<header className={styles.header}>

			<div className={styles.headerTop}>
				<div className="container">
					<ul className={styles.headerTopList}>
						<li>
							<Link to="/">
								<img className={styles.headerTopLogo} src={logo} alt="логотип"/>
							</Link>
						</li>
						<li>
							<a className="icon" href="tel:88005553535">
								<img src={phoneIcon} alt=""/>
								<span>
									8(800)555-35-35
									</span>
							</a>
						</li>
						<li>
							<Link className="icon" to="/cart">
								{
									productAmount > 0 && (
										<p className={styles.headerCartAmount}>{productAmount}</p>)
								}
								<img src={cartIcon} alt=""/>
								<span>
									Корзина
									</span>
							</Link>
						</li>
						<li>
							<Link className="icon" to="/auth">
								<img src={accountIcon} alt=""/>
								<span>
									Войти
									</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>

		</header>
	)
}

