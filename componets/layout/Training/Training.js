import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section } from './Style'
import NewsLetter from '../NewsLetter/News'
import Section1 from './Section/Section'

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
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190579/AirJaldi/jjjcclcaox85o1dyr8ss.jpg'
       
        layout="fill"
       
        objectFit="cover"
      />

      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

  <h1>
  Anduntias experat. Millabor rem et re
nost, aceperuptam apere quis doluptur,
odissunt, quo oditiore elibus esent rem.
Ut et, cupis exerciisquo videseque nis est
que sunto occuptatur sita volut volo
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     
<Section1/>
 
      <NewsLetter/>
       
      <Footer/>
    
    </>
  );
}