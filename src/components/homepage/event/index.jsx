import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useImgs } from './hooks'
import UseEventImgsHook from './hooks/useEventImgsHook'

import Aos from "aos"
import "aos/dist/aos.css"
import Footer from '../footer'


const Event = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const { imgs } = useImgs()
  
  return (
    <div className='bg-gray-500'>
      <div className="event-busy h-[22rem] text-center text-gray-100 pt-20 bg-cover">
        <h2 className='text-6xl sm:text-7xl md:text-8xl' data-aos="fade">Busy, Busy, Busy</h2>
        <p className='text-xl sm:text-3xl md:text-4xl pt-5 uppercase' data-aos="fade">A few of our recent events</p>
     </div>

      <div className='text-center pt-24' data-aos="fade-down-top"> 
        <h3 className='text-semibold text-3xl' >Wow, we've had a busy year... but always make time for fun!</h3>
        
        <p className='p-5 text-center flex justify-center text-lg mx-auto w-[60%] ' data-aos="fade">
          Our clients include not-for-profit organizations, corporate clients,  
          regulating bodies and member associations. Each of these organizations  
          has a unique set of business goals and challenges, and has chosen Spark  
          because we understand the business of running events.
        </p>

        <div>
          <div className='pminac h-[12rem] bg-contain text-gray-300 mt-12'>
            <p className='text-2xl sm:text-6xl md:text-7xl lg:text-8xl md:p-12 pt-14'>PMINAC Conference</p>
          </div>

          <div className='m-10'>
            <h3 className='text-1xl font-bold sm:text-4xl md:text-5xl'>PMINAC Conference</h3>
            <p className='mt-3 w-[60%] mx-auto'>
                We have worked with the Project Management Institute Northern Alberta 
                Chapter for over a decade and it’s safe to say we feel like a part of the 
                family. From the familiar faces in the crowd of attendees, to the trust 
                built with sponsors and speakers, the committee and board can count on us
                to represent their Chapter and execute a seamless conference!
            </p>
          </div>
        </div>

        <div className='hidden sm:grid sm:grid-cols-4 sm:gap-3 sm:p-8 '>
          {
            imgs.map((img, i) => {
              return <UseEventImgsHook key={i} imgsprop={img}/>
            })
          }
        </div>

        <div className='albertia h-[24rem] bg-cover my-14 text-gray-400'  >
          <span className='text-3xl sm:text-6xl md:text-7xl lg:text-8xl'>
            <h3 className='font-semibold pt-20'>Alberta Energy <br /> Efficiency Summit</h3>
          </span>        
        </div>

        <div className='my-10'>
          <h2 className='font-semilight text-2xl'> Alberta Energy Efficiency Summit</h2>
          <p className='p-3 w-[60%] mx-auto'>
            What started out as registration support for a one-day event has flourished
            into a collaborative relationship with one of our favourite client events.
            Spark supported with a complete rebrand of the Alliance and moved on to plan
            the first-ever two-day Alberta Energy Efficiency Summit. Watching this client’s
            growth and development has been rewarding and we can’t wait to see what’s in store
            for the future!
          </p>
        </div>

    
        <div className='pb-10'>
          <h3 className='font-semibold'>PMI-SAC Professional Development Conference</h3>
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

        <div className="flex justify-center p-20 h-54 my-10">
          <Link className='text-3xl'>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>

        <Footer /> 

      </div>
    </div>


  )
}

export default Event
