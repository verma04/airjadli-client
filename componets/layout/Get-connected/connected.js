

import React from 'react'

import { Section} from './Style';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import News from '../NewsLetter/News';
import Image from 'next/image';
function Connected() {
    return (
        <div>
            
              <Section>

              <div class="grid"     >
   
   <div className="bird" > 
 <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
  </div>
   
   
   
   
   <Image
             className="myImage"
             src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1616044262/Airjaldi/ho0ro6wdyf9owyad4l4c.jpg"}
      
       layout="fill"
      
       objectFit="cover"
     />
       <div class='card'  >
     <div class='card-1'  >
 <div class='grid1' >

 <h1>
 dssd
sd
sd

describe('sdd'

     </h1>

  
 </div>







</div>
</div>



</div>
    
    
    
   

                

            <div className="flex" >

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

    <button> Send </button>
    
  </form>

                </div>

  <div  className="offer" >
  
  <div className="offer-1" >
      <div className="top" >
      <h5 class="w-pricing-item-title">BUSINESS CONNECTION</h5>
       <h2>Starting from Rs 865</h2>
       <span>pre month</span>
      </div>
      <div className="bottom" >
  

      <li>Class A Internet Service Provider</li>
      <li>24/7 Customer Support</li>


      <li>Dedicated service</li>


      <li>Promised Speed</li>
        <li>10 Years of Experience</li>
        <li>97% Uptime</li>
 
      </div>

  </div>
  <div className="offer-1" >
      <div className="active" >
      <h5 class="w-pricing-item-title">HOME CONNECTION</h5>
       <h2>Starting from Rs 374</h2>
       <span>pre month</span>
      </div>
      <div className="bottom" >
  

      <li>Class A Internet Service Provider</li>
      <li>24/7 Customer Support</li>


      <li>Dedicated service</li>


      <li>Promised Speed</li>
        <li>10 Years of Experience</li>
        <li>97% Uptime</li>
 
      </div>

  </div>
   
  <div className="offer-1" >
      <div className="top" >
      <h5 class="w-pricing-item-title">SMALL BUSINESS</h5>
       <h2>Starting from Rs 465</h2>
       <span>pre month</span>
      </div>
      <div className="bottom" >
  

      <li>Class A Internet Service Provider</li>
      <li>24/7 Customer Support</li>


      <li>Dedicated service</li>


      <li>Promised Speed</li>
        <li>10 Years of Experience</li>
        <li>97% Uptime</li>
 
      </div>

  </div>
   

  </div>

            </div>
          
          
          
          
           </Section>
             <News/>
          
        </div>
    )
}

export default Connected
