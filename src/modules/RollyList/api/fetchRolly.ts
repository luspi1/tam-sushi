import axios from '../../../config/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '../../../types/types'


// Получение всех категорий на главной
export const fetchRolly = createAsyncThunk<IProduct[]>(
		'rolly/fetchRolly',
		async () => {
			const response = await axios.get<IProduct[]>(`rolly.json`)
			return response.data
		}
)