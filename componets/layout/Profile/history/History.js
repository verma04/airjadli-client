import React from 'react';
import { Section } from './Style'
import Image from 'next/image'
function History({data}) {
    return (
        <Section>
           <div class="flex" >
        <div class='flex-1' > 
        <Image
              className="myImage"
        src={`${process.env.url}/twoma15cgblrrohtpa61.jpg`}
        alt="Picture of the author"
        layout="fill"
        objectFit="fit"
      />
        </div> 
        <div class='flex-2' > 
        <div className='head' >
          <h2>HISTORY</h2>
        </div>

        <div className='data' >
        {data.map(number =>
         
              <div className='data1' >
              <div className="left" >{number.head}</div>
            <p>{number.para} </p>
           
                       </div>
            )

          }

         
              
          
          
          
            </div>
        
        
        </div> 
        </div>
       
       
       
        </Section>
    )
}

export default History
