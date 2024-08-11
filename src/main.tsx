import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.tsx'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import "../src/styles/style.css"
import ScrollToTop from './pages/commonPage/ScrollToTop.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ScrollToTop /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster />
  </React.StrictMode>,
)
