import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import { store } from 'src/store'
import App from 'src/app'

import './index.css'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<HelmetProvider>
			<ToastContainer />
			<App />
		</HelmetProvider>
	</Provider>
)
