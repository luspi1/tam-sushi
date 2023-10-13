import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from 'src/types/users'

export const authApi = createApi({
	reducerPath: 'auth/api',
	tagTypes: ['Auth'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4444',
	}),
	endpoints: (build) => ({
		regUser: build.mutation({
			query: (formData) => ({
				url: '/register',
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Auth'],
		}),
		loginUser: build.mutation({
			query: (formData) => ({
				url: '/login',
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Auth'],
		}),
		getAllUsers: build.query<User[], null>({
			query: () => ({
				url: '/users',
				method: 'GET',
			}),
			providesTags: ['Auth'],
		}),
	}),
})

export const { useRegUserMutation, useGetAllUsersQuery, useLoginUserMutation } = authApi
