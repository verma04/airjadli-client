import React from 'react';
import { Section } from './Style'
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html'
function Aboutus({about}) {
    const convertFromJSONToHTML = (text) => {
        try{
            return { __html: stateToHTML(convertFromRaw(text))}
          } catch(exp) {
            console.log(exp)
            return { __html: 'Error' }
          }
    }
    
    return (
        <Section>
           <div class="flex" >
           <div class="head" >
               <h1>ABOUT US</h1>
                </div>

                <div className="data"  dangerouslySetInnerHTML={convertFromJSONToHTML(about)} ></div>
               </div> 
     
     
        </Section>
    )
}

export default Aboutus
