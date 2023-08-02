import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home';
import About from './Component/About';
import Products from './Component/Products';
import Friends from './Component/Friends';
import FriendDetails from './Component/FriendDetails';
import Post from './Post/Post';
import PostBody from './Post/PostBody';


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
        },
        {
          path:'/friend',
          loader:()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
    
          },
          element:<Friends></Friends>
        },
        {
          path:'/friend/:friendID',
          loader: async({params})=>{
           console.log(params.friendID);
           return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`);
           
          },
          element:<FriendDetails></FriendDetails>
        },
        {
          path:'/post',
          loader:()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element:<Post></Post>
        },
        {
          path:'/post/:PostId',
          loader:async ({params})=>{
            return fetch (`https://jsonplaceholder.typicode.com/posts/${params.PostId}`)
            
          },
          element:<PostBody></PostBody>
        }
      ]
     
    }
  
  
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
