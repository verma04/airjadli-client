import React from 'react'
import { Section} from './Style'
function modal({setmodal , cat}) {
    return (
        <Section>

<div id="myModal" class="modal">
<div class="modal-content">
    <span onClick={()=> setmodal(false)} class="close">&times;</span>
    <div className="form" >
                 
                 <form>
     
     <div class="group">      
       <input type="text" required/>
       <span class="highlight"></span>
       <span class="bar"></span>
       <label>Your Name</label>
     </div>
       
     <div class="group">      
       <input type="text" required/>
       <span class="highlight"></span>
       <span class="bar"></span>
       <label>Your Number </label>
     </div>
     <div class="group">      
       <input type="text" required/>
       <span class="highlight"></span>
       <span class="bar"></span>
       <label>Your Email
 </label>
     </div>
     <div class="group">      
       <input type="text" required/>
       <span class="highlight"></span>
       <span class="bar"></span>
       <label>Your Message</label>
     </div>
 

     <div class="group">      
     <select name="cars" id="cars">
 
 
  </select>
       <span class="highlight"></span>
       <span class="bar"></span>
      
     </div>
 
     <button> Send </button>
     
   </form>
 
                 </div>
 
  </div>

  </div>
        </Section>
            
      
    )
}

export default modal
