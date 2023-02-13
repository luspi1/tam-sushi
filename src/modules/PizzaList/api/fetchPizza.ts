import axios from '../../../config/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '../../../types/types'


// Получение всех категорий на главной
export const fetchPizza = createAsyncThunk<IProduct[]>(
		'rolly/fetchPizza',
		async () => {
			const response = await axios.get<IProduct[]>(`pizza`)
			return response.data
		}
)