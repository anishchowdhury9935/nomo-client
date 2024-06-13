import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextApi from '../context/contextApi.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApi>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextApi>
)
