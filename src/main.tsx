import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { store } from 'src/store'
import App from 'src/app'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</Provider>
)
