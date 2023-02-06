import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCategories} from '../api/fetchCategories'
import { RootState } from '../../../store/store'


export interface ICategory {
	name: string,
	slug: string,
	image: string,
	id: string
}

export enum Status {
	LOADING= 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

interface CategoriesSliceState {
	items: ICategory[],
	status: Status | null
}

const initialState: CategoriesSliceState = {
	items: [],
	status: null,
}



export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setItems: (state, {payload}) => {
			state.items = payload
		}
	},

	extraReducers: (builder) => {
		builder.addCase(fetchCategories.pending, (state: CategoriesSliceState) => {
			state.status = Status.LOADING
		})
		builder.addCase(fetchCategories.fulfilled, (state: CategoriesSliceState, action: PayloadAction<ICategory[]>) => {
			state.status = Status.SUCCESS
			state.items = action.payload
		})
		builder.addCase(fetchCategories.rejected, (state: CategoriesSliceState) => {
			state.status = Status.ERROR
		})
	}

})
export const {setItems} = categorySlice.actions
export const categoryReducer = categorySlice.reducer

// Селекты
export const selectAllCategories = (state: RootState) => state.categories.items
export const selectStatusCategory = (state: RootState) => state.categories.status