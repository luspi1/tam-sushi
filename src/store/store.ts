import { configureStore } from '@reduxjs/toolkit'
import { categoryReducer } from '../modules/HomeCategories'
import { useDispatch } from 'react-redux'
import { rollyReducer } from '../modules/RollyList'


export const store = configureStore({
	reducer: {
		categories: categoryReducer,
		rolly: rollyReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()