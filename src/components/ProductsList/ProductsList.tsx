import React, { FC } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from './style.module.css'
import { IProduct } from '../../types/types'
import Loader from '../../UI/Loader/Loader'


interface IProductsListProps {
	dataList: IProduct[]
}

const ProductsList: FC<IProductsListProps> = ({dataList}) => {

	return (
			<ul className={styles.productsList}>
				{
					dataList ? (
							dataList.map((el: IProduct) => (
									<ProductItem key={el.id} name={el.name}
									             desc={el.description}
									             image={el.image}
									             amount={el.amount}
									             price={el.price}  id={el.id} category={el.category_slug}/>
							))
					) : <Loader/>
				}


			</ul>
	)
}

export default ProductsList