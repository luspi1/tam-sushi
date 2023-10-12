import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { productsApi } from 'src/store/products/products.api'
import { NameSpace } from 'src/helpers/consts'
import { cartReducer } from 'src/modules/cart-list/store/cart.slice'

export const store = configureStore({
	reducer: {
		[NameSpace.Cart]: cartReducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(productsApi.middleware),
})

setupListeners(store.dispatch)
