import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { fetchSoup} from '../api/fetchSoup'
import { IProduct } from '../../../types/types'

export enum Status {
	LOADING= 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

interface SoupSliceState {
	items: IProduct[],
	status: Status | null
}

const initialState: SoupSliceState = {
	items: [],
	status: null,
}
export const soupSlice = createSlice({
	name: 'soup',
	initialState,
	reducers: {
		setItems: (state, {payload}) => {
			state.items = payload
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchSoup.pending, (state: SoupSliceState) => {
			state.status = Status.LOADING
		})
		builder.addCase(fetchSoup.fulfilled, (state: SoupSliceState, action: PayloadAction<IProduct[]>) => {
			state.status = Status.SUCCESS
			state.items = action.payload
		})
		builder.addCase(fetchSoup.rejected, (state: SoupSliceState) => {
			state.status = Status.ERROR
		})
	}

})
export const {setItems} = soupSlice.actions
export const soupReducer = soupSlice.reducer

// Селекты
export const selectAllSoup= (state: RootState) => state.soup.items
export const selectStatusSoup = (state: RootState) => state.soup.status