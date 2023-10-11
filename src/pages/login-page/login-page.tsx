import React, { FC } from 'react'
import { Resolver, useForm } from 'react-hook-form'

interface FormValues {
	login: string
	password: string
}

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.login ? values : {},
		errors: !values.login
			? {
					login: {
						type: 'required',
						message: 'This is required.',
					},
			  }
			: {},
	}
}

export const LoginPage: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver })
	const onSubmit = handleSubmit((data) => console.log(data))

	return (
		<div>
			<h1>Авторизация</h1>
			<form action='#' onSubmit={onSubmit}>
				<input {...register('login')} placeholder='Логин' />
				{errors?.login && <p>{errors.login.message}</p>}

				<input {...register('password')} placeholder='Пароль' />

				<button type='submit'>Войти</button>
			</form>
		</div>
	)
}
