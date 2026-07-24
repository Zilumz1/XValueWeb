import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        const checkForUpdates = () => registration.update().catch(() => {})

        window.setInterval(checkForUpdates, 60 * 60 * 1000)
        window.addEventListener('online', checkForUpdates)
      })
      .catch(() => {})
  })
}
