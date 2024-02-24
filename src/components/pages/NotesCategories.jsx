import React from 'react'
import {Link} from 'react-router-dom'

export default function 
() {
  return (
    <div className='md:grid md:grid-cols-4 py-3 w-screen bg-lime-200 text-center grid grid-cols-2 gap-2 underline'>
        <div>
            <Link to="">Biology notes</Link>
        </div>
        <div>
            <Link to="">Pharmacy notes</Link>
        </div>
        <div>
            <Link to="">bsc notes</Link>
        </div>
        <div>
            <Link to="">Medical notes</Link>
        </div>
    </div>
  )
}
