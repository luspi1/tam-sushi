import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { fetchRolly } from '../api/fetchRolly'
import { IProduct } from '../../../types/types'

export enum Status {
	LOADING= 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

interface RollySliceState {
	items: IProduct[],
	status: Status | null
}

const initialState: RollySliceState = {
	items: [],
	status: null,
}
export const rollySlice = createSlice({
	name: 'rolly',
	initialState,
	reducers: {
		setItems: (state, {payload}) => {
			state.items = payload
		}
	},

	extraReducers: (builder) => {
		builder.addCase(fetchRolly.pending, (state: RollySliceState) => {
			state.status = Status.LOADING
		})
		builder.addCase(fetchRolly.fulfilled, (state: RollySliceState, action: PayloadAction<IProduct[]>) => {
			state.status = Status.SUCCESS
			state.items = action.payload
		})
		builder.addCase(fetchRolly.rejected, (state: RollySliceState) => {
			state.status = Status.ERROR
		})
	}

})
export const {setItems} = rollySlice.actions
export const rollyReducer = rollySlice.reducer

// Селекты
export const selectAllRolly = (state: RootState) => state.rolly.items
export const selectStatusRolly  = (state: RootState) => state.rolly.status