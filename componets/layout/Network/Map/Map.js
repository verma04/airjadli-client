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
    <div className="cityData" ><i class="fa fa-circle  chamba">

    {data.filter(element => element.cityName === "Chamba").map((number) => 
 
 <span id="chamba" onClick={() => router.push(`/networks/${number.slug}`) } >{number.cityName}</span>

)}

    </i>
     


      
    </div>
    <div><i class="fa fa-circle  dharmshala"></i></div>

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