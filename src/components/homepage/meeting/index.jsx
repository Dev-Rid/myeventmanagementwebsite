import axios from 'axios';
// import { Link } from 'react-router-dom';

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Meeting = () => {
  


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])



  return (
    <div className='bg-gray-500'>
      <div>
          <div className='meeting h-[22rem] text-center text-gray-100 pt-20'>
            <h2 className='text-8xl font-semibold text-gray-300 mt-5' data-aos="fade-down-fade">Set Up A Meeting</h2>
          </div>

       
        <div className='grid grid-cols-3 mt-5' data-aos="fade-down-top">
          {/* first column */}
          <div className='col-span-2'>
            <div className='w-[70%] text-center my-20 mx-32'>
              <h3 className='pb-5 text-2xl pr-10'>Spark Event Management</h3>
              <span className='flex text-lg'>MAIL: <p>Unit #72148 - 1600 90 Avenue SW, Calgary, AB T2V 5H9</p> </span>
              <span className='flex text-lg'>OFFICE: <p>Unit #200 - 1110 7 Street SW, Calgary, AB T2R 1</p> </span>
              <span className='pr-10'>o. (587) 880-2672   m. (403) 990-8968</span> <br />
              <span className='pr-10'>tf. 1-800-281-0697   f. 1-800-281-0697</span>
            </div>

            <div className='m-20 border h-[26rem] w-[42rem] rounded-sm'>
              <p>
                
              </p>
              {/* <h2>api</h2> */}
            </div>

            <div className='m-20 w-[100%]'>
              <div>
                <h2 className='text-lg'>Name <span >(required)</span></h2>

                <div className=''>
                  <div className='flex my-5'>
                    <div className='block'>
                      <label htmlFor="" className='text-md'>First Name:</label>
                      <input type="text" className='py-2.5 rounded-sm px-8 border bg-gray-500'/>
                    </div>

                    <div className='block mx-5'>
                      <label htmlFor="" className='text-md'>Last Name:</label>
                      <input type="text" className='py-2.5 mr-4 rounded-sm border px-8 bg-gray-500'/>
                    </div>
                  </div>
                    
                  <div className=''>

                    <div className='block'>
                      <p className='font-semilight'>Email:</p>
                      <input type="text" className='text-start py-2.5 mr-4 mt-2 rounded-sm border w-[42.9rem] bg-gray-500 pl-3'/>
                    </div>
                    
                    <div className='my-5'>
                      <p htmlFor="" className='font-semilight'>Phone:</p>
                      <input type="number" className='py-2.5 mr-4 mt-2 rounded-sm border w-[42.9rem] bg-gray-500 pl-3'/>
                    </div>
                    
                    <div>
                      <p htmlFor="" className='font-semilight'>Subject:</p>
                      <input type="text" className='py-2.5 mr-4 mt-2 rounded-sm border w-[42.9rem] bg-gray-500 pl-3'/>
                    </div>
                    
                    <div className='my-5'>
                      <p htmlFor="" className='font-semilight'>Message <span>(required)</span></p>
                      <textarea name="" id="" className='py-2.5 mr-4 mt-2 rounded-sm border w-[43rem] h-[7rem] bg-gray-500 pl-3'></textarea>
                    </div>
                    {/* <button>SAY HI!</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* second column */}
          <div className='col-span-1'>
            <div className='mt-[5rem] ml-8'>
              <span className='flex'>
                <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm'/>
                <div className='ml-3 w-[50%]'>
                  <p>As a female-owned business,
                    we owe our success to the amazing
                    women who have shared their talent
                    with Spark.…
                  </p>
                  <a href="" className='text-gray-400'>
                    https://t.co/PakmHWuN9s
                    Mar 8, 2022, 8:00 AM
                  </a>    
                </div>
              </span>

              <span className='flex mt-[6rem]  w-[50%]'>
                <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm' />
                <div className='ml-3'>
                  <p>
                    All that love you're looking for?
                    Give it to yourself. Happy ❤️ day,
                    besties.
                  </p>
                  <a href="" className='text-gray-400'>
                    https://t.co/FiAMw7Qt2z
                    Feb 14, 2022, 8:01 AM
                  </a>
                </div>
                
              </span>

              <span className='flex mt-[6rem] w-[50%]'>
                <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm' />
                <div className='ml-3'>
                  <p>
                    This is how we're sleeping tonight
                    knowing we aren't planning the biggest
                    sporting event of the year... Good luck t…
                  </p>
                  <a href="" className='text-gray-400'>
                    https://t.co/kztLXV1RmW
                    Feb 12, 2022, 9:05 AM
                  </a>
                </div>
              </span>

              <span className='flex mt-[6rem] w-[50%]'>
                <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm' />
                <div className='ml-3'>
                  <p>
                    #TBT: How cute were these sweet treats we
                    gave for Valentines Day? To sweeten the deal
                    even more, we had limited-ti…
                  </p>
                  <a href="" className='text-gray-400'>
                    https://t.co/fTFPnqNJIK
                    Feb 10, 2022, 9:01 AM
                  </a>
                </div>
                
              </span>

              <span className='flex mt-[6rem]'>
                  <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm' />
                <div className='ml-3 w-[50%]'>
                  <p>
                    We hope everyone had a wonderful holiday break
                    and were able to cherish the quiet moments of
                    the season. Looking fo…
                  </p>
                  <a href="" className='text-gray-400'>
                    https://t.co/uyze1eZjzP
                    Jan 3, 2022, 7:01 AM
                  </a>
                </div>
                
              </span>

            {/* <div className='ml-[3rem] text-center mt-10 rounded-sm border'>
                <Link >
                  twitter
                </Link>
            </div> */}
              
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Meeting
