import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Event = () => {
  return (
    <div className='bg-gray-500'>
      <div className="event-busy h-[18rem] text-center text-gray-100 pt-20 bg-cover">
        <h2 className='text-8xl'>Busy, Busy, Busy</h2>
        <p className='text-4xl pt-5 uppercase'>A few of our recent events</p>
     </div>

      <div className='text-center pt-10'> 
        <h3 className='text-semibold text-3xl'>Wow, we've had a busy year... but always make time for fun!</h3>
        
        <p className='p-5 text-center flex justify-center text-lg mx-auto w-[60%]'>
          Our clients include not-for-profit organizations, corporate clients,  
          regulating bodies and member associations. Each of these organizations  
          has a unique set of business goals and challenges, and has chosen Spark  
          because we understand the business of running events.
        </p>

        <div>
          <span className='pminac h-[18rem] bg-cover'>
            <p>PMINAC Conference</p>
          </span>
          <h3>PMINAC Conference</h3>
          <p>
              We have worked with the Project Management Institute Northern Alberta 
              Chapter for over a decade and it’s safe to say we feel like a part of the 
              family. From the familiar faces in the crowd of attendees, to the trust 
              built with sponsors and speakers, the committee and board can count on us
              to represent their Chapter and execute a seamless conference!
          </p>
        </div>

        <div>
          <div>
              <img src="" alt="" />
              <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>

        <div>
          <img src="" alt="" />
          <span>
              <h3>Alberta Energy Efficiency Summit</h3>
              <p>
                What started out as registration support for a one-day event has flourished
                into a collaborative relationship with one of our favourite client events. 
                Spark supported with a complete rebrand of the Alliance and moved on to plan 
                the first-ever two-day Alberta Energy Efficiency Summit. Watching this client’s 
                growth and development has been rewarding and we can’t wait to see what’s in store
                for the future!
              </p>
          </span>        
        </div>

        <div>
          <img src="" alt="" />
        </div>

        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <div>
            <h3>PMI-SAC</h3>
            <h3>Professional Development Conference</h3>
        </div>

        <div>
          <h3>PMI-SAC Professional Development Conference</h3>
          <p>
            You can probably sense a pattern here. We seem to have 
            found a niche with project management clients and have 
            become experts when it comes to PDUs and the PMI Talent Triangle. 
            PMI-SAC is one of our favourite Chapters to work with because they 
            push us to think outside of the box and push boundaries when it 
            comes the program, marketing, and attendee engagement. Oh, and our 
            fellow Calgarian volunteers aren’t so bad either!
          </p>
        </div>

        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <div>
          <h3>Just a few of our happy clients.</h3>
          <span>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </span>
          <span>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            </span>
        </div>

      <div className='flex justify-center p-20 h-54 my-10'>
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
    </div>


  )
}

export default Event
