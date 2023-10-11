import { createSlice } from '@reduxjs/toolkit'

interface ICartProduct {
	name: string
	id: number
	image: string
	price: number
	amount: number
}

interface CartSliceState {
	items: ICartProduct[]
	totalPrice: number
}

const foldSum = (arr: ICartProduct[]) => {
	return arr.reduce((acc: number, el: ICartProduct) => acc + el.price * el.amount, 0)
}

const initialState: CartSliceState = {
	items: [],
	totalPrice: 0,
}
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem: (state, { payload }) => {
			const searchedItem = state.items.find((item) => item.id === payload.id)
			if (searchedItem) {
				searchedItem.amount++
			} else {
				state.items.push({ ...payload, amount: 1 })
			}
			state.totalPrice = foldSum(state.items)
		},

		removeCartItem: (state, { payload }) => {
			const searchedItem = state.items.find((item) => item.id === payload.id)
			if (searchedItem) {
				searchedItem.amount--
				if (searchedItem.amount <= 0) {
					state.items = state.items.filter((item) => item.id !== payload.id)
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
export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions
