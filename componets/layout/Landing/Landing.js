
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import Head from 'next/head'
import { useRouter } from "next/router";
import News from '../NewsLetter/News'
import Image from 'next/image'
import Connection from './Connection/connection';
import Project from './Project/Project'

import FieldNews from './FieldNews/FieldNews'
import InNews from './News/inNews'
import Map from './Map/Map'
import Partner from '../partners/partner'
import { useQuery } from "react-query";

import Loading from '../../Loading/Loading';


export default function Home({data}) {

  const router = useRouter();
  return (
    <>
  
      
      <Head>
      <meta charset="UTF-8"/>

<title>Home - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />

<meta property="og:title" content="Home - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Home - AirJaldi Networks" />
<meta property='og:description' content='AirJaldi, the brand name used by Rural Broadband Pvt. Ltd., a class A Internet Service Provider, provides high-quality broadband connectivity to rural areas ...'/>
<meta name='description' content='AirJaldi, the brand name used by Rural Broadband Pvt. Ltd., a class A Internet Service Provider, provides high-quality broadband connectivity to rural areas ...'/>

<meta name="og:title" content="Home"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/"/>
      </Head>
      <Section>
      <Navbar/>
    <div class="grid"  >

      <div className="birdOut" >
      <div className="birdd" > 
  <img alt="Image Arrow" src={'https://admin.airjaldi.com/static/q7knrij3epaxvb6i1u1p.png'} ></img>
   </div>
         </div>
   
    
    <Image
              className="myImage"
        src={data.landingAvatar}
        alt="Landing Image"
        layout="fill"
       
        objectFit="cover"
      />
 {/* <div className="bird" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
   </div> */}
      <div class='card'  >

     
      <div class='card-1'  >

        {data.heroSection.map((number) =>

<div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
<Image
           className="myImage"
     src={number.sectionAvatar}
     alt="Cover"
     layout="fill"
     objectFit="cover"
   />
</div>

<div className="data" >
<div className="head" >   <h2>{number.sectionHead}</h2> </div>
  <p>{number.sectionDes}
</p>
<div className='link' >
<img alt="Image Arrow" src="https://admin.airjaldi.com/static/kks3py9aencqms2riscm.png"></img>
<span  onClick={() => router.push(`/${number.link}`)} > {number.sectionLink}</span> </div>
</div>
</div>


        )}
 

</div>
</div>
    </div>
   

<div class="grid-1"  >
      
   
      <div class='card'  >
      <div class='card-1'  >
      {data.heroSection.map((number) =>
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src={number.sectionAvatar}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>{number.sectionHead}</h2>
     <p>{number.sectionDes} ...   </p>
<div className='link' >
<img  alt="Image Arrow"  src="https://admin.airjaldi.com/static/kks3py9aencqms2riscm.png"></img>
 <span onClick={() => router.push(`/${number.link}`)}  >  {number.sectionLink}</span> </div>
   </div>
  </div>
 
      )}
</div>
</div>
    </div>




      </Section>
      <Map data={data}/>

      <Connection/>
      <Project data={data} />
      <News/>

      
      <InNews  />
      <FieldNews/>
      {/* <Partner data={data.partners} /> */}
      
       
      <Footer  />
    
     
      
       
    
    
    </>
  );
}











