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

    <div class="grid"   style={{ position: 'relative', height: '40rem' }}  >
    <Image
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190589/AirJaldi/d5dh4w88gjluwrjacv6o.jpg'
        alt="Picture of the author"
        layout="fill"
       
        objectFit="cover"
      />

      <div class='card'  >
      <div class='card-1'  >
  <div class='head' >
<h2>WHY WORK WITH US</h2>

   
  </div>
  <div class='grid1' >
<h2>SERVICE</h2>
<p>A dedicated 24/7 customer care ready respond to queries, questions and issues, ensu-
ring that your experience with us is satisfactory.</p>
   
  </div>
  <div class='grid1' >
<h2>CONNECTIVITY</h2>

<p>We provide multiple connectivity packages aimed at catering to different needs.</p>

   
  </div>
  <div class='grid1' >
<h2>TECHNICAL SUPPORT</h2>
<p>Wherever we work, our team is close at hand to help physically address any issues and
offer you relevant products and services.</p>

   
  </div>
  <div class='grid1' >
<h2>CREATIVE SOLUTIONS</h2>
<p>Every client and location have their own challenges and opportunities. We will provide
you solution for both, based on our experience, knowledge and technical partnerships</p>

   
  </div>
  
 



 


</div>
</div>
    </div>



      </Section>
   


      
       

    
    </>
  );
}