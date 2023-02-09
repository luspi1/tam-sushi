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

const foldSum = (arr: ICartProduct[]) => {
	const sum = arr.reduce(((acc: number, el: ICartProduct) => acc + el.price * el.amount), 0)
	return sum
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
			} else {
				state.items.push({...payload, amount: 1})
			}
			state.totalPrice = foldSum(state.items)
		},

		removeCartItem: (state, {payload}) => {
			const searchedItem = state.items.find(item => item.id === payload.id)
			if (searchedItem) {
				searchedItem.amount--
				if (searchedItem.amount <= 0) {
					state.items = state.items.filter(item => item.id !== payload.id)
				}
			}
			state.totalPrice = foldSum(state.items)
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

export const selectCartItemById = (id: number) => (state: RootState) => state.cart.items.find(el => el.id === id)