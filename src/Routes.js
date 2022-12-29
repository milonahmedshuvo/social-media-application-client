import { createBrowserRouter } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Login from "./Components/Pages/Login/Login";
import MediaRoute from "./Components/Pages/MediaRoute/MediaRoute";
import SinglePost from "./Components/Pages/MediaRoute/SinglePost";
import Register from "./Components/Pages/Register/Register";
import Home from "./Components/Sheared/Home/Home";
import Leyout from "./Leyout/Leyout";

export const router= createBrowserRouter([

     {
        path:'/',
        element:<Leyout></Leyout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/media',
                element:<MediaRoute></MediaRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/single/:id',
                element:<SinglePost></SinglePost>,
                loader:({params})=>fetch(`https://social-media-application-server-milonahmedshuvo.vercel.app/singlePost/${params.id}`)
            }
        ]
     }
])