import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Halo = () => {
  const [state,setState] = useState([])
  const fetchData = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setState(response.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
<div>
{state.map((e,index)=>(
  <p>{e.name}</p>
))}
</div>
    )
}

export default Halo