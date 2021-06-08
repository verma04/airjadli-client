import React from 'react';
import { Section } from './Style'
import Image from 'next/image'
function Fact() {
    return (
        <Section>
           <div class="flex" >
           <div class="head" >
               <h1>FACTS & FIGURES</h1>
                </div>

               <div className="logo" >

                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613366992/AirJaldi/iy44qpfeaoium4ejgsuw.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="fit"
      />
  </div>
  <h2>40 Networks</h2>
  <span>Operating in
9 Indian States</span>
                   </div>
                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613366992/AirJaldi/vu1r1krloemwladscg0m.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
  </div>
  <h2>80,000 km <sup>2</sup> </h2>
  <span>Combined Wireless
Coverage Area</span>
                   </div>
                

                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613366992/AirJaldi/qltmiitz4diabtpiko5k.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
  </div>
  <h2>200,000<sup>+ </sup> </h2>
  <span>Registered Users</span>
                   </div>
                
                
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

                   <div class='logo1' >
                  <div className="img" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613366992/AirJaldi/y53asfiviamltztybdgr.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
  </div>
  <h2>Internet Access</h2>
  <span>Internet Access Beneficiaries*</span>
                   </div>
            
            
            
                   </div> 
               </div> 
        </Section>
    )
}

export default Fact
