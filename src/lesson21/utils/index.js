import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Info from "../components/Info";
import Param from "../components/Home/Param";

export const paths = [
    {
        id:1,
        title:'Home',
        path:'/home',
        element:<Home/>
    },
    {
        id:2,
        title:'About',
        path:'/about',
        element:<About/>
    },
    {
        id:3,
        title:'Info',
        path:'/info',
        element:<Info/>
    },
    {
        id:4,
        title:'Contact',
        path:'/contact',
        element:<Contact/>
    },
    {
        id:5,
        title:'None',
        path:'/none',
        element:<h1>none</h1>,
        hidden:true,
    },
    {
        id:6,
        title:'Home',
        path:'/home/:id',
        element:<Param/>,
        hidden:true,
    },
]