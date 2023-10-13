import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { NameSpace } from 'src/helpers/consts'

import { productsApi } from 'src/store/products/products.api'
import { authApi } from 'src/store/auth/auth.api'

import { cartReducer } from 'src/modules/cart-list/store/cart.slice'
import { authReducer } from 'src/store/auth/auth.slice'

export const store = configureStore({
	reducer: {
		[NameSpace.Cart]: cartReducer,
		[NameSpace.Auth]: authReducer,
		[productsApi.reducerPath]: productsApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			productsApi.middleware,
			authApi.middleware
		),
})

setupListeners(store.dispatch)
