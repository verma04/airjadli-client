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
function privacyPolicy({data}) {
   
    return (
        <div>
            <Navbar/>

<Head>
            <meta charset="UTF-8"/>

<title>Privacy Policy - AirJaldi Networks</title>




<link rel="canonical" href="https://airjaldi.com/privacyPolicy/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Privacy Policy - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/privacyPolicy/" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Privacy Policy - AirJaldi Networks" />
</Head>
     
            <Section>
            <div  className="flex" >
             <div className="single-post">
            
            

            <div className="data"  dangerouslySetInnerHTML={convertFromJSONToHTML(data.privacyPolicy)} ></div>
        </div>
            
        </div>
            </Section>
            <Footer/>

          
            
        </div>
    )
}

export default privacyPolicy
