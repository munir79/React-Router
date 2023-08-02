import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home';
import About from './Component/About';
import Products from './Component/Products';
import Friends from './Component/Friends';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>

        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/product',
          element:<Products></Products>
        }
      ],
     
    },
    {
      path:'/friend',
      element:<Friends></Friends>
    }
  
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
