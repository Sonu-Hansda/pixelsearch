import React, { useState } from 'react'
import './Body.css'
import { CgSearch } from 'react-icons/cg'
export default function Body() {
    const [inputVal, setInputVal] = useState("");
    return (
        <div className='body'>
            <div className='web_name'><span style={{
                color:'white',
                backgroundColor: 'black',
                padding: '0 20px'
            }}>Pixel</span>Search</div>
            <div className='search_cont'>
                <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
                <button type='submit'><CgSearch/></button>
            </div>
        </div>
    )
}
