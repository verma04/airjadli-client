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
    <div className="cityData">

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

     
     </div>

    <div  className="cityData" >
      
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

      
      </div>

    <div  className="cityData" >
      
      
     
      
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

      
      </div>
    <div className="cityData" >
      
      
    
        
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

      </div>
    <div className="cityData"  >
          
    <svg className="Manali" id="radar-circle">
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
    <div  className="cityData" >
      
      
   
      
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


      <div  className="cityData" >
    
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
    
    </div>
    <div  className="cityData" >
    
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
    
    </div>

    <div  className="cityData" >
    
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
    </div>
    <div>
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
    </div>
    <div>
    
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
    </div>
    <div>
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
    </div>
    <div>
   
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
   
   
    </div>
    <div>
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
   </div>
    <div>
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
   </div>
    

    <div>
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
   </div>
    <div>
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
   </div>
    <div>
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
   </div>
    <div>
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
   </div>

  
  
  
    <div>
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
   </div>

    <div>
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
   </div>

    <div>
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
   </div>

    <div>
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
   </div>

    <div>
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
   </div>

    <div>
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
   </div>
    <div>
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
   </div>

    <div>
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
   </div>

    <div>
    <svg className="pelling" id="radar-circle">
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

    <div>
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
   </div>
  
    <div>
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
   </div>
    <div>
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
   </div>
    <div>
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
   </div>
    <div>
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
   </div>
  
  
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