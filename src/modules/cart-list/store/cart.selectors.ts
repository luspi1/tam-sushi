// Селекты

import { State } from 'src/types/state'
import { NameSpace } from 'src/helpers/consts'

export const selectAllCart = (state: State) => state[NameSpace.Cart].items
export const selectTotalPrice = (state: State) => state[NameSpace.Cart].totalPrice

export const selectAmountProducts = (state: State) => state[NameSpace.Cart].items.length

export const selectCartItemById = (id: number) => (state: State) =>
	state[NameSpace.Cart].items.find((el) => el.id === id)

export const selectOneProduct = (state: State) => state[NameSpace.Cart].oneProduct
