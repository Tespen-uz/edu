import React from 'react'
import Image from 'next/image'
import E1 from '../../img/e1.jpg'


function CourseCard({name, img, title, narh}) {
    return (
        <div className='flex mt-8 w-full flex-col  relative  rounded overflow-hidden  '>
            <div class=" h-[280px] overflow-hidden z-50 rounded transition-all hover:scale-105"
              style={{background: `url(${E1.src})`, backgroundSize: 'cover'}}
            >
                 
            </div>
            <div className='courseBtnBox w-10/12 mx-auto  p-4  bg-[#24A776] rounded '>
                <div className='text-justify overflow-hidden'>
                   <p className='text-base mt-2 text-gray-100'>{title}</p>
                   
                </div>
                <div className='mt-4 bg-white py-2 rounded cursor-pointer '>
                    <p className='text-xl text-center capitalize font-bold text-gray-700'>{name}</p>
                    
                </div>
            </div>
            
        </div>
    )
}

export default CourseCard
