import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './assets/components/Home/Home.jsx'
import Aboutus from './assets/components/Aboutus/Aboutus.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { index: true, element: <Home /> },
      {path: '/Aboutus', element: <Aboutus />},
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
