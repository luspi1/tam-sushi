import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { fetchPizza } from '../api/fetchPizza'
import { IProduct } from '../../../types/types'

export enum Status {
	LOADING= 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

interface PizzaSliceState {
	items: IProduct[],
	status: Status | null
}

const initialState: PizzaSliceState = {
	items: [],
	status: null,
}
export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems: (state, {payload}) => {
			state.items = payload
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchPizza.pending, (state: PizzaSliceState) => {
			state.status = Status.LOADING
		})
		builder.addCase(fetchPizza.fulfilled, (state: PizzaSliceState, action: PayloadAction<IProduct[]>) => {
			state.status = Status.SUCCESS
			state.items = action.payload
		})
		builder.addCase(fetchPizza.rejected, (state: PizzaSliceState) => {
			state.status = Status.ERROR
		})
	}

})
export const {setItems} = pizzaSlice.actions
export const pizzaReducer = pizzaSlice.reducer

// Селекты
export const selectAllPizza = (state: RootState) => state.pizza.items
export const selectStatusPizza  = (state: RootState) => state.pizza.status