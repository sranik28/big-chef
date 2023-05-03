import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routers/Router.jsx'
import { DataProvider } from './context/Context'
import { ApiDataProvider } from './context/ApiDataProvider'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiDataProvider>
      <DataProvider>
        <RouterProvider router={Router} />
      </DataProvider>
    </ApiDataProvider>
    <ToastContainer />
  </React.StrictMode>,
)
