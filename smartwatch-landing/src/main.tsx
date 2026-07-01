import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from "react-hot-toast";
import { EcommerceProvider } from './context/EcommerceContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EcommerceProvider>
      <App />
      <Toaster/>
    </EcommerceProvider>
  </StrictMode>,
)
