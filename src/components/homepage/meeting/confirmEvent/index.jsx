import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const confirmEvent = () => {
  const location = useLocation()
  const [savedEvent, setSavedEvent] = useState(null)
  
  useEffect(() => {
    if (location.state) {
      setSavedEvent(location.state)
    }  else {
      const getSavedEvent = localStorage.getItem('create')  
      if (getSavedEvent) {
        setSavedEvent(JSON.parse(getSavedEvent))
      }
    }
  }, [location.state])

  if(!savedEvent){
    return <p>No event found </p>
  }

  
  //   useEffect(() => {
  //   // Clean up localStorage after retrieving the data
  //   return () => {
  //     localStorage.removeItem('blogData');
  //   };
  // }, []);


  return (
    <div className='bg-gray-500 h-[70rem]'>
      <div className='flex justify-between border-gray-600 border-b p-[1rem]'>
        <h2 className=''>You're welcome {name}</h2>
        <span>❌</span>
      </div>

      <p className='flex justify-center my-20 text-2xl font-semibold'>kindly confirm your information:</p>

    <div className="min-h-screen flex items-center justify-center">
        <form className="p-10 rounded-lg shadow-xl w-full max-w-md">
          <div className="space-y-4 text-left">
            <div>
              <label className="block font-medium mb-1">Email: {savedEvent.}</label>
              <input 
                type="text" 
                className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
            </div>  

            <div>
              <label className="block font-medium mb-1">Phone:</label>
              <input 
                type="number" 
                className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Event name:</label>
              <input 
                type="text" 
                className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Date of event:</label>
              <input 
                type="text" 
                className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
            </div>  
            
            <div>
              <label className="block font-medium mb-1">Venue:</label>
              <input 
                type="text" 
                className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
            </div>  
            
            <div>
              <label className="block font-medium mb-1">Agenda:</label>
              <input 
                type="text" 
                className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
            </div>  
          </div>

        <div className="flex gap-[10rem]">
            <div className=" mt-6">
            <button className="p-3 px-10 border border-gray-600 text-lg text-gray-400 rounded-full hover:bg-slate-600 transition ease-in">Edit</button>
          </div> 
          <div className=" mt-6">
            <button className="p-3 px-6 border border-gray-600 text-lg text-gray-400 rounded-full hover:bg-slate-600 transition ease-in">Confirm</button>
          </div> 
        </div>
        </form>
      </div>  

      {/* <form className="">
        <div className="space-y-4 text-center">
          <div className=''>
           <label>Email:</label>
           <input type="text" />           
          </div>  

          <div className=''>
            <label>Phone:</label>
            <input type="number" />           
          </div>

          <div className=''>
            <label>Event name:</label>
            <input type="text" />           
          </div>

          <div className=''>
            <label>Date of event:</label>
            <input type="number" />           
          </div>  
          
          <div className=''>
            <label>Venue:</label>
            <input type="text" />           
          </div>  
          
          <div className=''>
            <label>Agenda:</label>
            <input type="text" />           
          </div>  
        </div>

        <div className='text-center my-10'>
          <button className='p-4 px-10 border rounded-full'>Confirm</button>
        </div> 

      </form> */}
        {/* <div className='text-start ml-[10rem] font-light'>
          <ul className='space-y-4'>
            <li>Email: </li>
            <li>Phone:</li>
            <li>Event name:</li>
            <li>Date of event:</li>
            <li>Venue:</li>
            <li>Agenda:</li>            
          </ul>
        </div>
        <div className='text-center my-10'>
          <Link className='p-4 px-10 border rounded-full'>Confirm</Link>
        </div> */}
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
