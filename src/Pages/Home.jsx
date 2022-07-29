import React from 'react'
import Navbar from '../Compontents/Navbar'
import styled from 'styled-components'
import {useDispatch, useSelector}  from 'react-redux'
import Main from '../Compontents/Main'
import RightBar from '../Compontents/RightBar'

const Home = () => {
  const globalState = useSelector((state)=> state)
  const {isLogin,users} = globalState.user
  return (
   <>
    
     <Main/>
     </>
  
  )
}

export default Home

const Container = styled.div `
width:100%;
height:100vh;
display:flex;

`