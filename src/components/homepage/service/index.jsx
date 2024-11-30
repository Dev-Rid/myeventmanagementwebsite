import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { threeEvents } from "./hook"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import Footer from "../footer"

const Service = () => {
  const [first, setFirst] = useState(null)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  useEffect(() => {
    setFirst("Spark has a diverse team, each offering expert knowledge in their field. From strategy planning, budgeting, and comprehensive registration support to marketing and branding we bring the most current, innovative and professional market expertise.")
    Aos.init({ duration: 1000 })
  }, [first])


  const { theThreeEventsList } = threeEvents() 

  return (
    <div className=" bg-gray-500 w-[100%]">
      <div className="service h-[22rem] text-center text-gray-100 pt-20">
        <h2 className="text-7xl md:text-8xl lg:text-9xl" data-aos="fade">Talent & Skill</h2>
        <p className="text-xl pt-5 uppercase text-2xl md:text-3xl" data-aos="fade">There are no hurdles we can‘t jump</p>
      </div>


      <div className="md:flex p-20 gap-10" data-aos="fade-down-top">
        {(theThreeEventsList.map((eachEvent) => (
          <div key={eachEvent.id} className="text-center font-semibold text-xl ">
            <Link to={`/service/${eachEvent.id}`}>
              <h3 className="text-center pb-4 active:text-purple-800">{eachEvent.name}</h3>
              <img src={eachEvent.image} className="rounded-sm h-[20rem] w-[20rem]" />
            </Link>
            
          </div>
        )))}
      </div>

      <div className="flex justify-center p-20 h-54 my-10">
        <Link className='text-3xl'>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </div>

      <Footer /> 

    </div>
  )
}

export default Service
