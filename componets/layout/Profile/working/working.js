import Head from 'next/head';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer'
import { Section} from './Style'
import styled, { createGlobalStyle } from 'styled-components';

import Image from 'next/image';



export default function Home() {
  return (
    <>
    
      <Section>

    <div class="grid" >
    <Image
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1618487935/fjlpllrerc2873pkifo6.jpg'
        alt="Picture of the author"
        layout="fill"
       
        objectFit="cover"
      />
       <div className="bird" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616736338/i4zzojgwybld0b5moqqq.png'} ></img>
   </div>

      <div class='card'  >
      <div class='card-1'  >
  <div class='head' >
<h2>WHY WORK WITH US</h2>

   
  </div>
  <div class='grid1' >
<h2>CONNECTIVITY</h2>

<p>We provide multiple connectivity packages aimed at catering to different needs.</p>

   
  </div>
  <div class='grid1' >
<h2>SERVICE</h2>
<p>We believe that a dedicated, honest service is essential for connectivity. Our field teams, our 24x7 customer care and our national support teams stand ready to respond  queries, address issues and needs , and ensure that your experience with us is satisfactory.</p>
   
  </div>
  
  <div class='grid1' >
<h2>CREATIVE SOLUTIONS</h2>
<p>Every customer, whichever their location, have their own needs, challenges and opportunities. Our proven, long-term operational experience, our reach and intimate knowledge of our domain and areas of work enable us to tailor connectivity and service solutions which are relevant to the needs and requirements of small and large customers.  </p>

   
  </div>
  <div class='grid1' >
<h2>Connectivity and beyond
</h2>
<p>Increasingly, customers are looking to harness connectivity as a means of enriching their lives, enhancing their livelihoods and supporting operations and data collection and analysis. 
AirJaldi has the required skills and systems to provide such “enabling services” to our customers and partners.  
During the last few years we developed and supported connectivity-related solutions in education, environmental and energy IoT, precision agriculture, rural financing, telemedicine and security. We will be happy to harness our knowledge to your needs and help you develop solutions to your own needs. 

</p>

   
  </div>
  
 



 


</div>
</div>
    </div>



      </Section>
   


      
       

    
    </>
  );
}