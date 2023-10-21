import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import { SliderData } from './images/Top Header/sliderData'
import Post from './Components/Post/Post'
import Latest from './Components/latest/latest'
import Random from './Components/Random/Random'
import Popular from './Components/Popular/Popular'
import Insta from './Components/Insta/Insta'
import Subscription from './Components/Subscription/Subscription'
import Profile from './Components/Profile/Profile'
import Top_Header from './Components/Top_Header/Top_Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Top_Header></Top_Header>
       <Header slides={SliderData}></Header>
       <Post></Post>
       <Latest></Latest>
       <Popular></Popular>
       <Profile></Profile>
       <Random></Random>
       <Insta></Insta>
       <Subscription></Subscription>
       </>

  )
}

export default App
