import React, { FC } from 'react'
import { ProductsList } from 'src/modules/products-list/products-list'
import { useGetProductsByCategoryQuery } from 'src/store/products/products.api'
import { Loader } from 'src/components/loader/loader'

export const PizzasPage: FC = () => {
	const { data: pizzaItems, isLoading, isError } = useGetProductsByCategoryQuery('pizza')
	if (isLoading) return <Loader />
	if (isError) return <h1>Ошибка получения пицц</h1>
	return (
		<div>
			<ProductsList dataList={pizzaItems ?? []} />
		</div>
	)
}
