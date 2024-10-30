import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./App.css"
import { RouterProvider } from 'react-router-dom'
import { route } from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <React.StrictMode>

    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
