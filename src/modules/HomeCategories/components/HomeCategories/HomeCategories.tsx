import React, { FC } from 'react'
import styles from './style.module.css'
import HomeCategory from '../CategoryItem/HomeCategory'

export const HomeCategories: FC = () => {
	return (
			<ul className={styles.categoriesList}>
				<HomeCategory title="Суши"
				              img="https://www.bigsushii.ru/thumb/2/JJCBRcdNnhUlpsEubvIN5Q/r/d/img_6619_yandex.jpg"
				              link="/sushi"/>
				<HomeCategory title="Пицца"
				              img="https://www.tokyo-city.ru/images/interesno/Pitctca_-_natcionalnoe_italyanskoe_blyudo.jpg"
				              link="/pizza"/>
				<HomeCategory title="Супы"
				              img="https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg"
				              link="/soup"/>
			</ul>
	)
}

