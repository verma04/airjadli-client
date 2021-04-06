import React from 'react';
import { Section } from './Style'
import Image from 'next/image';
function Map({convertFromJSONToHTML, data}) {
    return (
        <Section>
            <div className='flex-0' >
                
            <div className='flex-1'  dangerouslySetInnerHTML={convertFromJSONToHTML(data.description)}  >
               
                
                 </div>
            <div className='flex-2' dangerouslySetInnerHTML={ { __html:data.location } } >
      
   

                 </div>
            
             </div>
       
        <div className='grid'   dangerouslySetInnerHTML={convertFromJSONToHTML(data.networkDetial)} >
            

            </div>
       
        </Section>
    )
}

export default Map
