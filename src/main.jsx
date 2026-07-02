import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/appZone.scss'
import './assets/scss/custom.scss'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
