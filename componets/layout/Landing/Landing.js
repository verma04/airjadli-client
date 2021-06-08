
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import Head from 'next/head'
import { useRouter } from "next/router";
import News from '../NewsLetter/News'
import Image from 'next/image'
import Connection from './Connection/connection';
import Project from './Project/Project'
import InNews from './News/inNews'
import Map from './Map/Map'
import Partner from '../partners/partner'
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';
const fetchPage = async () => {
  const res = await fetch(" http://sandbox.airjaldi.com:3000/client/landing");
  return res.json();
};

export default function Home() {
  const { data, status } = useQuery("Page", fetchPage);
  const router = useRouter();
  return (
    <>
    {status === "error" && <p></p>}
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
    <div class="grid"  >

      <div className="birdOut" >
      <div className="birdd" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
   </div>
         </div>
   
    
    <Image
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1618478621/ycpsax6xqmnxp58qv0nn.jpg'
        alt="Picture of the author"
        layout="fill"
       
        objectFit="cover"
      />
 {/* <div className="bird" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
   </div> */}
      <div class='card'  >

     
      <div class='card-1'  >

        {data.heroSection.map((number) =>

<div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
<Image
           className="myImage"
     src={number.sectionAvatar}
     alt="Picture of the author"
     layout="fill"
     objectFit="cover"
   />
</div>

<div className="data" >
<div className="head" >   <h2>{number.sectionHead}</h2> </div>
  <p>{number.sectionDes}
</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span  onClick={() => router.push(`/${number.link}`)} > {number.sectionLink}</span> </div>
</div>
</div>


        )}
 

</div>
</div>
    </div>
   

<div class="grid-1"  >
      
   
      <div class='card'  >
      <div class='card-1'  >
      {data.heroSection.map((number) =>
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src={number.sectionAvatar}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>{number.sectionHead}</h2>
     <p>{number.sectionDes}
ar ...   </p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
 <span  >  {number.sectionLink}</span> </div>
   </div>
  </div>
 
      )}
</div>
</div>
    </div>




      </Section>
      <Map data={data}/>

      <Connection/>
      <Project data={data} />
      <News/>
      <InNews  />

      <Partner data={data.partners} />
      
       
      <Footer  />
    
      </>
       )}
      
       
    
    
    </>
  );
}











