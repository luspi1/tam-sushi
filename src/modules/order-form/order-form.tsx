import { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from './index.module.scss'
export const OrderForm: FC = () => {
	const { register, handleSubmit } = useForm()

	const onSubmit = handleSubmit((data) => {
		console.log(data)
	})

	return (
		<form className={styles.orderForm} onSubmit={onSubmit}>
			<input {...register('phone')} type='text' placeholder='Номер телефона' required />
			<input {...register('address')} type='text' placeholder='Ваш адрес' />
			<textarea {...register('wishes')} placeholder='Пожелания к заказу' />
		</form>
	)
}
