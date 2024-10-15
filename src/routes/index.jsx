import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage";
import Home from "../components/homepage/home";

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
                path: "/contact",
                element: <h2>contact Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nisi!</h2>
            },
            {
                path: "/careers",
                element: <h2>careers Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nisi!</h2>
            },
            {
                path: "/event",
                element: <h2>event Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nisi!</h2>
            },
            {
                path: "/blog",
                element: <h2>blog Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nisi!</h2>
            },

        ],
    },
    {
        path: "*",
        element: <h2>Page not found</h2>
    }
])