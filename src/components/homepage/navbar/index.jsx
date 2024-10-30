import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
    // <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
    <div className=''>
      <nav className="bg-gradient-to-r from-purple-900 to-pink-900 flex list-none justify-between border-b p-10 text-center ">
            <div className=''>
              <span href="/" className="md:text-3xl text-xl text-gray-400 font-semibold"> Event Tech</span>
            </div>

            <div className="flex space-x-6 text-gray-300 text-sm md:text-lg font-semibold">

                <Link to="/home" className='text-purple-400'>ABOUT</Link>
            
                <Link to="/service">SERVICES</Link>

                <Link to="/event">EVENT</Link>
            
                <Link to="/blog">BLOG</Link>

              <span className='border border-gray-500 rounded-sm px-6'>
                <Link to="/meeting" className='text-sm'>SET UP A MEETING</Link>
              </span>

            </div>

        </nav>
    </div>

  )
}

export default Navbar
