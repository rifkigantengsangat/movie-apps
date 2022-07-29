import { useEffect, useState,useRef,useId} from 'react'
import reactLogo from './assets/react.svg'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Halo from '../src/Compontents/Halo'
import Navbar from './Compontents/Navbar'
import RightBar from './Compontents/RightBar'
import Discover from './Pages/Discover'
function App() {

  return (
   <div style={{ width:'100%', height:'100vh',display:'flex' }}>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Discover' element={<Discover />}/>
   </Routes>
   <RightBar/>
   </div>

  )
}

export default App
