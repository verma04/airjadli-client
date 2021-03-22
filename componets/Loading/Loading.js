
import React from 'react'
import { Section} from './Style';
import Navbar from '../layout/Navbar/BlueNavbar'
export default function Loading() {
    const months = ["In every walk with nature one receives far more than he seeks. - John Muir",
     "Between every two pines there is a doorway to a new world. - John Muir",
      " Hike more, worry less. "
     , "You need mountains, long staircases don’t make good hikers. - Amit Kalantri ", 
     "A night on the mountain is better than a thousand nights in the city because you meet the universe on the mountain!  - Mehmet Murat İldan ", 
     " Once a year, go someplace you’ve never been before. - Dalai Lama     ",
      "A mind that is stretched by a new experience can never go back to its dimensions. - Oliver   ,            Wendall Holmes",
      "Wherever you go, go with all your heart. - Confucius",
      "Life is short and the world is wide. ",
      'The world is a book and those who do not travel read only one page. - Augustine of hippo'

    ];

    const random = Math.floor(Math.random() * months.length);
   

    return (
        <>
         <Navbar/>
        <Section>
           
            <div className='flex' >
                <div className="img" >
                    <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1615374820/AirJaldi/ptmkbvotrsinyjjzcqdy.png" ></img>
                </div>
                <div className='text' >
           { (random, months[random])}
           </div>
           <div className='spinner' >
               <img src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1610968677/pnawdrirgbwerhgt1fkx.gif' ></img>
           </div>
           </div>
        </Section>
        </>
    )
}