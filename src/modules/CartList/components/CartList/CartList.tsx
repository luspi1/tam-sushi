import React, { FC } from 'react'
import CartItem from '../CartItem/CartItem'
import CartSum from '../CartSum/CartSum'
import CartTitle from '../CartTitle/CartTitle'
import { useSelector } from 'react-redux'
import { selectAllCart, selectTotalPrice } from '../../store/CartSlice'
import EmptyCart from '../EmptyCart/EmptyCart'

export const CartList: FC = () => {

	const items = useSelector(selectAllCart)
	const totalPrice = useSelector(selectTotalPrice)

	return (
			<>
				<CartTitle/>

				{
					items.length ? (
							<ul>
								{
									items.map(el => (
											<CartItem amount={2} title={el.name} img={el.image} key={el.id} price={el.price} id={el.id}/>
									))
								}
							</ul>
					) : <EmptyCart/>
				}


				<CartSum sum={totalPrice}/>
			</>
	)
}

