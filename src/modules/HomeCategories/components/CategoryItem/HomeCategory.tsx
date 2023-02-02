import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
interface IHomeCategoryProps {
	title: string,
	img: string,
	link: string
}

const HomeCategory: FC<IHomeCategoryProps> = ({title, img, link}) => {
	return (
			<li className={styles.categoryItem}>
				<Link to={link}>
					{title}
					<img src={img} alt={title}/>
				</Link>
			</li>
	)
}

export default HomeCategory