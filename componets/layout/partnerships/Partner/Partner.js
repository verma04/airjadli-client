import Head from 'next/head';

import { Section} from './Style'


import Image from 'next/image';



export default function Job({data}) {
  return (
    <>
     
      <Head>
      <meta charset="UTF-8"/>

<title>Partnerships - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/partnerships" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="People - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/partnerships" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Partnerships - AirJaldi Networks" />


<meta name="og:title" content="Partnerships"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/partnerships"/>
      
      </Head>
    
     
      <Section>
  
  <div className='flex' >
  {data.map((user) => (
      <div className="flex-1" >
<div className="head" >
    <h2>{user.partnerName}</h2>
</div>

<div className='data' >
 
 <div className='left' >
  
  <div className="des" >
<div className="img" >
  <Image
              className="myImage"
        src={user.partnerAvatar}
        layout="fill"
        objectFit="cover"
      />
      </div>
 
<p>{user.partnerveDescription}</p>
  </div>




 </div>

 

 <div className='right' >

     <div className="box" >

         <div className="contact" >
             <h3>CONTACT</h3>
             <p>{user.partnerContact}</p>
         </div>

         <div  
         onClick={() => window.open(`mailto:${user.partneremail}`) }
         title={user.partneremail}
         className="bottom" >{user.partneremail}</div>
        
     </div>

 </div>


</div>


      </div>
 ))}
      

  </div>
   
   

   



      </Section>
     

    
      
       
 
    
    </>
  );
}