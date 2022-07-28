import { useEffect, useState,useRef,useId} from 'react'
import reactLogo from './assets/react.svg'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Halo from '../src/Compontents/Halo'

function App() {

  return (
   <>

   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Halo' element={<Halo/>}/>
   
   </Routes>
   </>

  )
}

export default App
