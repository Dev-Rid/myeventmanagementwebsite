import Navbar from './navbar'
import { Outlet } from 'react-router-dom'

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Footer from './footer'

const Homepage = () => {

  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <div className=''>
      <Navbar data-aos="fade"/>

      <Outlet/>

      {/* <Footer/> */}
    </div>
  ) 
}

export default Homepage
