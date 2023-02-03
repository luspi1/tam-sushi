import React, { FC, useEffect } from 'react'
import styles from './style.module.css'
import HomeCategory from '../CategoryItem/HomeCategory'
import {
	fetchCategories,
	selectAllCategories,
	selectStatusCategory
} from '../../store/categorySlice'
import { useDispatch, useSelector } from 'react-redux'

export const HomeCategories: FC = () => {

	const dispatch = useDispatch()

	const items = useSelector(selectAllCategories)
	const statusCategory = useSelector(selectStatusCategory)

	useEffect(() => {
		dispatch(fetchCategories())
	}, [])

	return (
			<>
				<ul className={styles.categoriesList}>
					{
						items.map(el => (
								<HomeCategory title={el.name} image={el.image} link={el.slug} key={el.id}/>
						))
					}
				</ul>
				{
						statusCategory === 'loading' && <h2>Загрузка....</h2>
				}
				{
						statusCategory === 'error' && <h2>Произошла ошибка!!!</h2>
				}
			</>
	)
}

