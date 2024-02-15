import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import Homepage from './pages/Homepage'
import CategoryPage from './pages/CategoryPage'
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element : <Homepage/>,
    errorElement : <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/category/:categoryName", 
    element: <CategoryPage />,
  },
])

function App() {
  return (
    <RouterProvider router = {router}/>
  )
}

export default App
