

import React from 'react'

import { Section} from './Style';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import News from '../NewsLetter/News';
import Image from 'next/image';
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';
import Head from 'next/head'
function Connected({data}) {
 
    return (
   
        <div>
                <Head>
                <meta charset="UTF-8"/>

<title>Get your connection Now! - AirJaldi Networks</title>




<link rel="canonical" href="https://airjaldi.com/get-connected/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Get your connection Now! - AirJaldi Networks" />
<meta property="og:description" content="[/vc_column_text][/vc_column][/vc_row]" />
<meta property="og:url" content="https://airjaldi.com/get-connected/" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="[/vc_column_text][/vc_column][/vc_row]" />
<meta name="twitter:title" content="Get your connection Now! - AirJaldi Networks" />
<meta name="og:title" content="Get your connection Now!"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/get-connected/"/>
<meta name="og:description" content="[/vc_column_text][/vc_column][/vc_row]"/>
      
      </Head>
            <Navbar/>
              <Section>

              <div class="grid"     >
   
  
   
   
   
   
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
   
     

  );
}

export default Connected
