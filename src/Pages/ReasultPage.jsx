import React, { useState } from 'react'
import Nav from '../Components/Nav'
import './ReasultPage.css'
import { BiSearch } from 'react-icons/bi'
import { IoImage } from 'react-icons/io5'
export default function ReasultPage() {
    const [mode, setMode] = useState('link');
    return (
        <div>
            <Nav />
            <div className='top_bar_menu'>
                <div style={{ color: `${mode == 'link' ? 'rgb(254, 53, 86)' : 'black'}` }} onClick={() => setMode('link')}>
                    <BiSearch />&nbsp;Search
                </div>
                <div style={{ color: `${mode == 'image' ? 'rgb(254, 53, 86)' : 'black'}` }} onClick={() => setMode('image')}>
                    <IoImage />&nbsp;images
                </div>
            </div>
            <div className='result'>
                {mode == 'link' && <div className='link'>link sectionn</div>}
                {mode == 'image' && <div className='img'>image section</div>}
                
            </div>
        </div>
    )
}
