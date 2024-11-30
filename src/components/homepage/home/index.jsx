import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useHowItWork} from './hooks'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Footer from '../footer'


const Home = () => {
  
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  const { howItWorkList } = useHowItWork()
  return (
    
  <div className='w-[100%]'>
      <div className="h-dvh bg-gray-500 ">
        <div className='primary h-[30rem] mydiv pt-14'>
          <h2 data-aos="fade-down-top" className="text-center text-gray-400 text-5xl md:text-7xl lg:text-8xl  pt-16 font-semibold">Event Planning Is <br /> Hard?</h2>
          <p data-aos="fade-down-top" className="text-center text-2xl md:text-5xl text-gray-400 font-bold pt-10">WE CAN HELP YOU.</p>
          </div>
          
          <div  className="p-9 bg-gray-500 lg:h-[43rem] text-black font-light text-center text-3xl sm:text-4xl md:text-5xl">
          <p data-aos="fade-down-top" className=" pt-10" >
                <span   className="text-pink-900 text-5xl font-medium">Tech Event</span> is a full service event
                management firm based in Calgary, Alberta that was created by 
                pairing together our passion for business and events. We bring
                a fresh, unique approach to the event management industry.
              </p>
              
          <p data-aos="fade-down-top" className="p-10">
              Our team understands that a properly executed event can be leveraged to support an organization’s strategic vision, incorporated into a company’s marketing plan,
              or used to build networks and client loyalty.
              </p>
          </div>

          <div className="primary2 text-gray-400 pt-20 h-[20rem] text-xl  text-center">
          <h2 data-aos="fade-down-top" className="text-6xl sm:text-7xl md:text-8xl">Event Planning</h2>
          <p className="text-4xl pt-3" data-aos="fade-down-top"> Is Our Passion</p>
          </div>


        <div className="bg-gray-400 p-10 border-b-2 pb-36" data-aos="fade-down-top">
            <h2 className="text-center p-10 text-lg w-auto">Spark approaches every project with meticulous attention to detail and 
              obsessive precision. Regardless of size and scope, we treat your event 
              like a business with clear strategic goals, defined milestones, and a 
              comprehensive plan to ensure that your event is delivered on time and on budget. 
              At Spark, we put your organization first. We learn about your business, we focus 
              on your challenges, and we plan events to support your goals.
            </h2>

            <div className="rounded-lg flex justify-center mt-10">
              <img className="rounded-lg w-[45rem] mx-auto" src="/src/IMGs/image3.jpg" alt="" srcset="" />
            </div>
        </div>


         
        <div className="bg-gray-400 p-14" data-aos="fade-down-top">
          <span>
              <h2 className="headline text-center text-4xl font-semibold">How It Works</h2>
          </span>
          <div className="">
              {howItWorkList.map((eachList) =>(
                <div className='pt-10' key={eachList.id}>
                  <p className="text-center p-5 text-lg uppercase font-semibold">{eachList.title}</p>
                  <span className="text-center flex justify-center text-lg mx-auto w-[80%]">{eachList.description}</span>
                </div>         
              ))}
          </div>
  
          <div className="flex justify-center p-20 h-54 my-10">
            <span>
              <Link className='text-3xl'>
                  <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </span>
          </div>
          
        </div>
        <Footer /> 
    </div>
  </div>

  )
  
}

export default Home
