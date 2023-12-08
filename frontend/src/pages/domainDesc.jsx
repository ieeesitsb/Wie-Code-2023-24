import React from 'react'
import { useParams } from 'react-router-dom'

const DomainDesc = () => {

  const {id} = useParams()

  return (
    <div>
      <h1>Description Page</h1>
      <p>{id}</p>
    </div>
  )
}

export default DomainDesc
