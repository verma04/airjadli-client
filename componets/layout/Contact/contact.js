import React from 'react'
import { Section} from './Style'
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';
import Head from 'next/head'

function contact({data}) {

 
    return (
      <>
      <Head>
      <meta charset="UTF-8"/>

<title>Contact Us - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/contact/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Contact Us - AirJaldi Networks" />
<meta property="og:description" content="&nbsp;" />
<meta property="og:url" content="https://airjaldi.com/contact/" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="&nbsp;" />
<meta name="twitter:title" content="Contact Us - AirJaldi Networks" />



<meta name="og:title" content="Contact Us"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/contact/"/>
<meta property='og:description' content={data.ContactDescription}/>
<meta name='description' content={data.ContactDescription}/>


      </Head>
      
    
       <Navbar/>
   

        <Section>
       
<div className="grid"     >
   
 
   
   
   
   
   <Image
             className="myImage"
             src={data.ContactAvatar}
      
       layout="fill"
      
       objectFit="cover"
     />
       <div className='card'  >
     <div className='card-1'  >
 <div className='grid1' >

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
             <span><i className="fas fa-envelope"></i>info@airjaldi.net</span>
         </div>
         <div  className="top-1" >
             <h2>New Connections & Support</h2>
             <span><i className="fas fa-envelope"></i>support@airjaldi.net</span>
         </div>
         <div id="act" className="top-1" >
        <h2> Call Us Toll-Free:</h2>
<span> <i className="fas fa-phone-alt"></i>1-800-121-3648</span>
         </div>
     </div>

     <div className="mid" >

        <div className="mid-1" >
  
        <div className="form" >
                 
                 <form>
     
     <div className="group">      
       <input type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Your Name</label>
     </div>
       
     <div className="group">      
       <input type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Your Number </label>
     </div>
     <div className="group">      
       <input type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Your Email
 </label>
     </div>
     <div className="group">      
       <input type="text" required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Your Message</label>
     </div>
 
     <button> Send </button>
     
   </form>
 
                 </div>
 
                 <div className="socials-list">
                     <a target="_blank" href="http://www.facebook.com/AirJaldi" className="w-socials-item facebook">
	
			
				<i className="fab fa-facebook-f"></i>
				</a>
	
            <a target="_blank" href="http://twitter.com/AirJaldiRBB" className="w-socials-item twitter">
				
				
                <i className="fab fa-twitter"></i>
				
			</a>

      <a target="_blank" href="https://www.youtube.com/channel/UC6LR9fyBNg-yuLFa0fj27wQ" className="w-socials-item youtube">
				
			
        <i className="fab fa-youtube"></i>

</a>

<a target="_blank" href="https://www.instagram.com/airjaldi/" className="w-socials-item instagram">
				
			
        <i className="fab fa-instagram"></i>

</a>

            <a target="_blank" href="http://www.linkedin.com/company/1689736" className="w-socials-item linkedin">
				
			
                <i className="fab fa-linkedin"></i>
			
			</a></div>
        </div>
        <div className="mid-2" >
 
  {data.network.map(number =>
    <li>
    {number.NetworkName}:
    <span> <i className="fas fa-phone-alt"></i>{number.NetworkNumber}</span>
  
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
