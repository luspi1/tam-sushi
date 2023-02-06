import React, { FC } from 'react'
import styles from './style.module.css'
import plusIcon from '../../assets/plus.svg'
import minusIcon from '../../assets/minus.svg'

interface IProductItemProps {
	title: string,
	desc: string,
	price: number,
	img: string
}

const ProductItem: FC<IProductItemProps> = ({title, price, desc, img}) => {
	return (
			<li className={styles.productItem}>
				<img className={styles.productImg} src={img} alt={title}/>
				<h3 className={styles.productTitle}>{title}</h3>
				<p className={styles.productDesc}>{desc}</p>
				<div className={styles.productBottom}>
					<p className={styles.productPrice}>{price} ₽</p>
					<div className={styles.productControllers}>
						<button><img src={minusIcon} alt="убавить"/></button>
						<span>0</span>
						<button><img src={plusIcon} alt="добавить"/></button>
					</div>
				</div>


			</li>
	)
}

export default ProductItem