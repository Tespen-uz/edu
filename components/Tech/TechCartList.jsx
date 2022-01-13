import React from 'react'
import TechCard from './TechCard'
import Tech2 from '../../img/Tech2.jpg'

const TechInfo=[
    {
        id: 1,
        name: 'Leo Stephan',
        job: 'Academic',
        subject: 'Math',
        img: 'img',
    },
    {
        id: 2,
        name: 'John Doe',
        job: 'Businessman',
        subject: 'English',
        img: 'img',
    },
    {
        id: 3,
        name: 'Samia Morgan',
        job: 'Techer',
        subject: 'Biology',
        img: 'img',
    },
    {
        id: 4,
        name: 'Jesica Bell',
        job: 'Developer',
        subject: 'Frontend',
        img: 'img',
    },
    {
        id: 5,
        name: 'Micael',
        job: 'Backend Dev',
        subject: 'Php Node.js',
        img: 'img',
    },
    {
        id: 6,
        name: 'Tom Kruz',
        job: 'Actor',
        subject: 'main',
        img: 'img',
    }
]

function TechCartList() {
    console.log(TechInfo[0]);
    return (
        <div className='container mx-auto py-8 p-2  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {
                TechInfo.map(tech=>{
                    return(
                        <TechCard 
                          key={tech.id} 
                          img={tech.img} 
                          name={tech.name}
                          job={tech.job}
                          subject={tech.subject}
                        />
                    )
                })
            }
        </div>
    )
}

export default TechCartList