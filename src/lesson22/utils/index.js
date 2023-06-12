import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Info from "../components/Info";
import Login from '../components/Login'

export const base = [
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
        element:<Info/>,
        hidden:true
    },
    {
        id:4,
        title:'Contact',
        path:'/contact',
        element:<Contact/>,
        isPrivate:true,
    },
    {
        id:5,
        title:'Login',
        path:'/login',
        element:<Login/>
    }
]