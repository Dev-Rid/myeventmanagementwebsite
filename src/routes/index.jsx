import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage";
import Home from "../components/homepage/home";
import ErrorPage from "../errorpage";

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
                element: <h2>About Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, neque?</h2>
            },
            {
                path: "/service",
                element: <h2>contact Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nisi!</h2>
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