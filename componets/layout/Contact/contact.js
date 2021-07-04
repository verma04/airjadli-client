import React from 'react'
import { Section} from './Style'
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';

function contact({data}) {

 
    return (
      <>
      
    
       <Navbar/>
   

        <Section>
       
<div class="grid"     >
   
 
   
   
   
   
   <Image
             className="myImage"
             src={data.ContactAvatar}
      
       layout="fill"
      
       objectFit="cover"
     />
       <div class='card'  >
     <div class='card-1'  >
 <div class='grid1' >

 <h1>
{data.ContactDescription}

     </h1>

  
 </div>







</div>
</div>



</div>
    
    
    
   
           <div className="flex" >

     <div className="top" >
         <div className="top-1" >
             <h2>Questions? Comments?</h2>
             <span><i class="fas fa-envelope"></i>info@airjaldi.net</span>
         </div>
         <div  className="top-1" >
             <h2>New Connections & Support</h2>
             <span><i class="fas fa-envelope"></i>support@airjaldi.net</span>
         </div>
         <div id="act" className="top-1" >
        <h2> Call Us Toll-Free:</h2>
<span> <i class="fas fa-phone-alt"></i>1-800-121-3648</span>
         </div>
     </div>

     <div className="mid" >

        <div className="mid-1" >
  
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
 
                 <div class="socials-list">
                     <a target="_blank" href="http://www.facebook.com/AirJaldi" class="w-socials-item facebook">
	
			
				<i class="fab fa-facebook-f"></i>
				</a>
	
            <a target="_blank" href="http://twitter.com/AirJaldiRBB" class="w-socials-item twitter">
				
				
                <i class="fab fa-twitter"></i>
				
			</a>
            <a target="_blank" href="http://plus.google.com/s/airjaldi" class="w-socials-item google">
				
				
                <i class="fab fa-google-plus-g"></i>
				
			</a>
            <a target="_blank" href="http://www.linkedin.com/company/1689736" class="w-socials-item linkedin">
				
			
                <i class="fab fa-linkedin"></i>
			
			</a></div>
        </div>
        <div className="mid-2" >
  <h2>Network Teams:</h2>
  {data.network.map(number =>
    <li>
    {number.NetworkName}:
    <span> <i class="fas fa-phone-alt"></i>{number.NetworkNumber}</span>
  
    </li>
        )
  }

 
        </div>

     </div>
           </div>
        
        
        
        </Section>
     <Footer/>
        </>
          
    )
}

export default contact
