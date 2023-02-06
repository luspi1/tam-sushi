import axios from '../../../config/axiosInstance'
import { ICategory } from '../store/categorySlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

// Получение всех категорий на главной
export const fetchCategories = createAsyncThunk<ICategory[]>(
		'category/fetchCategories',
		async () => {
			const response = await axios.get<ICategory[]>(`categories`)
			return response.data
		}
)