import { configureStore } from '@reduxjs/toolkit'
import { categoryReducer } from '../modules/HomeCategories'


export const store = configureStore({
	reducer: {
		categories: categoryReducer
	}
})

export type RootState = ReturnType<typeof store.getState>