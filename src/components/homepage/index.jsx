import Navbar from './navbar'
import { Outlet } from 'react-router-dom'

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Homepage = () => {

  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <div className=''>
      <Navbar data-aos="fade"/>
          {/* <img src="/src/IMGs/night-sky.jpg" alt="" className='' />   */}
      <Outlet/>
    </div>
  )
}

export default Homepage
