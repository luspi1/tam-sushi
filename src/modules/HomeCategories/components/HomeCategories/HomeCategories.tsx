import React, { FC, useEffect } from 'react'
import styles from './style.module.css'
import HomeCategory from '../CategoryItem/HomeCategory'
import { selectAllCategories, selectStatusCategory, Status } from '../../store/categorySlice'
import { useSelector } from 'react-redux'
import { fetchCategories } from '../../api/fetchCategories'
import { useAppDispatch } from '../../../../store/store'
import Loader from '../../../../UI/Loader/Loader'

export const HomeCategories: FC = () => {

	const dispatch = useAppDispatch()

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
						statusCategory === Status.LOADING && <Loader/>
				}
				{
						statusCategory === Status.ERROR && <h2>Произошла ошибка!!!</h2>
				}
			</>
	)
}

