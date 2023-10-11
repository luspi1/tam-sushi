import React, { FC, ReactNode } from 'react'
import styles from './index.module.css'

type MainButtonProps = {
	children: string | ReactNode
	onClick?: () => void
}
export const MainButton: FC<MainButtonProps> = ({ children, onClick }) => {
	return (
		<button className={styles.mainButton} onClick={onClick}>
			{children}
		</button>
	)
}
