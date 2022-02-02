import React from 'react'
import CourseCard from './CourseCard'

const Fan=[
    {
        id: '1',
        name: 'English',
        img: 'ajdhasd',
        sum: '600 000',
        tech: 'Falonchi Pistonchi',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem alias necessitatibus vero dolore reiciendis, ex consectetur nihil, sed, molestias voluptatem porro animi facere. Fugit, necessitatibus quos.'
    },
    {
        id: '2',
        name: 'Deutch',
        img: 'ajdhasd',
        sum: '350 000',
        tech: 'Falonchi Pistonchi',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem alias necessitatibus vero dolore reiciendis, ex consectetur nihil, sed, molestias voluptatem porro animi facere. Fugit, necessitatibus quos.'
    },
    {
        id: '3',
        name: 'Chmistry',
        img: 'ajdhasd',
        sum: '200 000',
        tech: 'Falonchi Pistonchi',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem alias necessitatibus vero dolore reiciendis, ex consectetur nihil, sed, molestias voluptatem porro animi facere. Fugit, necessitatibus quos.'
    },
    {
        id: '4',
        name: 'Phisics',
        img: 'ajdhasd',
        sum: '300 000',
        tech: 'Falonchi Pistonchi',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem alias necessitatibus vero dolore reiciendis, ex consectetur nihil, sed, molestias voluptatem porro animi facere. Fugit, necessitatibus quos.'
    },
    {
        id: '5',
        name: 'Rus-tili',
        img: 'ajdhasd',
        sum: '450 000',
        tech: 'Falonchi Pistonchi',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem alias necessitatibus vero dolore reiciendis, ex consectetur nihil, sed, molestias voluptatem porro animi facere. Fugit, necessitatibus quos.'
    },
    {
        id: '6',
        name: 'Math',
        img: 'ajdhasd',
        sum: '250 000',
        tech: 'Falonchi Pistonchi',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem alias necessitatibus vero dolore reiciendis, ex consectetur nihil, sed, molestias voluptatem porro animi facere. Fugit, necessitatibus quos.'
    },
]

function CourseList() {
    return (
        <div>
            {
                Fan.map(item=>{
                    return(
                        <CourseCard
                          key={item.id}
                          name={item.name}
                          img={item.img}
                          sum={item.sum}
                          tech={item.tech}
                          text={item.text} 
                        />
                    )
                })
            }
            
        </div>
    )
}

export default CourseList
