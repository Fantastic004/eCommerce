import React from 'react'

const About:React.FC = () => {
  return (
    <div>
 <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rotate-45 rounded-md opacity-40" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-300 rotate-45 rounded-md opacity-30" />
      <div className="absolute bottom-16 left-1/2 w-8 h-8 bg-blue-400 rounded-full opacity-50" />  
      <div>
            <div className='absolute inset-0 bg-opacity-50 flex flex-col bottom-[200px] left-[100px] justify-center'>
                <h4 className='text-4xl text-blue-400 md:text-6xl font-bold mb-4'>ABOUT US</h4>
            </div>
        </div>
        <div className='mx-auto px-4 py-12 mr-10'>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-8'> 
                <div></div>
                <div className='flex flex-col justify-center '>
                    <h3 className='text-2xl font-semibold mb-4'>Who We Are</h3>
                <p className='mb-4'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nostrum! Quasi debitis velit aliquam culpa unde similique, illum minus cupiditate voluptate cumque labore atque eligendi? Ex, odit! Quidem, dolorum nam? consectetur, adipisicing elit. Perspiciatis, maiores!</p>
                 <h3 className='text-2xl font-semibold mb-4'>Our Mission</h3>
                 <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti deserunt soluta ipsum libero veritatis, inventore ex possimus pariatur doloribus voluptatum eligendi autem. Mollitia officiis ullam quae voluptates illo placeat.
                </p>
             </div>
        </div>
        </div>
        </div>
      
        </div>
  )
}

export default About