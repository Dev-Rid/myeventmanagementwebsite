import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage";
import Home from "../components/homepage/home";
import ErrorPage from "../errorpage";
import About from "../components/homepage/about";
import Service from "../components/homepage/service";
import Event from "../components/homepage/event";
import Blog from "../components/homepage/blog";
import Meeting from "../components/homepage/meeting";

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
                element: <Service/>
            },
            {
                path: "/event",
                element: <Event/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/meeting",
                element: <Meeting/>
            },

        ],
    },
    {
        path: "*",
        element: <ErrorPage/>
    }
])