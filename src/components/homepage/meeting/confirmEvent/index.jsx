import { Aos } from "aos"
import { CloudFog } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


const confirmEvent = () => {
    const [updateState, setUpdateState] = useState({
      firstName: "",
    })

    const handleChangeFirstName = (e) => { 
        e.preventDefault()
        setUpdateState((prevState) => ({
          ...prevState,
          firstName: e.target.value
        }))
    }

    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [date, setDate] = useState("")
    // const [venue, setVenue] = useState("")
    // const [agenda, setAgenda] = useState("")
    // const [phone, setPhone] = useState("")
    // const [eventname, setEventName] = useState("")
    // const [isPending, setIsPending] = useState(false)

    const [savedEvent, setSavedEvent] = useState("")


    const location = useLocation()


  
  useEffect(() => {
    // console.log(location.state)
    if (location.state) {
      setSavedEvent(location.state)  //storing state inside my state 
    } else {
       if (location.state) {
        setSavedEvent(location.state)  //storing state inside my state
      }  else {
        const getSavedEvent = localStorage.getItem('create') //getting state from local storage
      if (getSavedEvent) {
         setSavedEvent(JSON.parse(getSavedEvent))
        }
      }
    } 

  }, [location.state])



  
  // if(!savedEvent){
  //   return <p>No event found </p>  
  // }


 
  const handleClickSubmit = (e) =>{
    e.preventDefault()
    // console.log("submitted")

    const create = { 
      firstName, 
      lastName, 
      date, 
      venue, 
      agenda, 
      email, 
      phone, 
      eventname
    }

    fetch("http://localhost:3005/create-event", {
      method: "POST", 
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(create)
    })
    .then(res => {
      // setIsPending(false)
      res.json()
      console.log(res)
    
    })
    .catch(err =>{
      console.log(err)
    })
  }


  const handleEditClick = (e) =>{
    e.preventDefault()
    console.log("edited")
  }



  return (
    <div className='bg-gray-500 h-[70rem]' >
      <div className='flex justify-between border-gray-600 border-b p-[1rem]'>
        <h2 className='text-2xl'>You're welcome <span className="text-yellow-600">{savedEvent.lastName}</span></h2>
        <span>❌</span>
      </div>

      <p className='flex justify-center my-20 text-2xl font-semibold' data-aos="fade-down-top">kindly confirm your information:</p>


      
      <div className="min-h-screen flex items-center justify-center">
          <form className="p-10 rounded-lg shadow-xl w-full max-w-md" data-aos="fade-down-top">
            <div className="space-y-4 text-left">

              {/* <div>
                <label className="block font-medium mb-1">First Name:</label>
                <input 
                  type="text" 
                  onChange={(e) => setFirstName(e.target.value)}
                  value={ savedEvent.firstName } 
                  className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
              </div>   */}

              <div>
                <label className="block font-medium mb-1">Last Name:</label>
                <input 
                  type="text" 
                  onChange={(e) => setLastName(e.target.value)}
                  value={ savedEvent.lastName }  
                  className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
              </div>  

              <div>
                <label className="block font-medium mb-1">Email:</label>
                <input 
                  type="text" 
                  onChange={(e) => setEmail(e.target.value)}
                  value={savedEvent.email}
                  className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
              </div>  

              <div>
                <label className="block font-medium mb-1">Phone:</label>
                <input 
                  type="number" 
                  onChange={(e) => setPhone(e.target.value)}
                  value={savedEvent.phone}
                  className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
              </div>

              <div>
                <label className="block font-medium mb-1">Event name:</label>
                <input 
                  type="text"
                  onChange={(e) => setEventName(e.target.value)}
                  value={savedEvent.eventname} 
                  className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
              </div>

              <div>
                <label className="block font-medium mb-1">Date of event:</label>
                <input 
                  type="text"
                  onChange={(e) => setDate(e.target.value)}
                  value={savedEvent.date} 
                  className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
              </div>  
              
              <div>
                <label className="block font-medium mb-1">Venue:</label>
                <input 
                  type="text"
                  onChange={(e) => setVenue(e.target.value)}
                  value={savedEvent.venue} 
                  className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" />
              </div>  
              
              <div>
                <label className="block font-medium mb-1">Agenda:</label>
                <textarea
                value={savedEvent.agenda} 
                onChange={(e) => setAgenda(e.target.value)}
                className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" 
                ></textarea>
                {/* <input
                  type="text"
                  onChange={(e) => setAgenda(e.target.value)}
                  value={savedEvent.agenda} 
                  className="w-full border border-gray-400 bg-gray-500 rounded-md p-2" 
                  /> */}
              </div>  
            </div>
            <div className="flex gap-[10rem]">
              <div className=" mt-6">
                <button className="p-3 px-10 border border-gray-600 text-lg text-gray-400 rounded-full hover:bg-slate-600 transition ease-in" onClick={handleEditClick}>Edit</button>
              </div> 
              <div className=" mt-6">
                <button className="p-3 px-6 border border-gray-600 text-lg text-gray-400 rounded-full hover:bg-slate-600 transition ease-in" onClick={handleClickSubmit}>Confirm</button>
              </div> 
            </div>
          </form>
        
        </div>  
      </div>
  )
}

export default confirmEvent





































































