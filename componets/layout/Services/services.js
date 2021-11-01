import React , { useState} from 'react'

import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section } from './Style'
import NewsLetter from '../NewsLetter/News'
import Section1 from './Section/Section'

import { useQuery } from "react-query";
import Image from 'next/image';
import Loading from '../../Loading/Loading';



export default function Home({data}) {
  
  


  
  return (
  
    <>
 
      <Head>
      <meta charset="UTF-8"/>

<title>Services - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/services" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Services - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/services" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Services - AirJaldi Networks" />
<meta property='og:description' content={data.servicesDescription}/>
<meta name='description' content={data.servicesDescription}/>

<meta name="og:title" content="Services"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/services"/>
      
      </Head>
    
  
  
    
      <Section>
      <Navbar/>
    <div class="grid"    >

    <div className="bird" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1615558552/vise9qvuybx9ttqj17zy.svg'} ></img>
   </div>
    <Image
              className="myImage"
        src={ process.env.url+ data.servicesAvatar}
       
        layout="fill"
       
        objectFit="cover"
      />

      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

  <h1>
{data.servicesDescription}
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>


     
<Section1 ser={data} />
 
<NewsLetter/>
       
      <Footer/>
    
     
  </>
  );
}