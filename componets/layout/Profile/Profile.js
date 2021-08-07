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
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';

export default function Home({data}) {
  
  return (
 <>
      <Head>
      <meta charset="UTF-8"/>

<title>Profile - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/profile" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Profile - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com//profile" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Profile - AirJaldi Networks" />

<meta property='og:description' content={data.profileDescription}/>
<meta name='description' content={data.profileDescription}/>
<meta name="og:title" content="Home"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/profile"/>
      
      
      </Head>
      <Section>
      <Navbar/>
    <div class="grid">
    <Image
              className="myImage"
        src={data.profileAvatar}
        alt="Picture of the author"
        layout="fill"
       
        objectFit="cover"
      />


<div className="birdOut" >
      <div className="birdd" > 
  <img  alt="Image Arrow" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
   </div>
         </div>
  
      <div class='card'  >
       

      <div class='card-1'  >
  <div class='grid1' >

  <h1>
 {data.profileDescription}
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     
     <About about={data.profileAboutus} />
     <Fact data={data}/>

     <History data={data.history}/>

     <Working data={data}/>
      
      
       
      <Footer/>
       
      </>
  );
}

