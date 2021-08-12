




import React from 'react';
import { Section } from './Style'
import Image from 'next/image'
function Fact({data}) {
    return (
        <Section>
           <div class="flex" >
           <div class="head" >
               <h1>The safer, easier way to pay your bills.</h1>
                </div>

               <div className="logo" >

                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src={data.icon1img}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>{data.icon1head}</h2>
  <span>{data.icon1para}</span>
                   </div>
                  
                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
              src={data.icon2img}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>{data.icon2head}</h2>
  <span>{data.icon2para}</span>
                   </div>
                
                

                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
              src={data.icon3img}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>{data.icon3head}</h2>
  <span>{data.icon3para}</span>
                   </div>
                
                
                   {/* <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613366992/AirJaldi/qltmiitz4diabtpiko5k.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>250,000+</h2>
  <span>Registered Users</span>
                   </div> */}

                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
              src={data.icon4img}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>{data.icon4head}</h2>
  <span>{data.icon4para}</span>
                   </div>
            
            
            
                   
             
                
                
                
                   {/* <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613366992/AirJaldi/qltmiitz4diabtpiko5k.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>250,000+</h2>
  <span>Registered Users</span>
                   </div> */}

             
            
                   </div> 
               </div> 
        </Section>
  
  
  
  )
}

export default Fact
