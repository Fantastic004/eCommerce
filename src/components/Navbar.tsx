import React from 'react'

const Navbar:React.FC= () => {
  return (
    <div>
        <div className='flex justify-between text-lg text-blue-400 font-semibold  p-5 shadow-2xl'> 
        <div className="heading ml-9 text-2xl">
            <h1>FAB4</h1>
        </div>
        <div>
            <ul className='flex gap-10'>
                <li className='cursor-pointer hover:text-blue-600'>Home</li>
                <li className='cursor-pointer hover:text-blue-600'>Products</li>
                <li className='cursor-pointer hover:text-blue-600'>About</li>
                <li className='cursor-pointer hover:text-blue-600'>Contact</li>
            </ul>
        </div>
        <div className='mr-10 cursor-pointer hover:text-blue-600'>
            <ul>
                <li>Login</li>
            </ul>
        </div>
        </div>
       
    </div>
  )
}

export default Navbar