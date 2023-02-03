import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
export interface IHomeCategoryProps {
	title: string,
	image: string,
	link: string,
}

const HomeCategory: FC<IHomeCategoryProps> = ({title, image, link}) => {
	return (
			<li className={styles.categoryItem}>
				<Link to={link}>
					{title}
					<img src={image} alt={title}/>
				</Link>
			</li>
	)
}

export default HomeCategory