import React, { FC } from 'react'
import { CartTitle } from 'src/modules/cart-list/components/cart-title/cart-title'
import { useAppSelector } from 'src/hooks/store'
import { selectAllCart, selectTotalPrice } from 'src/modules/cart-list/store/cart.selectors'
import { CartItem } from 'src/modules/cart-list/components/cart-item/cart-item'
import { EmptyCart } from 'src/modules/cart-list/components/empty-cart/empty-cart'
import { CartSum } from 'src/modules/cart-list/components/cart-sum/cart-sum'

export const CartList: FC = () => {
	const cartItems = useAppSelector(selectAllCart)
	const totalPrice = useAppSelector(selectTotalPrice)

	return (
		<>
			<CartTitle />
			{cartItems.length ? (
				<ul>
					{cartItems.map((el) => (
						<CartItem
							amount={el.amount}
							title={el.name}
							img={el.image}
							key={el.id}
							price={el.price}
							id={el.id}
						/>
					))}
				</ul>
			) : (
				<EmptyCart />
			)}
			<CartSum sum={totalPrice} />
		</>
	)
}
