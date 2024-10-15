import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage";
import Home from "../components/homepage/home";
import ErrorPage from "../errorpage";
import About from "../components/homepage/about";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/service",
                element: 
            },
            {
                path: "/event",
                element: <h2>event Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nisi!</h2>
            },
            {
                path: "/blog",
                element: <h2>blog Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nisi!</h2>
            },
            {
                path: "/meeting",
                element: <h2>meeting Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nisi!</h2>
            },

        ],
    },
    {
        path: "*",
        element: <ErrorPage/>
    }
])