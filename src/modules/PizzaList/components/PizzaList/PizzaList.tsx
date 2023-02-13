import React, { FC, useEffect } from 'react'
import ProductsList from '../../../../components/ProductsList/ProductsList'
import { useAppDispatch } from '../../../../store/store'
import { useSelector } from 'react-redux'
import { selectAllPizza } from '../../store/pizzaSlice'
import { fetchPizza } from '../../api/fetchPizza'

export const PizzaList: FC = () => {


	const dispatch = useAppDispatch()

	const items = useSelector(selectAllPizza)


	useEffect(() => {
		dispatch(fetchPizza())
	}, [])

	return (
			<div>
				<ProductsList dataList={items}/>
			</div>
	)
}
