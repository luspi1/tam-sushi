import axios from '../../../config/axiosInstance'
import { ICategory } from '../store/categorySlice'

export const getAllCategories = async () => {
	const response = await axios.get<ICategory[]>(`categories`)
	return response.data
}