import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import  Job from './Job/job'

import { useQuery } from "react-query";
import Image from 'next/image';
import Loading from '../../Loading/Loading';




export default function Home({data}) {
  
  return (
    <>
   
      <Head>
        <title>Carrer - AirJaldi</title>
      </Head>
      <Section>
      <Navbar/>
    <div class="grid"      >
    <Image
              className="myImage"
        src={data.carrerAvatar}
       
        layout="fill"
       
        objectFit="cover"
      />


<div className="birdOut" >
      <div className="birdd" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
   </div>
         </div>
    

      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

  <h1>
{data.carrerDescription}
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     

    <Job partner={data.carrer} />
      
       
      <Footer/>
    
      </>
   
  );
}