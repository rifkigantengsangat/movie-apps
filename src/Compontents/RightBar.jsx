import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import{BsSearch} from 'react-icons/bs'
import styled from 'styled-components'
import axios from 'axios'
import GenreListMovie from './GenreMovieList'
import Trending from './Trending'
const RightBar = () => {
  const user= useSelector((state)=> state.user)
  const dataUser =user.users
  const [search,setSearch] =useState('')
  const [message,setMessage] = useState(false)
  const [dataSearch,setDataSearch] =useState([])
 const  handleSubmit =async(e)=>{
  e.preventDefault()
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/search/movie`,{
    params:{
      api_key: import.meta.env.VITE_BASE_API_KEY,
      query:search
    }
  })
  setDataSearch(response.data.results)
  if(dataSearch.length===0){
    setMessage(true)
  }else{
    setMessage(false)
  }
 }

 const handleFormChange = (e)=>{
 setSearch(e.target.value)
 console.log(search)
 }
useEffect(()=>{

},[search,dataSearch])
  return (
    <Container>
      <ContainerUser>
   <ContainerImage>
  {!dataUser ? <img style={{width:'40px',borderRadius:'50%',}}src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'/>: <img style={{width:'40px',borderRadius:'50%',}} src={dataUser&&dataUser?.photoURL}/>}
   </ContainerImage>
   <ContainerName>
    <p style={{ color:'#FEFBF6',fontWeight:'600',fontSize:'14px' }}>{dataUser?.displayName}</p>
    <p style={{ fontSize:"9px",color:'#FEFBF6',paddingTop:'5px'}}>{dataUser?.email}</p>
   </ContainerName>
      </ContainerUser>
      <ContainerInput>
       <Form onSubmit={handleSubmit}>
        <BsSearch style={{ position:'absolute',color:'#FEFBF6',left:'5px',top:'10px', }}/>
       <InputSearch placeholder='search Movies....' onChange={(e)=>handleFormChange(e)}/>
       </Form>
      </ContainerInput>
      {message&&<h1>Tidak Ada Tujuan</h1>}
      <GenreListMovie/>
      <Trending/>
    </Container>
  )
}

export default RightBar
const Container = styled.div `
flex-basis:20%;
background-color:rgba(26,23,30,255);
padding-left:15px;
overflow-y:scroll;
&::-webkit-scrollbar {
        width: 1px;
        height: 3px;
        border: 1px solid ;
        padding-top:20px;
        background-color:red;
    }
`
const ContainerUser = styled.div`
  width: 100%;
  height:70px;
  display: flex ;
justify-content:flex-start;
  align-items:center;
`
const ContainerImage = styled.div`
  margin-right: 10px;
`
const ContainerName= styled.div`
`
const ContainerInput = styled.div`
width:80%;
position:relative;
margin:10px auto;
height: 40px;
`
const Form = styled.form`
padding-right: 20px;
`
const InputSearch = styled.input`
  background-color:#0D0D0F;
  width:100%;
  padding:9px 4px;
  border:none;
  border-radius:10px;
  color:#FEFBF6;
 
  ::placeholder,
  ::-webkit-input-placeholder {
   padding-left:25px;
  }
  :-ms-input-placeholder {
     
  }
`