import React from 'react'

const UseFetch = () => {


    fetch("http://localhost:3005/create-event/", {
        method: "POST", 
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(create)
      })
        .then(() => {
          console.log("event added")
          setIsPending(false)
          navigate("/eventlist")
        })
        .catch(err =>{
          console.log(err)
        })










  return (
    <div>
      
    </div>
  )
}

export default UseFetch
