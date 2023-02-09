import React, { FC, ReactNode } from 'react'
import styles from './style.module.css'
interface IMainButton {
	children: string | ReactNode,
	onClick: () => void
}
const MainButton: FC<IMainButton> = ({children, onClick}) => {
	return (
			<button className={styles.mainButton} onClick={onClick}>
				{children}
			</button>
	)
}

export default MainButton