import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routers/Router.jsx'
import { DataProvider } from './context/Context'
import { ApiDataProvider } from './context/ApiDataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiDataProvider>
      <DataProvider>
        <RouterProvider router={Router} />
      </DataProvider>
    </ApiDataProvider>
  </React.StrictMode>,
)
