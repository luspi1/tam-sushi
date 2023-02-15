import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { IProduct } from '../../../types/types'


const initialState = {}
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {

	},
})

export const userReducer = userSlice.reducer

// Селекты
