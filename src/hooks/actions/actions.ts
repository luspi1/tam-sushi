import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { cartActions } from 'src/modules/cart-list/store/cart.slice'

const actions = {
	...cartActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
