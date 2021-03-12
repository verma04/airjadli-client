import Head from 'next/head';
import Navbar from '../Navbar/BlueNavbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import styled, { createGlobalStyle } from 'styled-components';
import Team from './Team/Team'
import Image from 'next/image';



export default function Home() {
  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
      <Navbar/>
    <div class="grid"     >
    <Image
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190589/AirJaldi/ckoxveih6huqgv23ekoq.jpg'
        alt="Picture of the author"
        layout="fill"
       
        objectFit="cover"
      />
      <div className="bird" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1614316862/AirJaldi/equahrzbvek5odolroqe.png'} ></img>
   </div>

      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

  <h1>
  The AirJaldi Team Ulpa natiatur, cor re
quia comnimusam evel et rum aritate
mint latesti onsecat ut volore.
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>


      </Section>
     
     <Team/>
    
      
       
      <Footer/>
    
    </>
  );
}