import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {MdFavorite} from 'react-icons/md'
import {addFavorite,removeFavorite} from '../Features/FavoriteSlice'
import {useSelector,useDispatch} from 'react-redux'
const CardMovie = ({data,setText,text,getAuthor}) => {
  const {favorite} = useSelector((state)=> state.favorite)
  const [color,setColor]=useState('red')
    const spliting = (spl)=>{
        const split = spl.split('-')
         const years = split[0]
         return years
    }
    const dispatch = useDispatch()
    const rating = (rate)=>{
      const x = '1'
     const spliting = rate.toString().split('.')
     const number = spliting[0]
     let lastNumb = spliting[1]
  const y = lastNumb === undefined ? x : lastNumb
  const gabung = [...number,y]
    const splitlagi = gabung[1][0]
    const joining = [...number,splitlagi].join(',')
    return joining
  
    }
    const addToFavorite = (id) =>{
       dispatch(addFavorite(id))
       getAuthor(id)
       localStorage.setItem('fav',JSON.stringify(favorite))
       setText(true)
    }
    const removetoFavorite = (id) =>{
      dispatch(removeFavorite(id.id))
    }
   useEffect(()=>{
  const sto =  setTimeout(() => {
       setText(false)
    }, 3000)
    return ()=>{
      clearTimeout(sto)
    }
   },[text])
   useEffect(()=>{
   
   },[])
    const image = 'https://image.tmdb.org/t/p/w500'
  return (
    <Container style={{  backgroundImage: `url(${image}${data?.backdrop_path})`,  backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',}}>
   <ContainerKata>
  
    <KataKata>
<DivKata>
<Kata1>{data?.original_title}</Kata1>
<Kata2>{spliting(data?.release_date)}</Kata2>
<Kata1>{rating(data?.vote_average)}</Kata1>
</DivKata>
<ContainerFav>
  <Icons>
  <MdFavorite style={{ color:color,fontSize:'20px'}} onClick={()=>addToFavorite(data)}/>

  </Icons>
  
</ContainerFav>
    </KataKata>
   </ContainerKata>
    </Container>
  )
}

export default CardMovie

const Container = styled.div `
 min-width:400px;
 height:240px;
 border-radius:30px;
 margin-right:20px;
 position: relative;
`
const ContainerKata = styled.div `
position: absolute;
bottom:0;
height: 90px;
width: 100%;
`
const KataKata = styled.div`
    display: flex;
    justify-content: space-between;

`
const DivKata = styled.div `
width: 70%;
padding-left:20px;
`
const Kata1 = styled.h3 `
color:white;
font-weight: 600;
`
const Kata2 = styled.h4`
    color:white;
    font-weight: 300;
    padding-top:5px;
` 
const ContainerFav = styled.div`
width:30%;
display:flex;
justify-content:center;
align-items: center;
`
const Icons =  styled.div``