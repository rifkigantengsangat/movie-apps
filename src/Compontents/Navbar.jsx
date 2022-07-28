import React,{useEffect,useState,useMemo, useCallback} from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import {auth} from '../Firebase'
import { getAuth,signInWithRedirect ,GoogleAuthProvider,onAuthStateChanged,signOut  } from 'firebase/auth'
import {getData,getDataSuccess,getDataFailure} from '../Features/Data/dataSlice'
import {login,logOut} from '../Features/Login/loginSlice'
import {GrLogin} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {AiFillHome,AiOutlineCompass,AiFillClockCircle,AiFillStar} from 'react-icons/ai'
import { MdFavorite} from 'react-icons/md'
import {BsBookmarkDash} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'
const Navbar = () => {
    const [loading,setLoading] =useState(false)
   
    const provider = new GoogleAuthProvider()
    const globalState = useSelector((state)=> state)
    const [data,setData] = useState([])
    const {isLogin,users} = globalState.user
    const {favorite} = globalState.favorite
    
  const dispatch = useDispatch() 
  const signInWithGoogle =async ()=>{
  
   await signInWithRedirect (auth,provider)
  }
 
  const logout =async()=>{
   const data =  await signOut(auth)
   dispatch(logOut(data))
   setLoading(true)
   
  }

 const iconData = (types)=>{
  if(types === 'MdFavorite'){
     return <p style={{ color:'red' }}>{data.length} </p>

  }
 }
  useEffect(()=>{
    const ubah = onAuthStateChanged(auth,(user)=>{
      dispatch(login(user))
    })
    return ()=>{
      ubah()
    }
  },[loading,dispatch])

  const getLocalStorage = useCallback(()=>{
  const local = localStorage.getItem('fav')
  const parsed = JSON.parse(local)
  setData(parsed)
  },[])
useEffect(() => {

  getLocalStorage()
}, [])

  
  const dataMenu = [{
    id:1,
    nama: 'Home',
    icon : <AiFillHome/>

  },
  {
    id:2,
    nama:"Discovery",
    icon : <AiOutlineCompass/>
  },
  {
    id:3,
    nama:"Favorite",
    icon : <MdFavorite/>
  }

]
const libraryMenu = [
  {
    id:1,
    nama:'Recent',
    icon:<AiFillClockCircle/>
  },
  {
    id:2,
     nama:'BookMarked',
     icon:<BsBookmarkDash/>

  },
  {
    id:3,
    nama:"Top Rated",
    icon:<AiFillStar/>
  }
]
     return (
  <Container>
  <MenuContainer>
   <MenuJudul>
  <Judul>MENU</Judul>
  <MenuListContainer>
   {dataMenu.map((e)=>{
    return(  
  <ListMenu key={e.id} >
  <IconsContainer>
  <ContainerMenuList>
    <Nama>{e.icon}</Nama>
  {(e)=>iconData(e.icon.type.name)}
  </ContainerMenuList>
  <NamaContainer>
    <NamaList>{e.nama}</NamaList>
  </NamaContainer>
  </IconsContainer>
  </ListMenu>
    )
   })}
  </MenuListContainer>
   </MenuJudul>
  </MenuContainer>
  <Garis></Garis>
  <ContainerLibrary>
   <JudulLibrary>
  <JudulLib>LIBRARY</JudulLib>
  <LibraryContainer>
 {libraryMenu.map((e)=>{
  return(
  <ListLibrary key={e.id}>
<DataLibContainer>
<ContainerLibName>
 <Nama>{e.icon}</Nama>
</ContainerLibName>
<ContainerLibIcon>
<NamaList>{e.nama}</NamaList>
</ContainerLibIcon>
</DataLibContainer>
  </ListLibrary>
  )
 })}
  </LibraryContainer>
   </JudulLibrary>
  </ContainerLibrary>
  <Garis></Garis>
  <ContainerLogin>
<ContainerLogout>
<ContainerIconsLogin>
<Nama><FiLogIn/></Nama>
</ContainerIconsLogin>
<ContainerNameLogin>
  {!users?<ButtonLogin onClick={()=>signInWithGoogle()}>Login</ButtonLogin> : <ButtonLogout onClick={()=>logout()}>Logout</ButtonLogout>}
</ContainerNameLogin>
</ContainerLogout>
  </ContainerLogin>

  </Container>

  )
}

export default Navbar
const Container = styled.div`
width:100%;
height: 100vh;
background-color:rgba(26,23,30,255);
flex-basis:15%;
`
const MenuContainer= styled.div`
display: inline-block;
margin-top:40px;
width:100%;
height:200px;

`
const MenuJudul = styled.div`
padding-left:10px;

`
const Judul = styled.h2`
color:#6e7176;
font-size:14px;
font-weight: 400;
`
const MenuListContainer = styled.div`
padding-top:12px;
padding-left: 20px;

`
const ListMenu = styled.div`
    
`
const IconsContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;

`
const ContainerMenuList = styled.div`
  padding:10px 0px;
  color:#6e7176;

`
const Nama = styled.h2`
  font-size:20px;
`
const NamaContainer = styled.div`
  margin-left:10px
`
const NamaList = styled.h2`
  font-size:13px;
  color:#6e7176;
`
const Garis = styled.div`
width:80%;
margin:auto;
height:1px;
background-color:#6e7176;
  
`
const ContainerLibrary = styled.div`
display: inline-block;
margin-top:30px;
width:100%;
height:200px;
`
const JudulLibrary = styled.div`
padding-left:10px;
`
const JudulLib = styled.h2`
  color:#6e7176;
  font-size:14px;
  font-weight: 400;
`
const LibraryContainer = styled.div`
padding-top:12px;
padding-left: 20px;
`
const ListLibrary = styled.div`
  
`
const DataLibContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items:center;
`
const ContainerLibName = styled.div`
padding:10px 0;
color:#6e7176;
`
const ContainerLibIcon = styled.div`
 font-size:13px;
 margin-left:10px;
`
const ContainerLogin = styled.div`
display: inline-block;
margin-top:40px;
width:100%;
`
const ContainerLogout = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
`
const ContainerIconsLogin = styled.div`
padding:0px 20px;
color:#6e7176;
`
const ContainerNameLogin = styled.div`

`
const ButtonLogin = styled.button`
cursor:pointer;
background-color:#76BA99;
padding:10px 20px;
border-radius:20px;
`
const ButtonLogout = styled.button`
cursor:pointer;
background-color:red;
padding:10px 20px;
border-radius:20px;
color:white;
`