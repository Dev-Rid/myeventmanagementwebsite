import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useHowItWork} from './hooks'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Home = () => {
  
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  const { howItWorkList } = useHowItWork()
  return (
    
  <div>
      <div className="h-dvh bg-gray-500">
      <div className='primary h-[30rem] mydiv pt-5 md:pt-10'>
          <h2 data-aos="zoom-in" className="text-center text-gray-400 text-4xl sm:text-5xl md:text-7xl pt-16 font-semibold">Event Planning Is <br /> Hard.</h2>
          <p data-aos="zoom-in" className="text-center sm:text-xl md:text-3xl text-gray-400 font-bold pt-10">WE CAN HELP YOU</p>
      </div>
      
      <div  className="p-9 bg-gray-500 lg:h-[40rem] text-black font-light text-center text-3xl sm:text-4xl md:text-5xl">
          <p data-aos="fade-down-right" className=" pt-10" >
            <span   className="text-pink-900 text-5xl font-medium">Tech Event</span> is a full service event
             management firm based in Calgary, Alberta that was created by 
             pairing together our passion for business and events. We bring
             a fresh, unique approach to the event management industry.
          </p>
          
          <p data-aos="fade-down-right" className="p-10">
          Our team understands that a properly executed event can be leveraged to support an organization’s strategic vision, incorporated into a company’s marketing plan,
          or used to build networks and client loyalty.
          </p>
          
      </div>

    
      <div className="primary2 text-gray-400 pt-20 h-[20rem] text-xl  text-center">
          <h2 data-aos="zoom-in" className="text-8xl">Event Planing</h2>
          <p className="text-4xl pt-3"> Is Our Passion</p>
      </div>


        <div className="bg-gray-400 p-10 border-b-2 pb-36">
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


      
      <div className="bg-gray-400 p-14">
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
        {/* <div>
            <h2 className="headline text-center text-4xl font-semibold">How It Works</h2>
          <p className="text-center p-5 text-lg uppercase font-semibold">LEARN: We want to get to know you</p>
            <span className="text-center flex justify-center text-lg mx-auto w-[80%]">
            What is your business about? What are your challenges? What are the issues that your members 
            or clients are dealing with? By thoroughly understanding your company’s leadership 
            culture, how your organization operates and your long term strategic plans, we become
            a part of your team. Our model works best when we can become more than the “hired help” 
            and can become strategic event management partners, so the first step for us is about 
            getting to know you and your business.
          </span>
        </div>

          <div className="pt-12">
            <p className="title text-center p-3 text-lg uppercase font-semibold">BUILD: Let us do the heavy lifting.</p>
          <span className="text-center flex justify-center text-lg mx-auto w-[80%]">
            Because we have taken the time to learn about your business and the goals of your event, 
            you can rest assured that the event will be on target and in line with your objectives. 
            Leave the planning and management to us. Let us look after the details and the heavy lifting 
            that comes with planning a professional event. From our network of preferred vendors, industry 
            connections and years of experience, we can deliver a full service event management experience. 
            The Spark team is well equipped to deliver a world class event, each and every time. 
            Your job is to run your business; our job is to run your event.
          </span>
        </div>

        <div className="pt-12">
            <p className="title text-center p-3 text-lg uppercase font-semibold">DELIVER: Sit back. Relax.</p>
            <span className="text-center flex text-lg mx-auto w-[80%]">
            Finally, this is where our event management expertise comes into play. 
            At our core, we love events. We love the on-site details, production plans, 
            schedules, deadlines and to do lists that come along with managing an event. 
            From meticulous management of facility details to AV, catering and on-site 
            coordination, we ensure every detail is looked after. Managing your event 
            using a strategic overall plan and a methodical management approach allows 
            you to rest easy. Knowing that every last detail is looked after will allow 
            you to focus on your attendees and stakeholders at the event. Let us look 
            after the rest.
          </span>
        </div> */}


        <div className="flex justify-center p-20 h-54 my-10">
          <span>
            <Link className='text-3xl'>
                <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </span>
        </div>
        
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
  </div>

  )
  
}

export default Home
