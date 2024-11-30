import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage";
import Home from "../components/homepage/home";
import ErrorPage from "../errorpage";
import Service from "../components/homepage/service";
import Event from "../components/homepage/event";
import Blog from "../components/homepage/blog";
import Details from "@/components/homepage/service/details";
import Venues from "@/components/homepage/venues";
import Create from "@/components/homepage/meeting";
import EventList from "@/components/homepage/meeting/confirmEvent";


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
                path: "/home",
                element: <Home/>
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
                path: "/create",
                element: <Create/>
                // element: <Create/>
            },
            {
                path: "/service/:id",
                element: <Details/>
            },
            {
                path: "/confirmevent",
                element: <EventList />
            }


        ],
    },
    {
        path: "*",
        element: <ErrorPage/>
    }
])