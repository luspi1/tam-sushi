import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { cartActions } from 'src/modules/cart-list/store/cart.slice'
import { authActions } from 'src/store/auth/auth.slice'

const actions = {
	...cartActions,
	...authActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
