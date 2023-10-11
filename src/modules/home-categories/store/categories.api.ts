import { productsApi } from 'src/store/products/products.api'
import { CategoryItemType } from 'src/types/product'

export const categoriesApi = productsApi.injectEndpoints({
	endpoints: (build) => ({
		getAllCategories: build.query<CategoryItemType[], null>({
			query: () => ({
				url: 'categories',
			}),
		}),
	}),
})

export const { useGetAllCategoriesQuery } = categoriesApi
