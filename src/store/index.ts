import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { productsApi } from 'src/store/products/products.api'

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(productsApi.middleware),
})

setupListeners(store.dispatch)
