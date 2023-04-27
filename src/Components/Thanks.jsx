import React from 'react'
import {useFormContext} from './FormContext'


const Thanks = () => {
    const [state] = useFormContext()
  return (
    <div>
        Your submitted form
        <p>{state.firstname}<br/>
        {state.lastname}<br/>
        {state.email}<br/>
        {state.address}</p>
    </div>
  )
}

export default Thanks