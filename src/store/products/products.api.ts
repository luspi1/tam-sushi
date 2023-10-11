import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'src/helpers/consts'
import { ProductItemType } from 'src/types/product'

export const productsApi = createApi({
	reducerPath: 'products/api',
	tagTypes: ['Products'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getProductsByCategory: build.query<ProductItemType[], string>({
			query: (category) => ({
				url: category,
			}),
		}),
	}),
})

export const { useGetProductsByCategoryQuery } = productsApi
