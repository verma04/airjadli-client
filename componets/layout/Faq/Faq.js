import React, {useState, useEffect} from 'react'
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html'
import  { Section} from './Style'
import Image from 'next/image';
import { useQuery } from "react-query";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import Loading from '../../Loading/Loading';

import Head from 'next/head'


function Faq({data}) {
  
  const [one, setOne] = useState(true)
  const toggle = (id) => {
    setOne(id)
 }
  const convertFromJSONToHTML = (text) => {
    let data = JSON.parse(text)
  
      try{
          return { __html: stateToHTML(convertFromRaw(data))}
        } catch(exp) {
          console.log(exp)
          return { __html: 'Error' }
        }
  }
 
  return (
    
       <>

<Head>
<title>FAQS - AirJaldi Networks</title>

	
	

<link rel="canonical" href="https://airjaldi.com/faqs/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="FAQS - AirJaldi Networks" />
<meta property="og:description" content="General &nbsp; New connections Troubleshooting Payment" />
<meta property="og:url" content="https://airjaldi.com/faqs/" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="General &nbsp; New connections Troubleshooting Payment" />
<meta name="twitter:title" content="FAQS - AirJaldi Networks" />


<meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1"/>

<meta name="og:title" content="FAQS"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/faqs/"/>
<meta name="og:description" content="General &nbsp; New connections Troubleshooting Payment"/>
     
  
      </Head>
     
     
     
           <Navbar/>
          <Section>
          <div class="grid"     >
 
 
 
 
 
 
 <Image
           className="myImage"
           src={  process.env.url+    data.FaqAvatar}
    
     layout="fill"
    
     objectFit="cover"
   />
     <div class='card'  >
   <div class='card-1'  >
<div class='grid1' >

<h1>
{data.FaqDescription}

   </h1>


</div>







</div>
</div>



</div>
  
  
  
<div className='flex' >
                      <div className='flex-1' >
                  <div className="hero" >
                   <h2>FAQ</h2>
                   <h4>Question not answered yet? We are here to help!</h4>

                  </div>

  

    

         
                  {data.category.map(number =>
<div className="middle" >
   

   <h2>{number.categoryName}</h2>
   
   
             
   {number.list.map(list => 

<div className='drop' >
<div  className="up" >
<h4>{list.question}</h4>

{(() => {
        if (one == list._id) {
          return (
            <i  onClick={ () => setOne(true)}  class="fas fa-angle-down"></i>
           
          )
        } else if( one == true) {
          return (
            <i  onClick={ () => toggle(list._id)}  class="fas fa-angle-right"></i>
          )
        }
        else {
          return (
            <i  onClick={ () => toggle(list._id)}  class="fas fa-angle-right"></i>
          )
        }
      })()}



  

</div>

{(() => {
        if (one === true) {
          return (
           null
          )
        } else if  (one == list._id)  {
          return (
            <div className="down" >
    <div className="data" dangerouslySetInnerHTML={convertFromJSONToHTML(list.answer)}  ></div>
            </div>
          )
        }
      })()}




</div>

   )

   }
  
   
             
   
   
   
     {/* dkmds */}
   
   
   
   
   {/* --------------- */}
 
   {/* --------------- */}
   
  
   
                     </div>
   
                  )}
              
                    
              </div>
      
      
                            
   
   
   
                 
          
         
      
                           
   
   
                  
              </div>
        
    


               
 
               
    
                          
 
 
 
               
        
       
    
                         
 
 
                
        
                
                








            


          
              
                
          </Section>


       <Footer/>

     

          </>
    
    
  
  )
}



export default Faq;


