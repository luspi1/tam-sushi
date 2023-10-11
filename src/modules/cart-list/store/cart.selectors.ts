// Селекты
import { RootState } from 'src/store'

export const selectAllCart = (state: RootState) => state.cart.items
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice

export const selectAmountProducts = (state: RootState) => state.cart.items.length

export const selectCartItemById = (id: number) => (state: RootState) =>
	state.cart.items.find((el) => el.id === id)
