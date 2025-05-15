import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import AppLayout from './components/Layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/Layout/CountryDetails';
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"about",
          element: <About />
        },
        {
          path:"contact",
          element: <Contact />
        },
        {
          path:"country",
          element: <Country />
        },
        {
          path:"country/:id",
          element: <CountryDetails />
        },
      ]
    },
   
  ])
  return (
   <>
  <RouterProvider router={router}></RouterProvider>
   </>
  )
}

export default App