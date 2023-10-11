import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

type HomeCategoryProps = {
	name: string
	image: string
	slug: string
}

export const CategoryItem: FC<HomeCategoryProps> = ({ name, image, slug }) => {
	return (
		<li className={styles.categoryItem}>
			<Link to={slug}>
				{name}
				<img src={image} alt={name} />
			</Link>
		</li>
	)
}
