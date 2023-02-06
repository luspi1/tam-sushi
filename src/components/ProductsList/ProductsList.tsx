import React, { FC } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from './style.module.css'

const ProductsList: FC = () => {
	return (
			<ul className={styles.productsList}>
				<ProductItem title="Филадельфия лайт" desc="Лосось, огурец, сыр сливочный, рис, нори."
				             img="https://cdn.farfor.ru/media/cache/94/02/9402a24e73f71e4fc784a4567d09ca28.jpg"
				             price={359.0}/>
				<ProductItem title="Филадельфия лайт" desc="Лосось, огурец, сыр сливочный, рис, нори."
				             img="https://cdn.farfor.ru/media/cache/94/02/9402a24e73f71e4fc784a4567d09ca28.jpg"
				             price={359.0}/>
				<ProductItem title="Филадельфия лайт" desc="Лосось, огурец, сыр сливочный, рис, нори."
				             img="https://cdn.farfor.ru/media/cache/94/02/9402a24e73f71e4fc784a4567d09ca28.jpg"
				             price={359.0}/>
				<ProductItem title="Филадельфия лайт" desc="Лосось, огурец, сыр сливочный, рис, нори."
				             img="https://cdn.farfor.ru/media/cache/94/02/9402a24e73f71e4fc784a4567d09ca28.jpg"
				             price={359.0}/>
				<ProductItem title="Филадельфия лайт" desc="Лосось, огурец, сыр сливочный, рис, нори."
				             img="https://cdn.farfor.ru/media/cache/94/02/9402a24e73f71e4fc784a4567d09ca28.jpg"
				             price={359.0}/>
				<ProductItem title="Филадельфия лайт" desc="Лосось, огурец, сыр сливочный, рис, нори."
				             img="https://cdn.farfor.ru/media/cache/94/02/9402a24e73f71e4fc784a4567d09ca28.jpg"
				             price={359.0}/>
				<ProductItem title="Филадельфия лайт" desc="Лосось, огурец, сыр сливочный, рис, нори."
				             img="https://cdn.farfor.ru/media/cache/94/02/9402a24e73f71e4fc784a4567d09ca28.jpg"
				             price={359.0}/>
				<ProductItem title="Филадельфия лайт" desc="Лосось, огурец, сыр сливочный, рис, нори."
				             img="https://cdn.farfor.ru/media/cache/94/02/9402a24e73f71e4fc784a4567d09ca28.jpg"
				             price={359.0}/>
			</ul>
	)
}

export default ProductsList