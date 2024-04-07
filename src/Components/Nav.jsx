import React from 'react'
import './Nav.css'
import { MdOutlineDarkMode } from "react-icons/md";
export default function Nav() {
    return (
        <div className='top_bar'>
            <div>Pixel Search</div>
            <div><MdOutlineDarkMode /></div>
        </div>
    )
}
