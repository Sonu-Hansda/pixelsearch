import React from 'react'
import Nav from '../Components/Nav'
import './ReasultPage.css'
import { BiSearch } from 'react-icons/bi'
import { IoImage } from 'react-icons/io5'
export default function ReasultPage() {
  return (
    <div>
      <Nav />
      <div className='top_bar_menu'>
        <div style={{color: "rgb(254, 53, 86)"}}>
            <BiSearch/>&nbsp;Search
        </div>
        <div>
            <IoImage/>&nbsp;images
        </div>
      </div>
    </div>
  )
}
