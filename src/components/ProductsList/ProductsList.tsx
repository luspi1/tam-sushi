import React, { FC } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from './style.module.css'
import { IProduct } from '../../types/types'


interface IProductsListProps {
	dataList: IProduct[]
}

const ProductsList: FC<IProductsListProps> = ({dataList}) => {

	return (
			<ul className={styles.productsList}>
				{
					dataList ? (
							dataList.map((el: IProduct) => (
									<ProductItem key={el.id} title={el.name}
									             desc={el.description}
									             img={el.image}
									             price={el.price}/>
							))
					) : <h2>нет данных</h2>
				}


			</ul>
	)
}

export default ProductsList