import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="bg-gray-600 text-center h-screen mx-auto p-20">
            <h2 className="text-4xl">Page not found</h2> 
            <p className="text-2xl text-red-500">Error 404</p>
            <p className="text-2xl underline">Go to <Link to="/">Homepage</Link></p>
        </div>
    )
}

export default ErrorPage
