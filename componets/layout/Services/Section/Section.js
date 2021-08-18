import Head from 'next/head';
import { useEffect , useState} from 'react'
import { Section} from './Style'


import Image from 'next/image';

import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
const convertFromJSONToHTML = (text) => {
  let data = JSON.parse(text)

  console.log(data)

    try{
        return { __html: stateToHTML(convertFromRaw(data))}
      } catch(exp) {
        console.log(exp)
        return { __html: 'Error' }
      }
}



 function Data({ser  }) {

  

  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
    
      <div className="haed" >
 <h2>Services({ser.servicesSet.length})</h2>


                
            </div>
  
        <div className='flex' >
        {ser.servicesSet.map((number , index ) => 
            <div   key={number._id} className="flex-1" >
      <div className="head" >
          <h2>{index+1}. {number.servicesName}</h2>
      </div>
      
      <div className='data' >
     
       <div className='left' >
    
        <div  className="des" >
      <div className="img" >
        <Image
                    className="myImage"
              src={number.servicesAvatar}
              layout="fill"
              objectFit="cover"
            />
            </div>
       
      <div    className="p" dangerouslySetInnerHTML={convertFromJSONToHTML(number.servicesveDescription)} />
        </div>
      
      
      
      
       </div>
      
       
      
       <div className='right' >
      
           

    
        <div className="box" >
        
        <div className="contact" >
                   <h3>CONTACT</h3>
                   <p>{number.servicesContact}</p>
               </div>
      
               <div onClick={() => window.open(`mailto:${number.servicesemail}`) } title={number.servicesemail}  className="bottom" >{number.servicesemail}</div>
              
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



export default Data;
