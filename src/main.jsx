// Bootstrap CSS & Bundle JS
import './assets/bootstrap.min.css'
import './assets/bootstrap.bundle.min'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
