import React from 'react'
import './Home.css'
import Nav from '../Components/Nav';
import Body from '../Components/Body';
export default function Home() {
  return (
    <div className='home_cont'>
      <Nav />
      <Body />
    </div>
  )
}