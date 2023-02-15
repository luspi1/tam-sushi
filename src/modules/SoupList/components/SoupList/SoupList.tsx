import React, { FC, useEffect } from 'react'
import ProductsList from '../../../../components/ProductsList/ProductsList'
import { useAppDispatch } from '../../../../store/store'
import { useSelector } from 'react-redux'
import { selectAllSoup, selectStatusSoup } from '../../store/soupSlice'
import { fetchSoup } from '../../api/fetchSoup'
import { Status } from '../../../HomeCategories/store/categorySlice'
import Loader from '../../../../UI/Loader/Loader'


export const SoupList: FC = () => {


	const dispatch = useAppDispatch()

	const items = useSelector(selectAllSoup)
	const statusCategory = useSelector(selectStatusSoup)


	useEffect(() => {
		dispatch(fetchSoup())
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
