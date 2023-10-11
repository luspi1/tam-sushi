import React, { FC } from 'react'
import styles from './index.module.css'
import minusIcon from '../../assets/minus.svg'
import plusIcon from '../../assets/plus.svg'

type ProductCounterProps = {
	amount: number
	className?: string
	addEvent: () => void
	removeEvent: () => void
}

export const ProductCounter: FC<ProductCounterProps> = ({
	amount,
	addEvent,
	removeEvent,
	className,
}) => {
	return (
		<div className={className ? `${styles.productCounter} ${className}` : styles.productCounter}>
			<button onClick={removeEvent}>
				<img src={minusIcon} alt='убавить' />
			</button>
			<span>{amount || 0}</span>
			<button onClick={addEvent}>
				<img src={plusIcon} alt='добавить' />
			</button>
		</div>
	)
}
