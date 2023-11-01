import React, { FC } from 'react'
import { CartList } from 'src/modules/cart-list/cart-list'

import { DecorOrder } from 'src/modules/decor-order/decor-order'
import { CartTitle } from 'src/pages/cart-page/components/cart-title/cart-title'
import { CartSum } from 'src/pages/cart-page/components/cart-sum/cart-sum'
import { useAppSelector } from 'src/hooks/store'
import { selectTotalPrice } from 'src/modules/cart-list/store/cart.selectors'

export const CartPage: FC = () => {
	const totalPrice = useAppSelector(selectTotalPrice)

	return (
		<div>
			<CartTitle />
			<CartList />
			<CartSum sum={totalPrice} />
			<DecorOrder />
		</div>
	)
}
