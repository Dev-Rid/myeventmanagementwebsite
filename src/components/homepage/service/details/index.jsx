import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
  return (
    <div>
      <h2>My details - { id }</h2>
    </div>
  )
}

export default Details
