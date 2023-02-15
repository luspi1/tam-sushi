import React, { FC, useEffect } from 'react'
import ProductsList from '../../../../components/ProductsList/ProductsList'
import { useAppDispatch } from '../../../../store/store'
import { useSelector } from 'react-redux'
import { selectAllPizza, selectStatusPizza } from '../../store/pizzaSlice'
import { fetchPizza } from '../../api/fetchPizza'
import { Status } from '../../../HomeCategories/store/categorySlice'
import Loader from '../../../../UI/Loader/Loader'

export const PizzaList: FC = () => {


	const dispatch = useAppDispatch()

	const items = useSelector(selectAllPizza)
	const statusCategory = useSelector(selectStatusPizza)

	useEffect(() => {
		dispatch(fetchPizza())
	}, [])

	return (
			<div>
				<ProductsList dataList={items}/>
				{
						statusCategory === Status.LOADING && <Loader/>
				}
				{
						statusCategory === Status.ERROR && <h2>Произошла ошибка!!!</h2>
				}
			</div>
	)
}
