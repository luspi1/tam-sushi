import { configureStore } from '@reduxjs/toolkit'
import { categoryReducer } from '../modules/HomeCategories'
import { useDispatch } from 'react-redux'
import { rollyReducer } from '../modules/RollyList'
import { cartReducer } from '../modules/CartList'


export const store = configureStore({
	reducer: {
		categories: categoryReducer,
		rolly: rollyReducer,
		cart: cartReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()