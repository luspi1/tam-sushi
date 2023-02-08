import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'


interface ICartProduct {
	name: string,
	id: number,
	image: string,
	price: number,
	amount: number
}

interface CartSliceState {
	items: ICartProduct[],
	totalPrice: number
}

const initialState: CartSliceState = {
	items: [],
	totalPrice: 0
}
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem: (state, {payload}) => {
			const searchedItem = state.items.find(item => item.id === payload.id)
			if (searchedItem) {
				searchedItem.amount++
				state.totalPrice += searchedItem.price
			} else {
				state.items.push(payload)
				state.totalPrice += payload.price
			}
		},

		removeCartItem: (state, {payload}) => {
			const searchedItem = state.items.find(item => item.id === payload.id)
			if (searchedItem) {
				searchedItem.amount--
				state.totalPrice -= searchedItem.price
				if (searchedItem.amount <= 0) {
					state.items = state.items.filter(item => item.id !== payload.id)
					state.totalPrice -= payload.price
				}
			}
		},

		clearCart(state) {
			state.items = []
			state.totalPrice = 0
		},
	},


})
export const cartReducer = cartSlice.reducer
export const {addCartItem, removeCartItem, clearCart} = cartSlice.actions

// Селекты
export const selectAllCart = (state: RootState) => state.cart.items
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice
