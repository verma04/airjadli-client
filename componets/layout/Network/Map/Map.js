import Head from 'next/head';

import { Section} from './Style'


import Image from 'next/image';
import { useRouter } from 'next/router'

export default function Home() {
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

         <div class="dropdown-content">

                
       <div className="content" >
       <div className="list" >
       <span className="ban" onClick={() => router.push(`/networks/barwani`) }  >BARWANI
       <div id="point"  class="point" ><i class="fas fa-circle-notch"></i> </div>
       </span>
        <span className='har' onClick={() => router.push(`/networks/barwani`) } >HARISAL
        <div id="point1" class="point" > <i class="fas fa-circle-notch"></i></div>  
        </span>
        <span className='chh'  onClick={() => router.push(`/networks/barwani`) } >CHHINDWARA
        <div id="point2" class="point" > <i class="fas fa-circle-notch"></i></div>  
        </span>
        <span className="kha" onClick={() => router.push(`/networks/barwani`) } >KHARGONE
        <div id="point3" class="point" > <i class="fas fa-circle-notch"></i></div> 
        </span>
        <span className='seo' >SEONI
        <div  id="point5" class="point" ><i class="fas fa-circle-notch"></i></div>  
        </span>
        <span>AKOLA
        <div id="point6" class="point" ><i class="fas fa-circle-notch"></i></div>   
        </span>
        <span>AMRAVATI

        <div id="point7" class="point" ><i class="fas fa-circle-notch"></i></div>  
        </span>

        <span>BULDHANA</span>
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
<span className="kan"  onClick={() => router.push(`/networks/kangra`)} >KANGRA
<div id="point"  class="point" ><i class="fas fa-circle-notch"></i> </div>
</span>






 <span>BULDHANA</span>
</div>
<div className="list" >

</div>


</div>
</div>



         </h2>
         <h2>EAST</h2>
         <h2>SOUTH</h2>
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