import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About';
import Books from './components/Home/Books/Books';
import BookDetail from './components/BookDetail/BookDetail';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
        path:'/',
        element:<Home />,
        // loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
        
      },
      {
        path:'/books',
        element:<Books></Books>,
        loader:()=>fetch('https://api.itbook.store/1.0/new')
        
      },
      
      {
        path:'books/:id',
        element:<BookDetail />,
        loader :({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
        
      },


        {
        path:'/about',
        element:<About></About>
      },
     
    ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)
