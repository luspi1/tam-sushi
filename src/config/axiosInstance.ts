import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://tam-sushi-default-rtdb.asia-southeast1.firebasedatabase.app/',
	headers: {
		'Content-Type': 'application/json',
	},
})

export default instance
