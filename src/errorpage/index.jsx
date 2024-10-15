import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="text-center my-3">
            <h2>Page not found</h2>
            <p>Error 404</p>
            <p>Go to <Link to="/">Homepage</Link></p>
        </div>
    )
}

export default ErrorPage
