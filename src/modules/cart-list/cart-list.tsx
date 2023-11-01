import React, { FC } from 'react'
import { useAppSelector } from 'src/hooks/store'
import { selectAllCart } from 'src/modules/cart-list/store/cart.selectors'
import { CartItem } from 'src/modules/cart-list/components/cart-item/cart-item'
import { EmptyCart } from 'src/modules/cart-list/components/empty-cart/empty-cart'

export const CartList: FC = () => {
	const cartItems = useAppSelector(selectAllCart)

	return (
		<>
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
		</>
	)
}
