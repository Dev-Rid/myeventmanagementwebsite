import Aos from "aos"
import "aos/dist/aos.css"
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from "react";
import Footer from "../footer";


const Create = () => {
    const [isPending, setIsPending] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
      e.preventDefault()

      // setIsPending(true)
      const create = { 
        firstName: "", 
        lastName: "", 
        date: "", 
        venue: "", 
        agenda: "", 
        email: "", 
        phone: "", 
        eventname: ""
      }

      navigate(`/confirmevent/`, { state: create})
    
}

  // useEffect animation
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    
    <div className='bg-gray-500'>
      <div>

        <div className='meeting h-[22rem] text-center text-gray-100 pt-20'>
          <h2 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-300 mt-5' data-aos="fade-down-top">Create an event</h2>
        </div>
       
        <div className='md:block lg:grid grid-cols-3 mt-5 ' data-aos="fade-down-top">
          {/* first column */}
          <div className='col-span-2 -ml-10'>
            <div className='w-[20rem] text-center my-20 mx-[2rem] md:mx-[5rem] hidden'>
              <h3 className='pb-5 text-2xl pr-10'>Spark Event Management</h3>
              <span className='flex text-lg'>MAIL: <p>Unit #72148 - 1600 90 Avenue SW, Calgary, AB T2V 5H9</p> </span>
              <span className='flex text-lg'>OFFICE: <p>Unit #200 - 1110 7 Street SW, Calgary, AB T2R 1</p> </span>
              <span className='pr-10'>o. (587) 880-2672   m. (403) 990-8968</span> <br />
              <span className='pr-10'>tf. 1-800-281-0697   f. 1-800-281-0697</span>
            </div>

            <div className='m-20 border h-[26rem] lg:w-[42rem] md:w-[38rem] sm:w-[30rem] hidden sm:mx-xuto  rounded-sm'>
              <p>
                
              </p>
              <h2>api</h2>
            </div>



            <div className='m-20 w-[100%]'>
              <div>
                <h2 className='text-2xl font-semibold'>Create your event <span className="text-yellow-600">here ↡ </span></h2>

                <form className='' onSubmit={handleSubmit}>
                  <div className='block md:flex my-5 sm:mx-auto '>
                    <div className='block'>
                      <label htmlFor="" className='font-semibold text-lg'>First Name:</label>
                      <input type="text"
                       className='py-2.5 rounded-sm -px-5 sm:px-6 md:px-8 border bg-gray-500'
                     
                       //  value={firstName}
                        // onChange={(e) =>handleChange(e.target.value)}
                        // onChange={(e) => setFirstName(e.target.value)}
                       />
                    </div>

                    <div className=' block mt-0 sm:mt-5 md:mt-0 md:ml-4 lg:ml-8'>
                      <label htmlFor="" className='font-semibold text-lg'>Last Name:</label>
                      <input type="text"
                        className='py-2.5 mt-10 sm:mt-0 rounded-sm border  sm:px-6 md:px-8 bg-gray-500'
                        // value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='my-5'>
                    <p htmlFor="" className='font-semibold text-lg'>Email:</p>
                    <input type="string"
                      className='text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3'
                      // value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className='my-5'>
                    <p htmlFor="" className='font-semibold text-lg'>Phone:</p>
                    <input type="string"
                      className='text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3'
                      // value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className='my-5'>
                    <p htmlFor="" className='font-semibold text-lg'>Event Name:</p>
                    <input type="string"
                      className='text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3'
                      // value={eventname}
                      onChange={(e) => setEventName(e.target.value)}
                    />
                  </div>
                    
                  <div className=''>
                    <div className='block'>
                      <p className='font-semibold text-lg'>Date</p>
                      <input type="number" placeholder="Date of event" 
                        className='text-start text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3' 
                        // value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>

                    <div className="my-5 ">
                      <p className='font-semibold text-lg'>Venue:</p>
                      <select name="" 
                        className='px-20 text-start text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3' 
                        onChange={(e) => setVenue(e.target.value)}
                          // onChange={(e) => console.log(e.target.value)}
                        >
                        <option value="">-select a venue-</option>
                        <option value={"Nigeria"}>Nigeria</option>
                        <option value={"paris"}>Paris</option>
                        <option value={"united kingdom"}>United Kingdom</option>
                        <option value={"u.s.a"}>U.S.A</option>
                        <option value={"canada"}>Canada</option>
                      </select>
                    </div>
                    
                    <div className='my-5'>
                      <p htmlFor="" className='font-semibold text-lg'>Agenda <span className="">(required)</span></p>
                      <textarea name="" placeholder="Including the type of your proposed event and the exact location of event" 
                        className='text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] h-[7rem] bg-gray-500 pl-3' 
                        // value={agenda}
                        onChange={(e) => setAgenda(e.target.value)}
                      ></textarea>
                    </div>

                  </div>

                 { !isPending && <button className=" text-gray-400 border px-10 py-3 rounded text-lg active:bg-gray-400 transition active:text-lg active:text-gray-900  ease-in duration-200"> Register event </button> } 
                 { isPending && <button className=" text-gray-400 border px-10 py-3 rounded text-lg active:bg-gray-400 transition active:text-lg active:text-gray-900  ease-in duration-200"> Registering event </button> }
                
                </form>
              </div>
            </div>

          </div>

          {/* second column */}
      
          <div className='col-span-1 ml-10'>
            <div className='mt-[5rem] ml-8 '>
              <span className='block sm:flex md:block lg:flex'>
                <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3'/>
                <div className='ml-3 w-[50%]'>
                  <p>As a female-owned business,
                    we owe our success to the amazing
                    women who have shared their talent
                    with Spark.…
                  </p>
                  <a href="" className='text-gray-400 text-sm'>
                    https://t.co/PakmHWuN9s
                    Mar 8, 2022, 8:00 AM
                  </a>    
                </div>
              </span>

              <span className='block sm:flex md:block lg:flex mt-[6rem]  w-[50%]'>
                <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3' />
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

              <span className='block sm:flex md:block lg:flex mt-[6rem] w-[50%]'>
                <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3' />
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

              <span className='block sm:flex md:block lg:flex mt-[6rem] w-[50%]'>
                <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3' />
                <div className='ml-3'>
                  <p>
                    #TBT: How cute were these sweet treats we
                    gave for Valentines Day? To sweeten the deal
                    even more, we had limited-ti…
                  </p>
                  <a href="" className='text-gray-400 '>
                    https://t.co/fTFPnqNJIK
                    Feb 10, 2022, 9:01 AM
                  </a>
                </div>
                
              </span>

              <span className='block sm:flex md:block lg:flex mt-[6rem]'>
                <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3' />
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

            </div>

          </div>

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

export default Create















































































































































































































// import Aos from "aos"
// import "aos/dist/aos.css"
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { useEffect, useState } from "react";
// import Footer from "../footer";


// const Create = () => {

//     const [firstName, setFirstName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [email, setEmail] = useState("")
//     const [date, setDate] = useState("")
//     const [venue, setVenue] = useState("")
//     const [agenda, setAgenda] = useState("")
//     const [phone, setPhone] = useState("")
//     const [eventname, setEventName] = useState("")
//     const [isPending, setIsPending] = useState(false)
//     const navigate = useNavigate()

//     const handleSubmit = (e) =>{
//       e.preventDefault()
    
//       setIsPending(true)
//       if (!firstName || !lastName || !email || !phone || !eventname) {
//         alert("Please fill in all required fields.");
//         return;
//       } else {

//       const create = { 
//         firstName, 
//         lastName, 
//         date, 
//         venue, 
//         agenda, 
//         email, 
//         phone, 
//         eventname
//       }

//       fetch("http://localhost:3005/create-event", {
//         method: "POST", 
//         headers: {
//           "content-type": "application/json"
//         },
//         body: JSON.stringify(create)
//       })
//       .then(res => {
//         setIsPending(false)
//         res.json()
//         console.log(res)
//         navigate(`/eventlist/${savedEvent.id}`)
        
//       })

//       .catch(err =>{
//         console.log(err)
//       })

//     }
//   }


//   // useEffect animation
//   useEffect(() => {
//     Aos.init({ duration: 2000 })
//   }, [])


//   return (
    
//     <div className='bg-gray-500'>
//       <div>

//         <div className='meeting h-[22rem] text-center text-gray-100 pt-20'>
//           <h2 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-300 mt-5' data-aos="fade-down-top">Create an event</h2>
//         </div>
       
//         <div className='md:block lg:grid grid-cols-3 mt-5 ' data-aos="fade-down-top">
//           {/* first column */}
//           <div className='col-span-2 -ml-10'>
//             <div className='w-[20rem] text-center my-20 mx-[2rem] md:mx-[5rem] hidden'>
//               <h3 className='pb-5 text-2xl pr-10'>Spark Event Management</h3>
//               <span className='flex text-lg'>MAIL: <p>Unit #72148 - 1600 90 Avenue SW, Calgary, AB T2V 5H9</p> </span>
//               <span className='flex text-lg'>OFFICE: <p>Unit #200 - 1110 7 Street SW, Calgary, AB T2R 1</p> </span>
//               <span className='pr-10'>o. (587) 880-2672   m. (403) 990-8968</span> <br />
//               <span className='pr-10'>tf. 1-800-281-0697   f. 1-800-281-0697</span>
//             </div>

//             <div className='m-20 border h-[26rem] lg:w-[42rem] md:w-[38rem] sm:w-[30rem] hidden sm:mx-xuto  rounded-sm'>
//               <p>
                
//               </p>
//               <h2>api</h2>
//             </div>



//             <div className='m-20 w-[100%]'>
//               <div>
//                 <h2 className='text-2xl font-semibold'>Create your event <span className="text-yellow-600">here ↡ </span></h2>

//                 <form className='' onSubmit={handleSubmit}>
//                   <div className='block md:flex my-5 sm:mx-auto '>
//                     <div className='block'>
//                       <label htmlFor="" className='font-semibold text-lg'>First Name:</label>
//                       <input type="text"
//                        className='py-2.5 rounded-sm -px-5 sm:px-6 md:px-8 border bg-gray-500'
//                        value={firstName}
//                         // onChange={(e) =>handleChange(e.target.value)}
//                         onChange={(e) => setFirstName(e.target.value)}
//                        />
//                     </div>

//                     <div className=' block mt-0 sm:mt-5 md:mt-0 md:ml-4 lg:ml-8'>
//                       <label htmlFor="" className='font-semibold text-lg'>Last Name:</label>
//                       <input type="text"
//                         className='py-2.5 mt-10 sm:mt-0 rounded-sm border  sm:px-6 md:px-8 bg-gray-500'
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className='my-5'>
//                     <p htmlFor="" className='font-semibold text-lg'>Email:</p>
//                     <input type="string"
//                       className='text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3'
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>

//                   <div className='my-5'>
//                     <p htmlFor="" className='font-semibold text-lg'>Phone:</p>
//                     <input type="string"
//                       className='text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3'
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                     />
//                   </div>

//                   <div className='my-5'>
//                     <p htmlFor="" className='font-semibold text-lg'>Event Name:</p>
//                     <input type="string"
//                       className='text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3'
//                       value={eventname}
//                       onChange={(e) => setEventName(e.target.value)}
//                     />
//                   </div>
                    
//                   <div className=''>
//                     <div className='block'>
//                       <p className='font-semibold text-lg'>Date</p>
//                       <input type="number" placeholder="Date of event" 
//                         className='text-start text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3' 
//                         value={date}
//                         onChange={(e) => setDate(e.target.value)}
//                       />
//                     </div>

//                     <div className="my-5 ">
//                       <p className='font-semibold text-lg'>Venue:</p>
//                       <select name="" 
//                         className='px-20 text-start text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] bg-gray-500 pl-3' 
//                         onChange={(e) => setVenue(e.target.value)}
//                           // onChange={(e) => console.log(e.target.value)}
//                         >
//                         <option value="">-select a venue-</option>
//                         <option value={"Nigeria"}>Nigeria</option>
//                         <option value={"paris"}>Paris</option>
//                         <option value={"united kingdom"}>United Kingdom</option>
//                         <option value={"u.s.a"}>U.S.A</option>
//                         <option value={"canada"}>Canada</option>
//                       </select>
//                     </div>
                    
//                     <div className='my-5'>
//                       <p htmlFor="" className='font-semibold text-lg'>Agenda <span className="">(required)</span></p>
//                       <textarea name="" placeholder="Including the type of your proposed event and the exact location of event" 
//                         className='text-2xl py-2.5 mr-4 mt-2 rounded-sm border w-[22rem] sm:w-[30rem] md:w-[42rem] lg:w-[43rem] h-[7rem] bg-gray-500 pl-3' 
//                         value={agenda}
//                         onChange={(e) => setAgenda(e.target.value)}
//                       ></textarea>
//                     </div>

//                   </div>

//                  { !isPending && <button className=" text-gray-400 border px-10 py-3 rounded text-lg active:bg-gray-400 transition active:text-lg active:text-gray-900  ease-in duration-200"> Register event </button> } 
//                  { isPending && <button className=" text-gray-400 border px-10 py-3 rounded text-lg active:bg-gray-400 transition active:text-lg active:text-gray-900  ease-in duration-200"> Registering event </button> }
                
//                 </form>
//               </div>
//             </div>

//           </div>

//           {/* second column */}
      
//           <div className='col-span-1 ml-10'>
//             <div className='mt-[5rem] ml-8 '>
//               <span className='block sm:flex md:block lg:flex'>
//                 <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3'/>
//                 <div className='ml-3 w-[50%]'>
//                   <p>As a female-owned business,
//                     we owe our success to the amazing
//                     women who have shared their talent
//                     with Spark.…
//                   </p>
//                   <a href="" className='text-gray-400 text-sm'>
//                     https://t.co/PakmHWuN9s
//                     Mar 8, 2022, 8:00 AM
//                   </a>    
//                 </div>
//               </span>

//               <span className='block sm:flex md:block lg:flex mt-[6rem]  w-[50%]'>
//                 <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3' />
//                 <div className='ml-3'>
//                   <p>
//                     All that love you're looking for?
//                     Give it to yourself. Happy ❤️ day,
//                     besties.
//                   </p>
//                   <a href="" className='text-gray-400'>
//                     https://t.co/FiAMw7Qt2z
//                     Feb 14, 2022, 8:01 AM
//                   </a>
//                 </div>
//               </span>

//               <span className='block sm:flex md:block lg:flex mt-[6rem] w-[50%]'>
//                 <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3' />
//                 <div className='ml-3'>
//                   <p>
//                     This is how we're sleeping tonight
//                     knowing we aren't planning the biggest
//                     sporting event of the year... Good luck t…
//                   </p>
//                   <a href="" className='text-gray-400'>
//                     https://t.co/kztLXV1RmW
//                     Feb 12, 2022, 9:05 AM
//                   </a>
//                 </div>
//               </span>

//               <span className='block sm:flex md:block lg:flex mt-[6rem] w-[50%]'>
//                 <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3' />
//                 <div className='ml-3'>
//                   <p>
//                     #TBT: How cute were these sweet treats we
//                     gave for Valentines Day? To sweeten the deal
//                     even more, we had limited-ti…
//                   </p>
//                   <a href="" className='text-gray-400 '>
//                     https://t.co/fTFPnqNJIK
//                     Feb 10, 2022, 9:01 AM
//                   </a>
//                 </div>
                
//               </span>

//               <span className='block sm:flex md:block lg:flex mt-[6rem]'>
//                 <img src="src/IMGs/sparkstar.jpeg" alt="" className='h-[3.6rem] rounded-sm md:ml-3' />
//                 <div className='ml-3 w-[50%]'>
//                   <p>
//                     We hope everyone had a wonderful holiday break
//                     and were able to cherish the quiet moments of
//                     the season. Looking fo…
//                   </p>
//                   <a href="" className='text-gray-400'>
//                     https://t.co/uyze1eZjzP
//                     Jan 3, 2022, 7:01 AM
//                   </a>
//                 </div>
                
//               </span>

//             </div>

//           </div>

//         </div>

//         <div className="flex justify-center p-20 h-54 my-10">
//           <Link className='text-3xl'>
//             <FontAwesomeIcon icon={faFacebook} />
//           </Link>
//         </div>

//         <Footer /> 

//       </div>

//     </div>
//   )
// }

// export default Create
