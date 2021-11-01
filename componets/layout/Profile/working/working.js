import Head from 'next/head';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer'
import { Section} from './Style'
import styled, { createGlobalStyle } from 'styled-components';

import Image from 'next/image';



export default function Home({data}) {
  return (
    <>
    
      <Section>

    <div class="grid" >
    <Image
              className="myImage"
        src={`${process.env.url}/fjlpllrerc2873pkifo6.jpg`}
        alt="Picture of the author"
        layout="fill"
       
        objectFit="cover"
      />
       <div className="bird" > 
  <img src={`${process.env.url}/i4zzojgwybld0b5moqqq.png`} ></img>
   </div>

      <div class='card'  >
      <div class='card-1'  >
  <div class='head' >
<h2>{data.workhead}</h2>

   
  </div>
  <div class='grid1' >
<h2>{data.work1head}</h2>

<p>{data.work1para}</p>

   
  </div>
  <div class='grid1' >
<h2>{data.work2head}</h2>
<p>{data.work2para}</p>
   
  </div>
  
  <div class='grid1' >


<h2   >{data.work3head}</h2>
<p>{data.work3para} </p>

   
  </div>
  <div class='grid1' >
<h2>{data.work4head}
</h2>
<p>{data.work4para}
</p>

   
  </div>
  
 



 


</div>
</div>
    </div>



      </Section>
   


      
       

    
    </>
  );
}