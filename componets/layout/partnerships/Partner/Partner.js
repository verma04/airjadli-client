


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

<div className='data' >
 
 <div className='left' >
 <div className="head" >
    <h2>{user.partnerName}</h2>
</div>

  <div className="des" >

<p>{user.partnerveDescription}</p>

<h3>For more details email <span
  onClick={() => window.open(`mailto:${user.partneremail}`) }
  title={user.partneremail}

> {user.partneremail} </span> call 1-800-121-3648</h3>
  </div>




 </div>

 

 <div className='right' >

 <div className="img" >
  <Image
              className="myImage"
        src={user.partnerAvatar}
        layout="fill"
        objectFit="cover"
      />
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