import React, { FC } from 'react'
import { CartList } from 'src/modules/cart-list/cart-list'

import { DecorOrder } from 'src/modules/decor-order/decor-order'

export const CartPage: FC = () => {
	return (
		<div>
			<CartList />
			<DecorOrder />
		</div>
	)
}
