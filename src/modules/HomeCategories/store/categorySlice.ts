import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllCategories } from '../api/fetchCategories'
import { RootState } from '../../../store/store'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error


export interface ICategory {
	name: string,
	slug: string,
	image: string,
	id: string
}
interface CategoriesSliceState {
	items: ICategory[],
	status: null | 'loading' | 'resolved' | 'error'
}

const initialState: CategoriesSliceState = {
	items: [],
	status: null,
}

export const fetchCategories = createAsyncThunk<ICategory[]>(
		'category/fetchCategories',
		getAllCategories
)

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setItems: (state, {payload}) => {
			state.items = payload
		}
	},
	extraReducers: {
		[fetchCategories.pending]: (state: CategoriesSliceState) => {
			state.status = 'loading'
		},
		[fetchCategories.fulfilled]: (state: CategoriesSliceState, action: PayloadAction<ICategory[]>) => {
			state.status = 'resolved'
			state.items = action.payload
		},
		[fetchCategories.rejected]: (state: CategoriesSliceState) => {
			state.status = 'error'
		},

	}
})
export const {setItems} = categorySlice.actions
export const categoryReducer = categorySlice.reducer

// Селекты
export const selectAllCategories = (state: RootState) => state.categories.items
export const selectStatusCategory = (state: RootState) => state.categories.status