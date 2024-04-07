import React from 'react'
import './Home.css'
import { MdOutlineDarkMode } from "react-icons/md";
export default function Home() {
  return (
    <div className='home_cont'>
      <div className='top_bar'>
        <div>Pixel Search</div>
        <div><MdOutlineDarkMode /></div>
      </div>
    </div>
  )
}