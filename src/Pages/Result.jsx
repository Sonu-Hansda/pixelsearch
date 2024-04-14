import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function ReasultPage() {
    let { query } = useParams();
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState();
    const [images,setImages] = useState();
    const getResult = async () => {
        try {
            setLoading(true);
        
            const webres = await fetch(`http://localhost:3000/${query}`);
            const imgres = await fetch(`http://localhost:3000/image/${query}`);
            const webdata = await webres.json();
            const imgdata = await imgres.json();
            setResult(webdata);
            setImages(imgdata);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log({
                error: error
            });
        }
    }

    useEffect(() => {
        getResult();
    }, []);
    return (<>
                
            <div className='mt-4 px-12 mb-4 text-xl flex'>
                <h1 className='bg-gray-600 text-white p-2'>Pixel</h1>
                <h1 className='p-2 bg-white border'>
                    Search
                </h1></div>
            <h1 className='px-12'>You have searched for : <span className='font-semibold'>{query}</span></h1>
        <div className='p-12 flex flex-col md:flex-row gap-x-2'>
            <div>
            <ul className='border-t mx-auto list-none pt-6'>
                {!loading ? (
                    result.organic_results.map((item) => {
                        return (
                            <li className=' pb-1 mb-8 border-b '>
                                <div className='flex items-center gap-x-2'>
                                <img className='w-4 h-4' src={item['favicon']}/>
                                <a className='hover:underline text-blue-800' href={item['displayed_link']}>

                                    {item['title']}
                                </a>
                                </div>
                                <p className='text-xs'>{item['snippet']}</p>
                            </li>
                        );
                    })
                ) : (
                    <p>Loading ....</p>
                )}
            </ul>
            <div>

            </div>
            </div>
            <div>
                <ul className='grid grid-cols-4 md:grid-cols-3 md:gap-2'>

            {!loading ? (
                images.images_results.slice(0,18).map((item) => {
                    return (
                        <li className='bg-white border'>
                                <img className='h-24 w-24 object-contain' src={item['thumbnail']} alt="" />           
                            </li>
                        );
                    })
                ) : (
                    <p></p>
                )}
                </ul>
            </div>
        </div>
        </>
    )
}
