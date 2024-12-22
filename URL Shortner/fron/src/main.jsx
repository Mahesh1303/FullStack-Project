import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Registration from './components/Registration.jsx'
import Url from './pages/Url.jsx'
import { Provider } from 'react-redux'
import Store from './store/store.js'



const router =createBrowserRouter(createRoutesFromElements(

<Route path='/' >
  <Route path='/' element={<App/>}></Route>
  <Route path='/registration' element={<Registration/>}></Route>
  <Route path='/url' element={<Url/>}></Route>
</Route>

))


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router}  />
  </Provider>,
)
