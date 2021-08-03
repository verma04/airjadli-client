import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section } from './Style'
import NewsLetter from '../NewsLetter/News'
import Section1 from './Section/Section';
import Map from './Map/Map'

import Image from 'next/image';
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';


export default function Home({data1}) {
  
  
  return (
   
    <>
   <Head>
      <meta charset="UTF-8"/>

<title>Networks - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/networks" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Networks - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/networks" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Networks - AirJaldi Networks" />


<meta name="og:title" content="Networks"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/partnerships"/>
<meta property='og:description' content={data1.page.NetworkPageDescription}/>
<meta name='description' content={data1.page.NetworkPageDescription}/>
      </Head>
    
  
    
   
          <>
      
      <Section>
      <Navbar/>
    <div class="grid"    >
    <Image
              className="myImage"
        src={data1.page.NetworkPageAvatar}
       
        layout="fill"
       
        objectFit="cover"
      />
      
      <div className="birdOut" >
      <div className="birdd" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
   </div>
         </div>


      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

  <h1>
  {data1.page.NetworkPageDescription}
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     
<Section1 data1={data1.page} />


          <>
<Map  data={data1.list} />
 
 </>
    
    
       
      <Footer/>
    
      </>
      
  </>
  );
}