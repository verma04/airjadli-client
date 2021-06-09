import React from 'react';
import { Section } from './Style'
import Image from 'next/image'
function Fact() {
    return (
        <Section>
           <div class="flex-1" >
       
               <div className="logo" >

               <Image
              className="myImage"
        src="https://res.cloudinary.com/airjaldi/image/upload/v1622725388/payment-1_rtkf5v.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
                   {/* <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613366992/AirJaldi/qltmiitz4diabtpiko5k.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
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
