import axios from '../../../config/axiosInstance'
import { IProduct } from '../../../types/types'


export const fetchOneProduct = async (path: string) => {
	const response = await axios.get<IProduct>(path)
	return response.data
}
