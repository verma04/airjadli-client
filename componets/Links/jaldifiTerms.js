import React from 'react'
import Navbar from '../layout/Navbar/BlueNavbar'
import Footer from '../layout/Footer/Footer'
import  { Section  } from './Style'
import { useQuery } from "react-query";
import Loading from '../Loading/Loading';
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Head from 'next/head';


const convertFromJSONToHTML = (text) => {
    try{
        return { __html: stateToHTML(convertFromRaw(text))}
      } catch(exp) {
        console.log(exp)
        return { __html: 'Error' }
      }
}
function jaldifiTerms({data}) {
<Head>
  <meta charset="UTF-8"/>

  <title>JaldiFi Terms - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/jaldifiTerms" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="JaldiFi Terms - AirJaldi Networks" />
<meta property="og:description" content="Wireless Hotspot Terms and Conditions You can access the Internet through a wireless hotspot “Jaldifi” operated Rural Broadband Private Limited (“RBB”). RBB is a provider of free wireless Internet access and related services and features (the “Service”). The use of..." />
<meta property="og:url" content="https://airjaldi.com/jaldifiTerms" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="Wireless Hotspot Terms and Conditions You can access the Internet through a wireless hotspot “Jaldifi” operated Rural Broadband Private Limited (“RBB”). RBB is a provider of free wireless Internet access and related services and features (the “Service”). The use of..." />
<meta name="twitter:title" content="JaldiFi Terms - AirJaldi Networks" />
</Head>
    return (
        <div>
            <Navbar/>


      
  
     
            <Section>
            <div  className="flex" >
             <div className="single-post">
            
            

            <div className="data"  dangerouslySetInnerHTML={convertFromJSONToHTML(data.jaldifiTerms)} ></div>
        </div>
            
        </div>
            </Section>
            <Footer/>

          
            
        </div>
    )
}

export default jaldifiTerms
