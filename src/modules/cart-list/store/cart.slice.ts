import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { CartProduct } from 'src/types/product'

type CartSliceState = {
	items: CartProduct[]
	totalPrice: number
	oneProduct: CartProduct | null
}

const foldSum = (arr: CartProduct[]) => {
	return arr.reduce((acc: number, el: CartProduct) => acc + el.price * el.amount, 0)
}

const initialState: CartSliceState = {
	items: [],
	totalPrice: 0,
	oneProduct: null,
}
export const cartSlice = createSlice({
	name: NameSpace.Cart,
	initialState,
	reducers: {
		addCartItem: (state, action: PayloadAction<CartProduct>) => {
			const searchedItem = state.items.find((item) => item.id === action.payload.id)
			if (searchedItem) {
				searchedItem.amount++
			} else {
				state.items.push({ ...action.payload, amount: 1 })
			}
			state.totalPrice = foldSum(state.items)
		},

		removeCartItem: (state, action: PayloadAction<CartProduct>) => {
			const searchedItem = state.items.find((item) => item.id === action.payload.id)
			if (searchedItem) {
				searchedItem.amount--
				if (searchedItem.amount <= 0) {
					state.items = state.items.filter((item) => item.id !== action.payload.id)
				}
			}
			state.totalPrice = foldSum(state.items)
		},
		setOneProduct: (state, action: PayloadAction<CartProduct>) => {
			state.oneProduct = action.payload
		},

		clearCart(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
