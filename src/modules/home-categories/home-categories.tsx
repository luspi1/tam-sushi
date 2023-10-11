import { FC } from 'react'
import styles from './index.module.scss'
import { useGetAllCategoriesQuery } from 'src/modules/home-categories/store/categories.api'
import { CategoryItem } from 'src/modules/home-categories/components/category-item/category-item'

export const HomeCategories: FC = () => {
	const { data: categoriesItems } = useGetAllCategoriesQuery(null)
	return (
		<>
			<ul className={styles.categoriesList}>
				{categoriesItems?.map((el) => (
					<CategoryItem {...el} key={el.id} />
				))}
			</ul>
		</>
	)
}
