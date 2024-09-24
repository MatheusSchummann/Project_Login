import React from 'react'
import ReactDOM from 'react-dom/client'


import{createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./Componets/pag_home/home.jsx";
import Login_sign from "./Componets/pag_login/Login.jsx";

const router = createBrowserRouter([
  
  {
    path: "/login",
    element: <Login_sign/>,
  },
  {
    path: "/home",
    element: <Home />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
