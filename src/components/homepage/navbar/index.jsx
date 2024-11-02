import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos"
import "aos/dist/aos.css"


const Navbar = () => {

    useEffect(() => {
      Aos.init({duration: 3000})
    }, [])

  return (
    <div className=''>
      <nav className="bg-gradient-to-r from-purple-900 to-pink-900 flex list-none justify-between border-b p-10 text-center ">
            <div className=''>
              <span data-aos="fade" href="/" className="md:text-3xl text-xl text-gray-400 font-semibold"> Event Tech</span>
            </div>

            <div className="flex space-x-6 text-gray-300 text-sm md:text-lg font-semibold">

                <Link data-aos="fade"  to="/home" className='text-purple-400'>ABOUT</Link>
            
                <Link data-aos="fade" to="/service">SERVICES</Link>

                <Link data-aos="fade" to="/event">EVENT</Link>
            
                <Link data-aos="fade" to="/blog">BLOG</Link>

              <span className='border border-gray-500 rounded-sm px-6'>
                <Link data-aos="fade" to="/meeting" className='text-sm'>SET UP A MEETING</Link>
              </span>

            </div>

        </nav>
    </div>

  )
}

export default Navbar
