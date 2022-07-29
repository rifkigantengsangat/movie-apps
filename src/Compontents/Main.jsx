import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {MdCircleNotifications} from 'react-icons/md'
import {useDispatch, useSelector}  from 'react-redux'
import {getData,getDataSuccess,getDataFailure} from '../Features/Data/dataSlice'
import CardMovie from './CardMovie'
import { MdFavorite} from 'react-icons/md'
import {BiCategory} from 'react-icons/bi'
import {addFavorite,removeFavorite} from '../Features/FavoriteSlice'
import TopRated from './TopRated'
const Main = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.data)
    const {favorite} = useSelector((state)=> state.favorite)
    const [text,setText] = useState(false)
    const [fav,setFav] = useState([])
    const fetchData = async ()=>{
        try {
            dispatch(getData())
            const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=9ccbc3a7dff416a975fd11834ec8ccc5');
            const json = await response.json();
            const data = await json.results
            dispatch(getDataSuccess(data))
            
        } catch (error) {
            getDataFailure(error)
        }
    }
    const getAuthor = (author)=>{
        setText(true)
        {text ? <p>anda Menambahkan{author.original_title}</p> : ''}
    }
    useEffect(()=>{
fetchData()
    },[dispatch])
    useEffect(() => {
      if(localStorage.getItem('fav')){
        const retriviveProd = JSON.parse(localStorage.getItem("fav"));
        if(retriviveProd) dispatch(addFavorite(retriviveProd))
      }
    },[])
  return (
    <>
        <Container>
        <ContainerMenu>
            <Menu>
                <ListContainer>Movies</ListContainer>
                <ListContainer>Series</ListContainer>
                <ListContainer>TV Shows</ListContainer>
            </Menu>
            <Menu>
                <ListContainer><MdCircleNotifications style={{ color:'#6e7176',fontSize:'30px'}}/></ListContainer>
                <ListContainer><BiCategory style={{ color:'#6e7176',fontSize:'30px'}}/></ListContainer>
                <ListContainer><MdFavorite style={{ color:'#6e7176',fontSize:'30px'}}/><span style={{ color:'red',fontSize:'12px'}}>{favorite.length}</span></ListContainer>
            </Menu>
        </ContainerMenu>
       <ContainerTrending>
       <ContainerTextTrending>
        <TextTrending>
            Trending Movies
        </TextTrending>
        <ContainerText>
        <TextMessage>
            {text}
        </TextMessage>
        </ContainerText>
       </ContainerTextTrending>
       <ContainerMovieTrending>
        {data.map((e,i)=>(
 <CardMovie key={i} data={e} setText={setText} text={text} getAuthor={getAuthor}/>
        ))}
       
       </ContainerMovieTrending>
       </ContainerTrending>
       <ContainerRate>
       <TopRated/>
       </ContainerRate>
    </Container>
    </>

  )
}

export default Main
const Container = styled.div `
background-color: #0D0D0F;
width:65%;
flex-basis: 65%;
padding-left:25px;
overflow-x: auto;
height:100vh;
&::-webkit-scrollbar {
        width: 1px;
        height: 3px;
        border: 1px solid ;
        padding-top:20px;
        background-color:red;
    }
`
const ContainerMenu = styled.div `
width: 100%;
height:60px;
display:flex;
justify-content: space-between;
align-items: center;
`
const Menu = styled.ul `
display: flex;
align-items: center;

`
const ListContainer = styled.li`
padding-right: 20px;
color:#FEFBF6;
font-weight: 500;
`

const ContainerTrending = styled.div`
    width: 100%;
    height: 250px;
`
    

const ContainerTextTrending = styled.div`
margin-top:20px;
`
const TextTrending = styled.h1`
color:#FEFBF6;
font-size:18px;

`
const ContainerMovieTrending = styled.div`
margin-top: 20px;
display:flex;
overflow-x: auto;
&::-webkit-scrollbar {
        width: 1px;
        height: 3px;
        border: 1px solid ;
        padding-top:20px;
        background-color:red;
    }

`
const ContainerText = styled.div`
    width:80%;
    margin: 10px auto;
    height: 20px;
`
const TextMessage = styled.h2`
text-align: center;
font-size : 18px;

color:white;
`
const ContainerRate = styled.div`
width:100%;
margin-top:100px;
height: 200px;

`