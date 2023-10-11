import React, { FC } from 'react'
import { useGetProductsByCategoryQuery } from 'src/store/products/products.api'
import { Loader } from 'src/components/loader/loader'
import { ProductsList } from 'src/modules/products-list/products-list'

export const RollyPage: FC = () => {
	const { data: rollyItems, isLoading, isError } = useGetProductsByCategoryQuery('rolly')
	if (isLoading) return <Loader />
	if (isError) return <h1>Ошибка получения роллов</h1>
	return (
		<div>
			<ProductsList dataList={rollyItems ?? []} />
		</div>
	)
}
