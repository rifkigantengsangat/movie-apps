import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
const Discovery = () => {
  const [datas,setDatas] = useState([])
  const fetchingData =async()=>{
   const {data} = await axios.get('https://api.themoviedb.org/3/movie?api_key=9ccbc3a7dff416a975fd11834ec8ccc5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
   setDatas(data.results)
  }
  useEffect(()=>{
   fetchingData()
  },[])
  console.log(datas)
  return (
    <Container>Discovery</Container>
  )
}

export default Discovery

const Container = styled.div `
background-color: #0D0D0F;
width:65%;
flex-basis: 65%;
padding-left:25px;
overflow-x: auto;
height:100vh;
`