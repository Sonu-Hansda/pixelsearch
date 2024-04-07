import React, { useState } from 'react'
import './Body.css'
import {searchWeb} from "../utilities/web_search";
import { CgSearch } from 'react-icons/cg'
export default function Body() {
    const [inputVal, setInputVal] = useState("");

    const search = async()=>{
        const api_key="b24e19d5721ad193443c4d48fbf23916bb97975f5afebb93b2c5bfae3aa60c06";
const base_url="https://serpapi.com/search.json";
        const url=`${base_url}?engine=google&q=${inputVal}&google_domain=google.com&gl=in&hl=en&api_key=${api_key}`
        try {
            const res = await fetch(url);
            // const data = await res.json();
            console.log(res);
            // console.log( {
            //     status:data['search_metadata']['status'] ?? 'processing',
            //     images_results:data["images_results"],
            //     pagination:{
            //         current:data['serpapi_pagination']['current'] ?? 0,
            //         next:data['serpapi_pagination']['next'],
            //         other_pages:data['serpapi_pagination']['other_pages'],
            //     }
            // });
        } catch (error) {
            console.log( {
                error:error
            });
        }
    }

    return (
        <div className='body'>
            <div className='web_name'><span style={{
                color:'white',
                backgroundColor: 'black',
                padding: '0 20px'
            }}>Pixel</span>Search</div>
            <div className='search_cont'>
                <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
                <button type='submit' onClick={search} ><CgSearch/></button>
            </div>
        </div>
    )
}
