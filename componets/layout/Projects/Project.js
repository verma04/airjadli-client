import Head from 'next/head';
import Navbar from '../Navbar/BlueNavbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import styled, { createGlobalStyle } from 'styled-components';

import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
      <Navbar/>
    <div class="grid"    >
   
      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>WHO WE ARE</h2>
     <p>AirJaldi, a Class A ISP (Pan-India), is a
leading innovator and implementer of
technically and economically viable
Internet connectivity solutions for rural
areas ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span>  See our company profile </span> </div>
   </div>
  </div>
  <div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
<Image
           className="myImage"
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
     alt="Picture of the author"
     layout="fill"
     objectFit="cover"
   />
</div>

<div className="data" >
  <div className="head" ><h2>WHAT WE DO</h2></div>
  
  <p>We provide high-quality broadband
connectivity In eight Indian states. We
connect large and small clients from
the corporate, civil society and private
sectors ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
<span>  More about our networks </span> </div>
</div>
</div>


<div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>GET CONNECTED</h2>
     <p>With custom-made solutions for your
home and office and our wifi hotspots
all over India you are always connected.
Our service-team is ready respond to ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span> To our products and deals </span> </div>
   </div>
  </div>
 
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>WHO WE ARE</h2>
     <p>AirJaldi, a Class A ISP (Pan-India), is a
leading innovator and implementer of
technically and economically viable
Internet connectivity solutions for rural
areas ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span>  See our company profile </span> </div>
   </div>
  </div>
  <div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
<Image
           className="myImage"
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
     alt="Picture of the author"
     layout="fill"
     objectFit="cover"
   />
</div>

<div className="data" >
  <div className="head" ><h2>WHAT WE DO</h2></div>
  
  <p>We provide high-quality broadband
connectivity In eight Indian states. We
connect large and small clients from
the corporate, civil society and private
sectors ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
<span>  More about our networks </span> </div>
</div>
</div>


<div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>GET CONNECTED</h2>
     <p>With custom-made solutions for your
home and office and our wifi hotspots
all over India you are always connected.
Our service-team is ready respond to ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span> To our products and deals </span> </div>
   </div>
  </div>
 
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>WHO WE ARE</h2>
     <p>AirJaldi, a Class A ISP (Pan-India), is a
leading innovator and implementer of
technically and economically viable
Internet connectivity solutions for rural
areas ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span>  See our company profile </span> </div>
   </div>
  </div>
  <div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
<Image
           className="myImage"
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
     alt="Picture of the author"
     layout="fill"
     objectFit="cover"
   />
</div>

<div className="data" >
  <div className="head" ><h2>WHAT WE DO</h2></div>
  
  <p>We provide high-quality broadband
connectivity In eight Indian states. We
connect large and small clients from
the corporate, civil society and private
sectors ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
<span>  More about our networks </span> </div>
</div>
</div>


<div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>GET CONNECTED</h2>
     <p>With custom-made solutions for your
home and office and our wifi hotspots
all over India you are always connected.
Our service-team is ready respond to ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span> To our products and deals </span> </div>
   </div>
  </div>
 
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>WHO WE ARE</h2>
     <p>AirJaldi, a Class A ISP (Pan-India), is a
leading innovator and implementer of
technically and economically viable
Internet connectivity solutions for rural
areas ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span>  See our company profile </span> </div>
   </div>
  </div>
  <div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
<Image
           className="myImage"
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
     alt="Picture of the author"
     layout="fill"
     objectFit="cover"
   />
</div>

<div className="data" >
  <div className="head" ><h2>WHAT WE DO</h2></div>
  
  <p>We provide high-quality broadband
connectivity In eight Indian states. We
connect large and small clients from
the corporate, civil society and private
sectors ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
<span>  More about our networks </span> </div>
</div>
</div>


<div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>GET CONNECTED</h2>
     <p>With custom-made solutions for your
home and office and our wifi hotspots
all over India you are always connected.
Our service-team is ready respond to ...</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span> To our products and deals </span> </div>
   </div>
  </div>
 


</div>
</div>
    </div>



      </Section>
     
      
       
      <Footer/>
    
    </>
  );
}