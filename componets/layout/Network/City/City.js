import React, {useState, useEffect} from 'react'
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

import { Section} from './Style'
import Image from 'next/image';
import Map from './Map/Map';
import Head from 'next/head';
import Team from './Team/Team'
import  Footer from '@/componets/layout/Footer/Footer'
import router from 'next/router';
import { useQuery } from "react-query";
import Loading from '@/componets/Loading/Loading';


 
 
function City({data}) {


  
    const convertFromJSONToHTML = (text) => {

        
          try{
              return { __html: stateToHTML(convertFromRaw(text))}
            } catch(exp) {
              console.log(exp)
              return { __html: 'Error' }
            }
      }


   
    
    

    return (
          <>
    
          <Head>

          <title>{data.cityName} - AirJaldi Networks</title>
        <meta name="keywords" content={ data.cityName  + "AirJaldi Network" }/>
<meta name="description" content={data.cityName + "AirJaldi Network"}/>

<meta name="copyright"content="https://airjaldi.com/"/>
<meta name="language" content="ES"/>



<meta name="url" content={`http://sandbox.airjaldi.com:5000/netwroks/${data.slug}`}/>
<meta name="identifier-URL" content={`http://sandbox.airjaldi.com:5000/netwroks/${data.slug}`}/>

<meta http-equiv="Expires" content="0"/>
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="Cache-Control" content="no-cache"/>

<meta name="og:title" content={data.cityName + "AirJaldi Network"}/>
<meta name="og:type" content="Networks"/>
<meta name="og:url" content={`http://sandbox.airjaldi.com:5000/netwroks/${data.slug}`}/>
<meta name="og:image" content={data.featureImg}/>

<meta name="og:description" content={data.cityName}/>

      </Head>
             <Section>
              <div className="flex" >
              <div className="flex-1" >

                  <div className="head" >
              <h1>{data.cityName}</h1>    
                  </div>


                  <div className="data" >
                      <ul>
                          <li className="top" >Technical Contact:</li>
                          <li  onClick={() => window.open('mailto:support@airjaldi.com') }  >{data.contact}
                          
                          Email: <span> support@airjaldi.net</span>
                          </li>
                     
                          
                         


                      </ul>
                      <ul>
                          <li className="top" >Office Address:</li>
                         <li>{data.address}</li>
                          
                      </ul>

                    











                      
                  </div>
                  
                  </div>
                  <div className="flex-2" >
                  <Image
              className="myImage"
        src={data.featureImg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        
      /> 
                  </div>
              </div>
            
            
            </Section >
         <Map  convertFromJSONToHTML={convertFromJSONToHTML}  data={data}/>
       
       

<Team id={data.slug} city={data}   />  

<Footer/>
</>
      
        
         
          )
      }

export default City
