import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import styled, { createGlobalStyle } from 'styled-components';
import About from './About/Aboutus'
import Image from 'next/image';
import Fact from './facts/fact'
import History from './history/History'
import Working from './working/working';
import Stat from './Stat/Stat'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
      <Navbar/>
    <div class="grid"    >
    <Image
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190590/AirJaldi/kbqhktvtedyumcpvapra.jpg'
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
  We envision a world where broadband
connectivity is readily available in rural
areas and transforms lives.
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     
     <About/>
     <Fact/>

     <History/>

     <Working/>
      
      <Stat/>
       
      <Footer/>
    
    </>
  );
}