

import React from 'react'

import { Section} from './Style';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import News from '../NewsLetter/News';
import Image from 'next/image';
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';
const fetchConnection = async () => {
  const res = await fetch("https://airjadli.herokuapp.com/client/getConnection");
  return res.json();
};
function Connected() {
  const { data, status } = useQuery("connection", fetchConnection);
    return (
      <>
      {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <Loading/>  }
        {status === "success" && (
            <>
        <div>
            <Navbar/>
              <Section>

              <div class="grid"     >
   
   <div className="bird" > 
 <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
  </div>
   
   
   
   
   <Image
             className="myImage"
             src={data.ConnectionAvatar}
      
       layout="fill"
      
       objectFit="cover"
     />
       <div class='card'  >
     <div class='card-1'  >
 <div class='grid1' >

 <h1>
 {data.ConnectionDescription}

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
   {data.package.map(number => 
     <div className="offer-1" >
     <div  id={number.active} className="top" >
     <h5 class="w-pricing-item-title">{number.packageType}</h5>
      <h2>Starting from Rs {number.packagePrice}</h2>
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
 

   
   )

   }

  </div>

            </div>
          
          
          
          
           </Section>
             <News/>
          <Footer/>
        </div>
   
        </>
      )}
  </>
  );
}

export default Connected
