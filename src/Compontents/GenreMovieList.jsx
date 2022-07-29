import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {AiFillPlusCircle} from 'react-icons/ai'
const GenreMovieList = () => {
    const [genre,setGenre] = useState([])
    const fetchGenre = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/genre/movie/list`,{
            params:{
                api_key: import.meta.env.VITE_BASE_API_KEY,
            }
        })
   data.genres.splice(0,9)
        setGenre(data.genres)
    }
    useEffect(()=>{
       fetchGenre()
    },[])
    const handleClick =async(id)=>{
        const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/discover/movie`,{
            params:{
                api_key : import.meta.env.VITE_BASE_API_KEY,
                genre_ids :id
            }
        })
        console.log(data)
        console.log(id)
    }
  return (
    <Container>
        <ContainerText>
        <Text>GENRE</Text>
        </ContainerText>
        <ContainerGenreList>
        {genre.map((e)=>(
           <Card key={e.id}>
            <ContainerTextGenre>
             <TextGenre>
             <p onClick={()=>{handleClick(e.id)}} style={{ fontSize:'14px' ,textAlign:'center',fontWeight:'bold',cursor:'pointer' }}>{e.name}</p>
             </TextGenre>
            </ContainerTextGenre>
           </Card>
        ))}
        </ContainerGenreList>
    </Container>
  )
}

export default GenreMovieList

const Container = styled.div `
`
const ContainerText = styled.div `
`
const Text = styled.h3 `
color:#6e7176;
font-size:14px;
font-weight: 400;
`
const ContainerGenreList = styled.div`
    display: flex;
    margin-top:10px;
    
    flex-wrap:wrap
`
const Card = styled.div`
display:flex;
align-items: center;
height: 40px;
width: 40%;
background-color:#990000;
margin:5px;
border-radius:20px;
padding:10px 10px;
&:hover {
        background-color:red;
        transform: scale(1.05);
        color: white !important
    }
`
const ContainerTextGenre =styled.div`

`
const TextGenre = styled.div`
text-align : center;
color : white;

`