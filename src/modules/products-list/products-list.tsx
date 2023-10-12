import React, { FC } from 'react'
import styles from './index.module.scss'
import { Loader } from 'src/components/loader/loader'
import { ProductItemType } from 'src/types/product'
import { ProductItem } from 'src/modules/products-list/components/product-item/product-item'

type ProductsListProps = {
	dataList: ProductItemType[]
}

export const ProductsList: FC<ProductsListProps> = ({ dataList }) => {
	return (
		<ul className={styles.productsList}>
			{dataList.length > 0 ? (
				dataList?.map((el) => <ProductItem {...el} amount={el.amount ?? 0} key={el.id} />)
			) : (
				<Loader />
			)}
		</ul>
	)
}
