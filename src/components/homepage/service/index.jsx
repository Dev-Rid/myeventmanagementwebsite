import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { threeEvents } from "./hook"

const Service = () => {

  const { theThreeEventsList } = threeEvents() 

  return (
    <div className=" bg-gray-500">
      <div className="service h-[18rem] text-center text-gray-100 pt-20">
        <h2 className="text-8xl">Talent & Skill</h2>
        <p className="text-4xl pt-5 uppercase">There are no hurdles we can‘t jump</p>
       </div>

       <div className="text-center flex justify-center text-4xl mx-auto w-[80%] pt-20 leading-snug tracking-wide font-light border-b pb-20">
        <p className="service-cont-1">
          Spark has a diverse team, each offering expert knowledge in their field. 
          From strategy planning, budgeting,and comprehensive registration support 
          to marketing and branding we bring the most current, innovative and professional 
          market expertise.
        </p>
       </div>

      <div className="flex gap-5 p-20 w-[100%]">
        {(theThreeEventsList.map((eachEvent) =>(
          <div key={eachEvent.id} className="w-[80rem] ">
            <h3 className="text-center pb-8 uppercase font-semibold text-lg">{eachEvent.name}</h3>
            <img src={eachEvent.image} className="relativ" />
            <p className="absolut text-center">{eachEvent.description} </p>
            {/* <Link to={eachEvent.link}>Learn More</Link> */}
          </div>
        )))}
      </div>
     
       {/* <div>
        <img src="" alt="one" />
       </div>

       <div>
        <img src="" alt="two" />
       </div> */}

      <div className="flex justify-center p-20 h-54 my-10">
        <Link className='text-3xl'>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
       </div>



      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 h-96 p-10 block justify-center">
        <p className="flex justify-center font-sans text-lg">Spark Event Management, 200 - 1110 7 Street SW, Calgary, Alberta, T2R 1A2, Canadainfo@eventsbyspark.com</p>
        <div className="p-10 flex justify-center h-52 w-full ">
          {/* <span >
            <Link>
              <img src="" alt="img1" />
            </Link>
          </span>
          <span>
              <Link>
                <img src="" alt="img2" />
              </Link>
          </span>
          <span>
            <Link>
              <img src="" alt="img3" />
            </Link>
          </span>
          <span>
              <Link>
                <img src="" alt="img4" />
              </Link>
          </span> */}
        </div>
        <p className="flex justify-center align-bottom font-serif text-gray-400 font-semibold gap-2">Powered by <span className='underline'>Abiolaspace</span></p>
      </footer>

    </div>
  )
}

export default Service
