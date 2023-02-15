import React, { FC, useEffect } from 'react'
import ProductsList from '../../../../components/ProductsList/ProductsList'
import { useAppDispatch } from '../../../../store/store'
import { useSelector } from 'react-redux'
import { selectAllRolly, selectStatusRolly } from '../../store/rollySlice'
import { fetchRolly } from '../../api/fetchRolly'
import { Status } from '../../../HomeCategories/store/categorySlice'
import Loader from '../../../../UI/Loader/Loader'

export const RollyList: FC = () => {


	const dispatch = useAppDispatch()

	const items = useSelector(selectAllRolly)
	const statusCategory = useSelector(selectStatusRolly)

	useEffect(() => {
		dispatch(fetchRolly())
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
