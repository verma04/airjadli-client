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
    <div className="cityData-1" >
      
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

   <div className='link' >
   View 
<img src={`${process.env.url}kks3py9aencqms2riscm.png`}></img>
<span></span> </div>
   
   </span>

)}





      
    </div>
    <div className="cityData-2">

    <svg className="dharmshala" id="radar-circle">
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


{data.filter(element => element.cityName === "Dharamshala ").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}

     
     </div>

    <div  className="cityData-3" >
      
      <svg className="Kangra" id="radar-circle">
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

{data.filter(element => element.cityName === "Kangra").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}

      </div>

    <div  className="cityData-4" >
      
      
     
      
      <svg className="Nurpur" id="radar-circle">
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

{data.filter(element => element.cityName === "Nurpur").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
      </div>
    <div className="cityData-5" >
    
      <svg className="Bir" id="radar-circle">
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
{data.filter(element => element.cityName === "Bir Network").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
      </div>
    <div className="cityData-6"  >
          
    <svg className="Manali" id="Manali">
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

{data.filter(element => element.cityName === "Manali").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
     
        </div>
    <div  className="cityData-7" >
      
    {data.filter(element => element.cityName === "Palampur").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   
      
      <svg className="Palampur" id="radar-circle">
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


      <div  className="cityData-8" >
    
    <svg className="Almora" id="radar-circle">
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
    

{data.filter(element => element.cityName === "Almora").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   
    </div>
    <div  className="cityData-9" >
    
    <svg className="Nanital" id="radar-circle">
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
    
  
{data.filter(element => element.cityName === "Nainital ").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}

    </div>

    <div  className="cityData-10" >
    

    
    <svg className="Dehradun" id="radar-circle">
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

    {data.filter(element => element.cityName === "Dehradun ").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
    </div>
    <div className="cityData-11">
    <svg className="Pauri" id="radar-circle">
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
   
    


    {data.filter(element => element.cityName === "Pauri ").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
    </div>
    <div  className="cityData-12"  >
    
    <svg className="Tehri" id="radar-circle">
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
  
    {data.filter(element => element.cityName === "Tehri").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
  
    </div>
    <div  className="cityData-13">
    <svg className="Utt" id="radar-circle">
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
   
    
    {data.filter(element => element.cityName === "Uttarkashi ").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
    </div>
    <div className="cityData-14"  >
   
    <svg className="Kot" id="radar-circle">
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
   

    {data.filter(element => element.cityName === "Tehri").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}

 
    
   
    </div>
    <div   className="cityData-15">
    <svg className="MUN" id="radar-circle">
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
    
   

    {data.filter(element => element.cityName === "Mundgod").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   
   </div>
    <div className="cityData-16" >
    <svg className="bky" id="radar-circle">
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
  
  
    {data.filter(element => element.cityName === " Bylakuppe").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   </div>
    

    <div className="cityData-17" >
    <svg className="balapur" id="radar-circle">
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
  
    {data.filter(element => element.cityName === "Balapur").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   </div>
    <div  className="cityData-18" >
    <svg className="dharni" id="radar-circle">
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
  
    {data.filter(element => element.cityName === "Balapur").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   </div>
    <div  className="cityData-19">
    <svg className="murtizapur" id="radar-circle">
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
    {data.filter(element => element.cityName === " Murtizapur").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
  
   </div>
    <div  className="cityData-20" >  
    <svg className="paratwada" id="radar-circle">
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
  
    {data.filter(element => element.cityName === "Paratwada").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   </div>

  
  
  
    <div  className="cityData-21" >
    <svg className="ranchi" id="radar-circle">
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

    {data.filter(element => element.cityName === "Ranchi ").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}



   </div>

    <div className="cityData-22">


  
    <svg className="sahibhag" id="radar-circle">
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
   
    {data.filter(element => element.cityName === " Sahibganj ").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   
   </div>

    <div  className="cityData-23">
    <svg className="bhojpure" id="radar-circle">
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
    
    {data.filter(element => element.cityName === "Bhojpur").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
 
 
   </div>

    <div  className="cityData-24">
    <svg className="gaya" id="radar-circle">
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
    
    {data.filter(element => element.cityName === "Gaya").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
  
   </div>

    <div  className="cityData-25">
    <svg className="jeha" id="radar-circle">
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
   
    {data.filter(element => element.cityName === " Jehanabad").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   </div>

    <div  className="cityData-26" >
    <svg className="nawada" id="radar-circle">
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
  
    {data.filter(element => element.cityName === "Nawada").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
  
  
   </div>
    <div  className="cityData-27" >
    <svg className="rohtas" id="radar-circle">
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
    {data.filter(element => element.cityName === " Rohtas").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
  
  </div>

    <div  className="cityData-28">
    <svg className="singtam" id="radar-circle">
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
    {data.filter(element => element.cityName === "Singtam").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
  
   </div>

    <div  className="cityData-29">
    <svg   className="pelling" id="radar-circle">
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
    {data.filter(element => element.cityName === "Pelling ").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
  
   </div>

    <div  className="cityData-30">
      <svg className="komipong" id="radar-circle">
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

   
    {data.filter(element => element.cityName === "Kalimpong ").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   </div>
  
    <div  className="cityData-31" >
    <svg className="barwani" id="radar-circle">
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
   
    {data.filter(element => element.cityName === "Barwani").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
 
   </div>
    <div    className="cityData-32">
    <svg className="chinnwara" id="radar-circle">
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
    {data.filter(element => element.cityName === "Chhindwara").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   
   </div>
    <div   className="cityData-33">
    <svg className="seoni" id="radar-circle">
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
    {data.filter(element => element.cityName === "Seoni").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
 
   </div>
    <div  className="cityData-34">
    <svg className="kha" id="radar-circle">
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
   
    {data.filter(element => element.cityName === "Khargone").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   </div>
  


   <div  className="cityData-35">
    <svg className="betul" id="radar-circle">
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
   
    {data.filter(element => element.cityName === "Betul").map((number) => 
 
 <span className="hide" onClick={() => router.push(`/networks/${number.slug}`) } >
   
   
   <h2>{number.cityName}</h2> 

   <div className='link' >
   View 
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span></span> </div>
   
   </span>

)}
   </div>
  




  
    <Image
              className="myImage"
        src={`${process.env.url}/yluwzprmhzewfrr8l5zt.png`}
       
        layout="fill"
         
        objectFit="contain"
      />

     
   
      
      
           
     
     

    </div>


   
    </div>



      </Section>
     

 
  
       
  
    </>
  );
}