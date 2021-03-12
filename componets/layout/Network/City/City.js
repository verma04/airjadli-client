import React from 'react';
import Navbar from '../../Navbar/BlueNavbar';
import Footer from '../../Footer/Footer';
import { Section} from './Style'
import Image from 'next/image';
import Map from './Map/Map';
import Team from './Team/Team'
function City({id}) {
    return (
        <div>
             <Navbar/>
             <Section>
              <div className="flex" >
              <div className="flex-1" >

                  <div className="head" >
              <h1>{id}</h1>    
                  </div>


                  <div className="data" >
                      <ul>
                          <li>Technical Contact:</li>
                          <li>Network Head: Amit Padokar</li>
                          <li>
Telephone: 9075831181</li>
                          <li>Email: <span>support@airjaldi.net</span> </li>
                         


                      </ul>
                      <ul>
                          <li>Office Address:</li>
                          <li>Rural Broadband Pvt. Ltd. (AirJaldi)</li>
                          <li>Near Grampanchayt</li>
                          <li>Office 1st floor,</li>
                          <li>Tehsil- Dharni, Harisal</li>
                          <li>Distt -Amravati</li>
                         <li>Pin – 444813</li>
                         <li>State- Maharashtra</li>
                          
                      </ul>

                    











                      
                  </div>
                  
                  </div>
                  <div className="flex-2" >
                  <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190580/AirJaldi/vg6y1smh6x3xdoeq0ifu.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
        
      />  
                  </div>
              </div>
            </Section>
         <Map/>
         <Team id={id} />
            <Footer/>
        </div>
    )
}

export default City
