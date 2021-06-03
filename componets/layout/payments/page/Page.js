import React from 'react';
import { Section } from './Style'
import Image from 'next/image'
import Banner from './Banner'
function Fact() {
    return (
        <Section>
           <div class="flex" >
           <div class="left" >
             <div className="head" >
                 <h2>How Online Payments Work </h2>
 <span> It's an easier, faster and safer way to pay online and on your mobile </span>
             </div>
             <div className="mid" >
              <li>
          <span>
            <i> 1. </i>   Sign in
It's easy and only takes a few seconds

          </span>
             
              </li>
              <li>
             
              <i> 2. </i> 
       
          Select the bill for which you want to pay
You have a list of all your connections, bills & Status


              </li>
              <li>
              <i> 3. </i> 
          Pick your choice of payment option
Credit/Debit Cards, Internet Banking, UPI etc.


              </li>

              <li>
              <i> 4. </i> 
          
Receive email receipt of your payment made
Airjaldi will send you the status emails for your reference
              </li>
             </div>
             <div className="bottom" >
                 <span>This is only for representational purpose. The actual sign up requires you to provide other</span>
             </div>
                </div>

               <div className="right" >
               <Image
              className="myImage"
        src="https://res.cloudinary.com/airjaldi/image/upload/v1622693959/mobile-screen-1_muudrp.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
                   
                
                </div> 
               </div> 
        
        <Banner/>
        </Section>
    )
}

export default Fact
