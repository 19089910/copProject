import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './hooks/UserContext'

import StylesGlobal from './styles/styles'
import Routes from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <UserProvider>
    <Routes/>
  </UserProvider>
  <StylesGlobal/>
  <ToastContainer/>
  </React.StrictMode>
)
