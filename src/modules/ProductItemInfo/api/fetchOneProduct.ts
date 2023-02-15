import axios from '../../../config/axiosInstance'
import { IProduct } from '../../../types/types'


export const fetchProductsOnCategory = async (category: string) => {
	const response = await axios.get<IProduct[]>(`${category}.json`)
	return response.data
}
