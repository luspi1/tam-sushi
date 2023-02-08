import React, { FC } from 'react'
import CartItem from '../CartItem/CartItem'
import CartSum from '../CartSum/CartSum'
import CartTitle from '../CartTitle/CartTitle'
import { useSelector } from 'react-redux'
import { selectAllCart } from '../../store/CartSlice'
import EmptyCart from '../EmptyCart/EmptyCart'

export const CartList: FC = () => {

	const items = useSelector(selectAllCart)

	return (
			<>
				<CartTitle/>

				{
					items.length ? (
							<ul>
								{
									items.map(el => (
											<CartItem amount={2} title={el.name} img={el.image} key={el.id} price={el.price}/>
									))
								}
							</ul>
					) : <EmptyCart/>
				}


				<CartSum sum={9999}/>
			</>
	)
}

