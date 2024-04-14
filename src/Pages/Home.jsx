import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  const [query, setQuery] = useState();
  return (
    <div className='flex flex-col items-center min-h-screen justify-center'>
      <div className='mb-8 text-5xl flex shadow-xl'>
        <h1 className='bg-gray-600 text-white p-4'>Pixel</h1>
        <h1 className='p-4 bg-white border'>
          Search
        </h1></div>
      <div className='mb-4'>
        <input className='rounded-full min-w-[50vw] outline-none border border-gray-500 px-8 py-4 focus:border-black mb-4' onChange={(e) => setQuery(e.target.value)} type="text" name="search" id="search" placeholder='Search here ...' required />

        <Link to={query && query.length > 0 ? `/search/${query}` : '#'} className={`block w-1/2 text-center mx-auto ${query && query.length > 0 ? 'bg-gray-600 hover:shadow-xl' : 'bg-gray-400'} py-4 text-white text-xl transition-all ease-linear duration-300`}>Search</Link>
      </div>
    </div>
  )
}