import Head from 'next/head';

import { Section} from './Style'


import Image from 'next/image';



export default function Job({data}) {
  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
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

         <div className="bottom" >{user.partneremail}</div>
        
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