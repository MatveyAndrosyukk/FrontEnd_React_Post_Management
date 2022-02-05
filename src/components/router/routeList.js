import {Navigate} from "react-router-dom";
import Posts from "../../pages/Posts";
import About from "../../pages/About";
import PostByIdPage from "../../pages/PostByIdPage";
import React from "react";
import Login from "../../pages/Login";

export const privateRoutes = [
    {path: '/posts', element:<Posts/>, exact: true},
    {path: '/about', element:<About/>, exact: true},
    {path: '/posts/:id', element:<PostByIdPage/>, exact: true},
    {path: '*', element:<Navigate to='/posts'/>, exact: false}
]

export const publicRoutes = [
    {path: '/login', element:<Login/>, exact: true},
    {path: '*', element:<Navigate to='/login'/>, exact: false}
]
