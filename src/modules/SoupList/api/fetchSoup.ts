import axios from '../../../config/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '../../../types/types'


// Получение всех категорий на главной
export const fetchSoup = createAsyncThunk<IProduct[]>(
		'rolly/fetchSoup',
		async () => {
			const response = await axios.get<IProduct[]>(`soup`)
			return response.data
		}
)