import { configureStore } from '@reduxjs/toolkit'
import { categoryReducer } from '../modules/HomeCategories'
import { useDispatch } from 'react-redux'


export const store = configureStore({
	reducer: {
		categories: categoryReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()