import React, { useState } from 'react'
import './Body.css'
import { CgSearch } from 'react-icons/cg'
export default function Body() {
    const [inputVal, setInputVal] = useState("");
    const [result,setResult] = useState(null);
    const search = async()=>{
      try {
            const res = await fetch(`http://localhost:3000/${inputVal}`);
            const data = await res.json();
           
           setResult(data);
           console.log(result);
        } catch (error) {
            console.log( {
                error:error
            });
        }
    }
    if (result){
        return (
            <div>
                {result.organic_results.map((item)=>{
                    return (
                        <li>
                            <a href={item['displayed_link']}></a>
                            {item['title']}
                            </li>
                    );
                })}
            </div>
        );
    }else{

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
}
