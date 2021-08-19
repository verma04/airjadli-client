import React from 'react';
import { Section } from './Style'
import Image from 'next/image'
import Banner from './Banner'
import ReactPlayer from 'react-player'
import Imags from '../Image/Image'
function Fact({data}) {
    return (
        <Section>

                <Imags data={data}/>
           
                <div className="ved" > 

<div className="youtube" >

<ReactPlayer 
width='95%'
height='30rem'
url={data.Paymentyoutube} />





</div>



<div className="youtube" >

<ReactPlayer 
width='95%'
height='30rem'
url={data.Paymentyoutube2} />





</div>

</div>

           <div class="flex" >
           <div class="left" >
             <div className="head" >
                 <h2>{data.workhead1}</h2>
 <span> {data.workhead2} </span>
             </div>
             <div className="mid" >
              <li>
          <span>
            <i> 1. </i>   {data.work1head}

          </span>
             
              </li>
              <li>
             
              <i> 2. </i> 
              {data.work2head}


              </li>
              <li>
              <i> 3. </i> 
              {data.work3head}

              </li>

              <li>
              <i> 4. </i> 
              {data.work4head}
              </li>
             </div>
             <div className="bottom" >
                 <span>{data.workpara}</span>
             </div>
                </div>

               <div className="right" >
               <Image
              className="myImage"
        src={data.workAvatar}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
                   
                
                </div> 
               </div> 
    
        {/* <Banner  data={data}/> */}
        </Section>
    )
}

export default Fact
