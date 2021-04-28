import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'

import News from '../NewsLetter/News'
import Image from 'next/image'
import Connection from './Connection/connection';
import Project from './Project/Project'
import InNews from './News/inNews'
import Map from './Map/Map'
import Partner from '../partners/partner'
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';
const fetchNews = async () => {
  const res = await fetch(" https://airjadli.herokuapp.com/api/client/getNews");
  return res.json();
};

export default function Home() {
  const { data, status } = useQuery("news", fetchNews);
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
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190592/AirJaldi/hqwycuukiw90v3uv8sew.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
   <div className="head" >   <h2>WHO WE ARE</h2> </div>
     <p>AirJaldi, a Class A ISP (Pan-India), is a
leading innovator and implementer of
technically and economically viable
Internet connectivity solutions for rural
areas ...</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
 <span>  See our company profile </span> </div>
   </div>
  </div>
  <div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
<Image
           className="myImage"
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190593/AirJaldi/izjl1zb5a90lphql74xa.jpg"
     alt="Picture of the author"
     layout="fill"
     objectFit="cover"
   />
</div>

<div className="data" >
  <div className="head" ><h2>WHAT WE DO</h2></div>
  
  <p>We provide high-quality broadband
connectivity In eight Indian states. We
connect large and small clients from
the corporate, civil society and private
sectors ...</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span>  More about our networks </span> </div>
</div>
</div>


<div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190593/AirJaldi/yhyquanzdjrh5pgxu2qy.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

 

   <div className="data" >
   <div className="head" > <h2>GET CONNECTED</h2></div> 
     <p>With custom-made solutions for your
home and office and our wifi hotspots
all over India you are always connected.
Our service-team is ready respond to ...</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
 <span> To our products and deals </span> </div>
   </div>
  </div>
 


</div>
</div>
    </div>
   

<div class="grid-1"  >
      
   
      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190592/AirJaldi/hqwycuukiw90v3uv8sew.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>WHO WE ARE</h2>
     <p>AirJaldi, a Class A ISP (Pan-India), is a
leading innovator and implementer of
technically and economically viable
Internet connectivity solutions for rural
areas ...</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
 <span>  See our company profile </span> </div>
   </div>
  </div>
  <div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
<Image
           className="myImage"
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190593/AirJaldi/izjl1zb5a90lphql74xa.jpg"
     alt="Picture of the author"
     layout="fill"
     objectFit="cover"
   />
</div>

<div className="data" >
  <div className="head" ><h2>WHAT WE DO</h2></div>
  
  <p>We provide high-quality broadband
connectivity In eight Indian states. We
connect large and small clients from
the corporate, civil society and private
sectors ...</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span>  More about our networks </span> </div>
</div>
</div>


<div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190593/AirJaldi/yhyquanzdjrh5pgxu2qy.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
     <h2>GET CONNECTED</h2>
     <p>With custom-made solutions for your
home and office and our wifi hotspots
all over India you are always connected.
Our service-team is ready respond to ...</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
 <span> To our products and deals </span> </div>
   </div>
  </div>
 


</div>
</div>
    </div>




      </Section>
      <Map/>

      <Connection/>
      <Project/>
      <News/>
      <InNews  data={data}/>

      <Partner/>
      
       
      <Footer/>
    
      </>
       )}
      
       
    
    
    </>
  );
}