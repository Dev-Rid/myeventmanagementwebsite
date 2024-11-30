import { Link, useLocation } from "react-router-dom"

const confirmEvent = () => {
  const location = useLocation()

  const created = location.state
  console.log(created)


  return (
    <div className='bg-gray-500 h-[50rem]'>
      <div className='flex justify-between border-gray-600 border-b p-[1rem]'>
        <h2 className=''>You're welcome {name}</h2>
        <span>❌</span>
      </div>

        <p className='flex justify-center my-20 text-2xl font-semibold'>kindly confirm your information:</p>

        <div className='text-start ml-[10rem] font-light'>
          <ul className='space-y-4'>
            <li>Email: </li>
            <li>Phone:</li>
            <li>Event name:</li>
            <li>Date of event:</li>
            <li>Venue:</li>
            <li>Agenda</li>            
          </ul>
        </div>
        <div className='text-center my-10'>
          <Link className='p-4 px-10 border rounded-full'>Confirm</Link>
        </div>
    </div>
  )
}

export default confirmEvent







































































// import { useEffect, useState } from "react"
// import { Link, useParams } from "react-router-dom"

// const confirmEvent = () => {

//   const { id } = useParams()
//   // const [event, setEvent] = useState(null)

//   // useEffect(() => {
//   //   const fetchEvent = fetch(`http://localhost:3005/create-event/${id}`)
//   //   const data = fetchEvent.json()
//   //   console.log(data)
    
//   // }, [])

 
//   return (
//     <div className='bg-gray-500 h-[50rem]'>
//       <div className='flex justify-between border-gray-600 border-b p-[1rem]'>
//         <h2 className=''>You're welcome {name}</h2>
//         <span>❌</span>
//       </div>

//         <p className='flex justify-center my-20 text-2xl font-semibold'>kindly confirm your information:</p>

//         <div className='text-start ml-[10rem] font-light'>
//           <ul className='space-y-4'>
//             <li>Email: </li>
//             <li>Phone:</li>
//             <li>Event name:</li>
//             <li>Date of event:</li>
//             <li>Venue:</li>
//             <li>Agenda</li>            
//           </ul>
//         </div>
//         <div className='text-center my-10'>
//           <Link className='p-4 px-10 border rounded-full'>Confirm</Link>
//         </div>
//     </div>
//   )
// }

// export default confirmEvent
