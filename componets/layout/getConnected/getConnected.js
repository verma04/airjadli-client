import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import  Job from './Job/job'

import { useQuery } from "react-query";
import Image from 'next/image';
import Loading from '../../Loading/Loading';

const fetchCareer = async () => {
  const res = await fetch("https://airjadli.herokuapp.com/api/client/getCarrer");
  return res.json();
};


export default function Home() {
  const { data, status } = useQuery("carrer",fetchCareer);
  return (
    <>
    {status === "error" && <p>Error fetching data</p>}
      {status === "loading" &&  <Loading/> }
      {status === "success" && (
          <>
      <Head>
        <title>Home - AirJaldi</title>
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

<div className="bird" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
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
      )}
  </>
  );
}