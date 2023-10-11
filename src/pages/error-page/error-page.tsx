import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { Helmet } from 'react-helmet-async'
import catImg from 'src/assets/cat.jpg'
import { AppRoute } from 'src/helpers/consts'

export const ErrorPage: FC = () => (
	<main className={styles.notFound}>
		<Helmet>
			<title>Страница не найдена</title>
		</Helmet>
		<h1>
			<span>404</span> <br /> Страница не найдена &#128533;
		</h1>
		<img src={catImg} alt='not found' />
		<Link to={AppRoute.Home}>На главную</Link>
	</main>
)
