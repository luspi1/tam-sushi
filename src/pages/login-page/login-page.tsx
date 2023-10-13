import { FC } from 'react'
import { AuthForm } from 'src/modules/auth-form/auth-form'

import styles from './index.module.scss'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser } from 'src/store/auth/auth.selectors'
import { Navigate } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

export const LoginPage: FC = () => {
	const currentUser = useAppSelector(getCurrentUser)
	if (currentUser) return <Navigate to={AppRoute.Home} />
	return (
		<div className={styles.loginPage}>
			<AuthForm />
		</div>
	)
}
