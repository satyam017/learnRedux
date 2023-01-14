import React from 'react'
import { useSelector } from 'react-redux'

const ShowItem = () => {
    const state = useSelector(state=>state)
  return (
    <div>
        {state && JSON.stringify(state)}
      
    </div>
  )
}

export default ShowItem
