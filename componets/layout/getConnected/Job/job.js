import Head from 'next/head';

import { Section} from './Style'


import Image from 'next/image';

import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

export default function Job({partner}) {

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
      <Head>
      <meta charset="UTF-8"/>

<title>Carrer - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/carrer" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="People - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/carrer" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Carrer - AirJaldi Networks" />


<meta name="og:title" content="Carrer"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/people"/>
      
      </Head>
    
    
    
    
      </Head>
      <Section>
  
      <div className='flex' >
        {partner.map((number ) => 
            <div   key={number._id} className="flex-1" >
      <div className="head" >
          <h2>{number.title}</h2>
    
      </div>
      
      <div className='data' >
     
       <div className='left' >
       
        <div  className="des" >
        <div className="peta"  dangerouslySetInnerHTML={convertFromJSONToHTML(number.description)} ></div>
       
  
        </div>
      
      
      
      
       </div>
      
       
      
       <div className='right' >
      
             

        
        <div className="box" >
       
        <div className="contact" >
                   <h3>CONTACT</h3>
                   <p>{number.partnerContact}</p>
               </div>
      
               <div onClick={() => window.open(`mailto:${number.partneremail}`) } title="support@example.com"  className="bottom" >{number.partneremail}</div>
              
           </div>
      
      
     
 
            
      
      </div>
      </div>
      
    

            </div>
        )}
      
          
        </div>
         
           

   



      </Section>
     

    
      
       
 
    
    </>
  );
}