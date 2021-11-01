import React from 'react';
import { Section } from './Style'
import Image from 'next/image'
import { Router, useRouter } from "next/router";
function Map({data}) {
    const router = useRouter();
    return (
        <div>
            <Section>
            <div className="head" >
          <h1>{data.sectionMapHead}</h1>
          <p>{data.sectionMapPara}</p>
          </div>
                <div class="flex" >

          
                   
                <div class="flex-1" >
 <p>{data.SectionNetwork}.</p>
<div className='link' >
<img src="https://admin.airjaldi.com/static/kks3py9aencqms2riscm.png"></img>
 <span onClick={() => router.push(`/networks`) } > {data.SectionNetworkLink}</span> </div>
                    
</div>
<div class="flex-2" >

<img
              className="myImage"
        src={`${process.env.url}/airjaldi-map_a4irz3.png`}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
        
      />        

      {/* <div class="point" ><i class="fas fa-circle-notch"></i> </div>     
      <div class="point1" > <i class="fas fa-circle-notch"></i></div>  
      <div class="point2" > <i class="fas fa-circle-notch"></i></div>  
      <div class="point3" > <i class="fas fa-circle-notch"></i></div>  
      <div class="point4" ><i class="fas fa-circle-notch"></i></div>        
      <div class="point5" ><i class="fas fa-circle-notch"></i></div>   
      <div class="point6" ><i class="fas fa-circle-notch"></i></div>   */}
</div>

                </div>
            </Section>
        </div>
    )
}

export default Map
