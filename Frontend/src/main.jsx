import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import{createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./Componets/pag_home/home.jsx";
import Login_sign from './Componets/pag_login/pag_login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login_sign />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
