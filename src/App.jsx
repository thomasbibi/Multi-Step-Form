import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import LoginDetails from './Components/LoginDetails'
import { FormProvider } from './Components/FormContext'
import Payment from './Components/Payment'
import Thanks from './Components/Thanks'

function App() {
  const value = useState({})

  return (
    <>
    <h1 style={{textAlign : 'center'}}>Sign-Up Page</h1>
    <FormProvider>
      <Routes>
        <Route path='/' element = {<LoginDetails/>}/>
        <Route path='/more-details' element = {<Payment/>}/>
        <Route path='/thanks' element = {<Thanks/>}/>
      </Routes>
    </FormProvider>
    </>
  )
}

export default App
