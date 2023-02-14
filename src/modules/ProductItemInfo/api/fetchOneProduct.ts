import axios from '../../../config/axiosInstance'
import { IProduct } from '../../../types/types'


export const fetchOneProduct = async (id: number) => {
	const response = await axios.get<IProduct>(`.json?orderBy="id"&equalTo=${id}`)
	return response.data
}
