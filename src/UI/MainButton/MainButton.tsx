import React, { FC, ReactNode } from 'react'
import styles from './style.module.css'
interface IMainButton {
	children: string | ReactNode
}
const MainButton: FC<IMainButton> = ({children}) => {
	return (
			<button className={styles.mainButton}>
				{children}
			</button>
	)
}

export default MainButton