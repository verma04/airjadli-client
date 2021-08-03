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
const networks = async () => {
  const res = await fetch("http://sandbox.airjaldi.com:3000/api/client/network");
  return res.json();
};

export default function Home({data1}) {
  const { data, status } = useQuery("networks", networks);
  
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
<meta property='og:description' content={data.NetworkPageDescription}/>
<meta name='description' content={data.NetworkPageDescription}/>
      </Head>
    
  
    
   
          <>
      
      <Section>
      <Navbar/>
    <div class="grid"    >
    <Image
              className="myImage"
        src={data1.NetworkPageAvatar}
       
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
  {data1.NetworkPageDescription}
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     
<Section1 data1={data1} />

{status  === "loading" && 
<p></p>
      }
      {status  === "success" && (
          <>
<Map  data={data} />
 
 </>
      )}
    
       
      <Footer/>
    
      </>
      
  </>
  );
}