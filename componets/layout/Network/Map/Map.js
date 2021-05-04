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

         <div id="west" class="dropdown-content">

                
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
    <div className="cityData" >
      
    <svg class="chamba" id="radar-circle">
  <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="white" stroke-width="2px" stroke-opacity="1">
    <animate attributeName="r" from="0" to="15" dur="3s" repeatCount="indefinite" />
    <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite"></animate>
  </circle>
  
  <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="white" stroke-width="2px" stroke-opacity="1">
    <animate attributeName="r" from="0" to="15" dur="3s" repeatCount="indefinite" begin="0.75s" />
    <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="0.75s"></animate>
  </circle>
  
  <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="white" stroke-width="2px" stroke-opacity="1">
    <animate attributeName="r" from="0" to="15" dur="3s" repeatCount="indefinite" begin="1.5s" />
    <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="1.5s"></animate>
  </circle>
  
  <circle cx="50%" cy="50%" r="5" fill="#0085C5" stroke="#979797"></circle>
</svg>

     
     
    {data.filter(element => element.cityName === "Chamba").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 
   <h2>dsd</h2>
   
   </span>

)}





      
    </div>
    <div>
        
    <svg class="dharmshala" id="radar-circle">
  <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="white" stroke-width="2px" stroke-opacity="1">
    <animate attributeName="r" from="0" to="15" dur="3s" repeatCount="indefinite" />
    <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite"></animate>
  </circle>
  
  <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="white" stroke-width="2px" stroke-opacity="1">
    <animate attributeName="r" from="0" to="15" dur="3s" repeatCount="indefinite" begin="0.75s" />
    <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="0.75s"></animate>
  </circle>
  
  <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="white" stroke-width="2px" stroke-opacity="1">
    <animate attributeName="r" from="0" to="15" dur="3s" repeatCount="indefinite" begin="1.5s" />
    <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="1.5s"></animate>
  </circle>
  
  <circle cx="50%" cy="50%" r="5" fill="#0085C5" stroke="#979797"></circle>
</svg>

     
           


      
     </div>

    <div><i class="fa fa-circle  Kangra"></i></div>

    <div><i class="fa fa-circle  Nurpur"></i></div>
    <div><i class="fa fa-circle  Bir"></i></div>
    <div><i class="fa fa-circle  Manali"></i></div>
    <div><i class="fa fa-circle  Palampur"></i></div>


    <div><i class="fa fa-circle  Almora"></i></div>
    <div><i class="fa fa-circle  Nanital"></i></div>

    <div><i class="fa fa-circle  Dehradun"></i></div>
    <div><i class="fa fa-circle  Pauri"></i></div>
    <div><i class="fa fa-circle  Tehri"></i></div>
    <div><i class="fa fa-circle  Utt"></i></div>
    <div><i class="fa fa-circle  Kot"></i></div>
   
   
    <div><i class="fa fa-circle  MUN"></i></div>
    <div><i class="fa fa-circle  bky"></i></div>
    

    <div><i class="fa fa-circle  balapur"></i></div>
    <div><i class="fa fa-circle  dharni"></i></div>
    <div><i class="fa fa-circle murtizapur"></i></div>
    <div><i class="fa fa-circle paratwada"></i></div>

  
  
  
    <div><i class="fa fa-circle ranchi"></i></div>

    <div><i class="fa fa-circle sahibhag"></i></div>

    <div><i class="fa fa-circle bhojpure"></i></div>

    <div><i class="fa fa-circle gaya"></i></div>

    <div><i class="fa fa-circle jeha"></i></div>

    <div><i class="fa fa-circle nawada"></i></div>
    <div><i class="fa fa-circle rohtas"></i></div>

    <div><i class="fa fa-circle singtam"></i></div>

    <div><i class="fa fa-circle pelling"></i></div>

    <div><i class="fa fa-circle komipong"></i></div>
  
    <div><i class="fa fa-circle barwani"></i></div>
    <div><i class="fa fa-circle chinnwara"></i></div>
    <div><i class="fa fa-circle seoni"></i></div>
    <div><i class="fa fa-circle kha"></i></div>
  
  
    <Image
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1618377512/AirJaldi/yluwzprmhzewfrr8l5zt.png'
       
        layout="fill"
         
        objectFit="contain"
      />

     
   
      
      
           
     
     

    </div>


   
    </div>



      </Section>
     

 
  
       
  
    </>
  );
}