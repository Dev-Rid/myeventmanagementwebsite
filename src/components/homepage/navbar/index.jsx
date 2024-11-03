import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos"
import "aos/dist/aos.css"


const Navbar = () => {

    useEffect(() => {
      Aos.init({duration: 3000})
    }, [])

  return (

    <div>
      <nav className="bg-gradient-to-r from-purple-900 to-pink-900 p-14 w-full h-[10rem] relative">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">

          {/* Logo Section */}
          <div className="absolute left-12">
            <span data-aos="fade" href="/" className="text-2xl md:text-4xl text-gray-400 font-bold">Event Tech</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center absolute md:right-10 lg:right-24 md:gap-2 lg:gap-8 ">
            <Link data-aos="fade" to="/about" className="text-purple-400 text-xl font-semibold">ABOUT</Link>
            <Link data-aos="fade" to="/service" className="text-gray-400 text-xl font-semibold">SERVICES</Link>
            <Link data-aos="fade" to="/event" className="text-gray-400 text-xl font-semibold">EVENT</Link>
            <Link data-aos="fade" to="/blog" className="text-gray-400 text-xl font-semibold">BLOG</Link>

            <span className="border border-gray-500 rounded-lg px-4 py-2 text-gray-300 ml-4">
              <Link data-aos="fade" to="/meeting">SET UP A MEETING</Link>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center absolute right-4">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </nav>
    </div>

   )
}

export default Navbar
