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
        <title>Home - AirJaldi</title>
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