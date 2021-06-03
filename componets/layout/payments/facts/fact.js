import React from 'react';
import { Section } from './Style'
import Image from 'next/image'
function Fact() {
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
        src="https://res.cloudinary.com/airjaldi/image/upload/v1622632139/4-icon_xlemgi.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>Pick your choice of payment option</h2>
  <span>We support various payment
options like credit card, debit card,
internet banking, gpay, paytm, UPI
payments and bank transfer.</span>
                   </div>
                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/airjaldi/image/upload/v1622632139/2-icon_z3fq3h.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>Online Payments for paying
bills from anywhere </h2>
  <span>Now you can make your bill
payment from anywhere in the
world with Airjaldi online payment
portal</span>
                   </div>
                

                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/airjaldi/image/upload/v1622632139/3-icon_g0acfp.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>Your account login at Airjaldi
with all bills and details </h2>
  <span>You have your unique account login
at Airjaldi portal to manage your
bills and payments and their status
all at one place</span>
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
        src="https://res.cloudinary.com/airjaldi/image/upload/v1622632139/1-icon_d2govv.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
  </div>
  <h2>Secure Online Payments with
Airjaldi</h2>
  <span>Making online bill payments here is
safe and secure. The payment
information is encrypted to high
standards and make it safe</span>
                   </div>
            
            
            
                   </div> 
               </div> 
        </Section>
    )
}

export default Fact
