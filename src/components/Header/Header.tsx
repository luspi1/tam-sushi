import React from 'react'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import phoneIcon from '../../assets/phone-icon.svg'
import cartIcon from '../../assets/cart-icon.svg'
import accountIcon from '../../assets/account-icon.svg'
export const Header = () => {
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
									8(800)555-35-35
								</a>
							</li>
							<li>
								<Link className="icon" to="/cart">
									<img src={cartIcon} alt=""/>
									Корзина
								</Link>
							</li>
							<li>
								<Link className="icon" to="/auth">
									<img src={accountIcon} alt=""/>
									Войти
								</Link>
							</li>
						</ul>
					</div>
				</div>

			</header>
	)
}

