import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section } from './Style'
import NewsLetter from '../NewsLetter/News'
import Section1 from './Section/Section'

import { useQuery } from "react-query";
import Image from 'next/image';
import Loading from '../../Loading/Loading';
const fetchservices = async () => {
  const res = await fetch("https://airjadli.herokuapp.com/api/client/getServices");
  return res.json();
};


export default function Home() {
  
  const { data, status } = useQuery("services", fetchservices);
  return (
    <>
    {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <Loading/>}
      {status === "success" && (
          <>
      <Head>
        <title>dsd - AirJaldi</title>
      </Head>
      <Section>
      <Navbar/>
    <div class="grid"    >

    <div className="bird" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1615558552/vise9qvuybx9ttqj17zy.svg'} ></img>
   </div>
    <Image
              className="myImage"
        src={data.servicesAvatar}
       
        layout="fill"
       
        objectFit="cover"
      />

      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

  <h1>
{data.servicesDescription}
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     
<Section1 data={data} />
 
<NewsLetter/>
       
      <Footer/>
    
      </>
      )}
  </>
  );
}