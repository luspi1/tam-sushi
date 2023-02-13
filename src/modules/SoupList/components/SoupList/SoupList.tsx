import React, { FC, useEffect } from 'react'
import ProductsList from '../../../../components/ProductsList/ProductsList'
import { useAppDispatch } from '../../../../store/store'
import { useSelector } from 'react-redux'
import { selectAllSoup } from '../../store/soupSlice'
import { fetchSoup } from '../../api/fetchSoup'


export const SoupList: FC = () => {


	const dispatch = useAppDispatch()

	const items = useSelector(selectAllSoup)


	useEffect(() => {
		dispatch(fetchSoup())
	}, [])

	return (
			<div>
				<ProductsList dataList={items}/>
			</div>
	)
}
