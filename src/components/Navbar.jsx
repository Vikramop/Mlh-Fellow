import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
   <Link to='/'>
   <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>myHos</h1>

   </Link>
    <div >
    <Link to='/Store'>
        <button className='bg-red-600 px-6 py-2 mx-4 rounded cursor-pointer text-white '>Store</button>
        </Link>
        <button className='text-white pr-4'>Sign In</button>
        
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign up</button>
        
    </div>

</div>
  )
}

export default Navbar;