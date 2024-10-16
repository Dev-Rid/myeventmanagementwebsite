import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Service = () => {
  return (
    <div className="bg-gray-500">
       <div>
        <h2>Talent & Skill</h2>
        <p>There are no hurdles we can‘t jump</p>
       </div>

       <div>
        <p>
          Spark has a diverse team, each offering expert knowledge in their field. 
          From strategy planning, budgeting,and comprehensive registration support 
          to marketing and branding we bring the most current, innovative and professional 
          market expertise.
        </p>
       </div>

       <div>
        <div>
          <p>Corporate Events</p>
          <span>
            <img src="" alt="" />
          </span>
          <Link>Learn More</Link>
        </div>

        <div>
          <p>Association Events</p>
          <span>
            <img src="" alt="" />
          </span>
          <Link>Learn More</Link>
        </div>

        <div>
          <p>NoT-For-Profit Events</p>
          <span>
            <img src="" alt="" />
          </span>
          <Link>Learn More</Link>
        </div>
       </div>

       <div>
        <img src="" alt="one" />
       </div>

       <div>
        <img src="" alt="two" />
       </div>

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
