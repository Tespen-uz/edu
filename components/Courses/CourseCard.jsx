import React from 'react'
import Image from 'next/image'
import CourseImg from '../../img/courseBook.jpg'

function CourseCard({name, img, sum, tech, text }) {
    return (
        <div className='mt-2 border-b-4'>
            <div className='container mx-auto py-8 items-center flex flex-col md:flex-row'>
                <div className='w-full p-4 md:w-6/12'>
                    <h1 className='text-3xl capitalize font-bold text-[#24A776]'><span className='text-xl font-medium text-gray-500 mr-2'>Fan:</span>{name}</h1>
                    <h1 className='text-2xl text-gray-800 mt-2 capitalize'><span className='text-xl text-gray-500 mr-2'>Teacher:</span>{tech}</h1>
                    <p className='text-xl mt-2 font-bold'><span className='text-gray-500 font-medium mr-2'>Narx: </span>{sum} sum</p>
                    <p className='text-gray-500 mt-2'>{text}</p>
                    <button className=' px-8 bg-cyan-500 rounded py-2 mt-4 text-white font-bold text-xl transition-all hover:scale-95'>Register</button>

                </div>
                <div className='w-full overflow-hidden p-2 mt-2 rounded-tl-full rounded-bl-full md:w-6/12' style={{background: 'linear-gradient(356deg, rgba(0,255,218,1) 29%, rgba(30,237,160,1) 63%)'}}>
                    <Image src={CourseImg} width={400} height={400} className='object-cover rounded-full transition-all hover:rotate-45'/>
                    

                </div>

            </div>
        </div>
    )
}

export default CourseCard
