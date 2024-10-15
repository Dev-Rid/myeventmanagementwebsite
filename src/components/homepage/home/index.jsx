const Home = () => {
  return (
  <>
      <div className="h-dvh bg-gray-500">
      <div className='primary h-[30rem] mydiv pt-5'>
          <h2 className="text-center text-gray-400 text-7xl pt-16 font-semibold">Event Planning Is <br /> Hard.</h2>
          <p className="text-center text-2xl text-gray-400 font-bold pt-10">WE CAN HELP YOU</p>
      </div>
      
      <div className="p-9 bg-gray-500 h-[35rem] text-black font-light text-center text-4xl">
          <p className=" pt-10">
            <span className="text-pink-900 text-5xl font-medium">Tech Event</span> is a full service event management firm based in Calgary, Alberta that was created by pairing together our passion for business and events. We bring a fresh, unique approach to the event management industry.
          </p>
          
          <p className="p-10">
          Our team understands that a properly executed event can be leveraged to support an organization’s strategic vision, incorporated into a company’s marketing plan,
          or used to build networks and client loyalty.
          </p>
          
      </div>

    
      <div className="primary2 pt-20 h-[20rem] text-xl text-gray-400 text-center">
        <h2 className="text-8xl">Event Planing</h2>
          <p className="text-4xl pt-3"> Is Our Passion</p>
      </div>


      <div className="bg-gray-200 p-10 inline-block">
          <h2 className="text-center p-10 text-lg w-auto">Spark approaches every project with meticulous attention to detail and 
            obsessive precision. Regardless of size and scope, we treat your event 
            like a business with clear strategic goals, defined milestones, and a 
            comprehensive plan to ensure that your event is delivered on time and on budget. 
            At Spark, we put your organization first. We learn about your business, we focus 
            on your challenges, and we plan events to support your goals.
          </h2>

          <div className="rounded-lg flex justify-center border-b bottom-2">
            <img className="rounded-lg w-[45rem] mx-auto" src="/src/IMGs/image3.jpg" alt="" srcset="" />
          </div>

      </div>
    </div>
  </>

  )
  
}

export default Home
