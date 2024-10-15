import Navbar from './navbar'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className=''>
      <Navbar/>
          {/* <img src="/src/IMGs/night-sky.jpg" alt="" className='' />   */}
      <Outlet/>
    </div>
  )
}

export default Homepage
