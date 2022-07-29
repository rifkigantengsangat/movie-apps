import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios'
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';
const Trending = () => {
    const [text,setText] = useState('day')
    const [trendingData,setTrendingData] =useState([])
    const handleClick =(e)=>{
        setText(e.currentTarget.textContent)
       
        fetchingData()
    }
    const fetchingData =async()=>{
        if(text===null){
         return false
    }else{
        const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/trending/movie/${text}`,{
            params: {
                api_key: import.meta.env.VITE_BASE_API_KEY,
            }
        })
    setTrendingData(data.results)
    }
        
    }
    useEffect(()=>{
        fetchingData()
    },[text])
  return (
    <Container>
      <ContainerText>
        <Text>Trending</Text>
      </ContainerText>
       <ContainerDate>
       <ContainerDiv>
       <button style={{ borderRadius:"11px",width:"100%",color :'white',backgroundColor:' #0D0D0F',border:'none'}} onClick={(e)=>{handleClick(e);}}>day</button>
       </ContainerDiv>
       <ContainerDiv>
       <button style={{ borderRadius:"11px",width:"100%",color :'white',backgroundColor:' #0D0D0F',border:'none'}}  onClick={(e)=>{handleClick(e);}}>week</button>
        </ContainerDiv>
       </ContainerDate>
       <ContainerSplide>
       <Splide   options={ {
        rewind: true,
        arrows:false,
        pagination:false,
        width : 300,
        height: 200,
        autoplay:true,
        perPage:1,
        gap   : '1rem',
      } }>
  {trendingData &&trendingData.map((topMovies)=>{
    return(
    
    
    <SplideSlide style={{ position:"relavite" }}>
        <img style={{borderRadius:'20px',backgroundSize:'cover',width:'100%',backgroundPosition:'center'}} src={`https://image.tmdb.org/t/p/w500${topMovies.poster_path}`} />
    
        <p>{topMovies.original_title}</p>
        <p><AiFillStar style={{ color:'#daa520' }}/>  {topMovies.popularity}</p>
        
    </SplideSlide>
    
    )
  })}
 
   </Splide>
       </ContainerSplide>
    </Container>
  )
}

export default Trending
const Container = styled.div `
margin-top:20px;
`
const Text = styled.h3`
color:#6e7176;
font-size:16px;
font-weight: 400;
`
const ContainerText = styled.div `

`
const ContainerDate = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const ContainerDiv = styled.div`
    width:50%;
    background-color: #0D0D0F;
margin:5px;
border-radius:20px;
padding:10px 10px;
&:hover {
        background-color: #e6007e;
        transform: scale(1.05);
    }
`
const ContainerSplide = styled.div`
  margin:20px 0;
`