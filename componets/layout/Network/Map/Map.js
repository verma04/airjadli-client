import Head from 'next/head';

import { Section} from './Style'


import Image from 'next/image';
import { useRouter } from 'next/router'

export default function Home({data}) {
   
  console.log(data)

  const router = useRouter()
  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
    
    <div class="grid"   >

        <div className="head" >
     <div className="head-1" >
         <h2>SELECT A NETWORK</h2>
     </div>

     <div className="head-2" >
         <h2>WEST

         <div id="north" class="dropdown-content">

                
<div className="content" >
<div className="list" >

{data.filter(element => element.zone === "West").map((number) => 
 
 <span  onClick={() => router.push(`/networks/${number.slug}`) } >{number.cityName}</span>

)}






</div>
<div className="list" >

</div>


</div>
</div>




         </h2>
         <h2>NORTH

         <div id="north" class="dropdown-content">

                
<div className="content" >
<div className="list" >

{data.filter(element => element.zone === "North").map((number) => 
 
 <span  onClick={() => router.push(`/networks/${number.slug}`) } >{number.cityName}</span>

)}






</div>
<div className="list" >

</div>


</div>
</div>



         </h2>
         <h2>EAST

         <div id="east" class="dropdown-content">

                
<div className="content" >
<div className="list" >

{data.filter(element => element.zone === "East").map((number) => 
 
 <span  onClick={() => router.push(`/networks/${number.slug}`) } >{number.cityName}</span>

)}






</div>
<div className="list" >

</div>


</div>
</div>




         </h2>
         <h2>SOUTH

         <div id="north" class="dropdown-content">

                
<div className="content" >
<div className="list" >

{data.filter(element => element.zone === "South").map((number) => 
 
 <span  onClick={() => router.push(`/networks/${number.slug}`) } >{number.cityName}</span>

)}






</div>
<div className="list" >

</div>


</div>
</div>




         </h2>
     </div>
        </div>
    

    <div className="map" > 
    <Image
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1614574387/rqfc3mkivmbhhdmgj5lm.png'
       
        layout="fill"
         
        objectFit="contain"
      />

     
   
      
      
           
     
     

    </div>


   
    </div>



      </Section>
     

 
  
       
  
    </>
  );
}