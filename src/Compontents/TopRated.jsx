import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {AiFillStar} from 'react-icons/ai'
const TopRated = () => {
    const [top,setTop] = useState([])
    const [page,setPage] = useState(1)
    const nextPage = ()=>{
        setPage(prevstate=>prevstate + 1)
    }
    const prevPage = ()=>{
        setPage(prevstate=>prevstate - 1)
    }
    console.log(page)
    const topRatedData = async ()=>{
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/movie/top_rated`,{
            params:{
                api_key: import.meta.env.VITE_BASE_API_KEY,
                page : page
            }
        })
        setTop(response.data.results)
    }
    useEffect(()=>{
        topRatedData()
    },[page])
    
    const image = 'https://image.tmdb.org/t/p/w500'
  return (
    <>
    <ContainerText>
        <Text>Top Rated</Text>
    </ContainerText>
      <ContainerCard>
      <Splide   options={ {
        rewind: true,
        arrows:false,
        pagination:false,
        width : 800,
        height: 300,
        perPage:3,
        gap   : '1rem',
      } }>
  {top &&top.map((topMovies)=>{
    return(
    
    
    <SplideSlide style={{ position:"relavite" }}>
        <img src={`https://image.tmdb.org/t/p/w500${topMovies.poster_path}`} style={{width:"100%"}}/>
    
        <TextScroll>{topMovies.original_title}</TextScroll>
        <TextScroll2><AiFillStar style={{ color:'#daa520' }}/>  {topMovies.popularity}</TextScroll2>
        
    </SplideSlide>
    
    )
  })}
 
   </Splide>
 
      </ContainerCard>
      <button onClick={nextPage}>Next Page</button>
      <button onClick={prevPage}>Prev Page</button>
    </>
  )
}

export default TopRated

const ContainerText = styled.div `

`
const Text = styled.h2`
    color:#FEFBF6;
font-size:18px;
`
const ContainerCard = styled.div`
margin-top:20px;
width: 100%;
height: 450px;
display:flex;
position:relative;
`
const Card = styled.div`
width:100%;
height: 150px;
`
const TextScroll = styled.h2`
    z-index:100;
    font-size: 14px;
    position:absolute;
  
    text-align:center;
    bottom:0;
    color:#FEFBF6;
  `
  const TextScroll2 = styled.h2`
     font-size: 14px;
    position:absolute;
  
    text-align:center;
    bottom:20px;
    color:#FEFBF6;
  `