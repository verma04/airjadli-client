import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section } from './Style'
import NewsLetter from '../NewsLetter/News'
import Section1 from './Section/Section';
import Map from './Map/Map'

import Image from 'next/image';
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';
const networks = async () => {
  const res = await fetch("http://localhost:3000/api/client/network");
  return res.json();
};
export default function Home() {
  const { data, status } = useQuery("networks", networks);
  return (
    <>
    {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && 
      <Loading/>
      }
      {status === "success" && (
          <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
      <Navbar/>
    <div class="grid"    >
    <Image
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190581/AirJaldi/du959vxynd4qeslbx6uw.jpg'
       
        layout="fill"
       
        objectFit="cover"
      />

<div className="bird" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1615558552/vise9qvuybx9ttqj17zy.svg'} ></img>
   </div>

      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

  <h1>
  Anduntias experat. Millabor rem et re
nost, aceperuptam apere quis doluptur,
odissunt, quo oditiore elibus esent rem.
Ut et, cupis exerciisquo videseque nis est
que sunto occuptatur sita volut volo
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     
<Section1/>
<Map  data={data} />
 
    
       
      <Footer/>
    
      </>
      )}
  </>
  );
}