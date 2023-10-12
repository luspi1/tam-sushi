import React, { FC } from 'react'
import styles from './index.module.scss'
import { MinusSvg } from 'src/UI/icons/minusSVG'
import { PlusSvg } from 'src/UI/icons/plusSVG'

type ProductCounterProps = {
	amount?: number
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
				<MinusSvg />
			</button>
			<span>{amount ?? 0}</span>
			<button onClick={addEvent}>
				<PlusSvg />
			</button>
		</div>
	)
}
