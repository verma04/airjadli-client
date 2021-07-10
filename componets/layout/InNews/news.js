import Head from 'next/head';
import Navbar from '../Navbar/BlueNavbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import moment from 'moment'
import { useEffect  , useState  } from 'react';
import ReadMoreReact from 'read-more-react';
import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useQuery } from "react-query";
import {FacebookShareButton, FacebookIcon , EmailShareButton, EmailIcon,   WhatsappIcon, WhatsappShareButton} from "react-share";

import Loading from '../../Loading/Loading'


export default function Home({data}) {
 
  const router = useRouter()
  return (
    <>
      <Head>
      <meta charset="UTF-8"/>

<title>News - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/news" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="News - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/news" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="News - AirJaldi Networks" />


<meta name="og:title" content="News"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/news"/>
      
      </Head>
    
     
     
   
     
      <Section>
      <Navbar/>
      <div class="grid"    >
   
   <div class='card'  >
   <div class='card-1'  >
   {data.map((number) =>  
   
<div  onClick={() => router.push(`/news/${number.slug}`) }  class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '13rem'}} >
{(() => {
     if (number.featureImg === "" ) {
       return (
         <Image
         className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        />
            
        
       )
     } 
       else { 
       return (
         <Image
         className="myImage"
        src={number.featureImg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        />
       )
       }
    
   })()}
    


</div>

<div className="data" >
 
 

  <h2>{number.title}</h2>
  <p>

 
  {number.newsDescription}
       
       
            
  </p>
  <div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span>  Learn more </span> </div>


{/* <span className='status' >{number.status} {moment(number.created).format("DD")} {moment(number.created).format("MMMM")} {moment(number.created).format("YYYY")}   </span> */}
</div>
</div>
   )}


</div>
</div>
 </div>


      </Section>
      <Footer/>
      </>
       
      
       
    
    
    
  );
}