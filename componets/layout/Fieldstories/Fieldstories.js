import Head from 'next/head';
import Navbar from '../Navbar/BlueNavbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import styled, { createGlobalStyle } from 'styled-components';
import { useQuery } from "react-query";
import Image from 'next/image'
const fetchFieldstories = async () => {
  const res = await fetch("http://sandbox.airjaldi.com:3000/client/fieldStories");
  return res.json();
};
import { useRouter } from 'next/router'
import Loading from '../../Loading/Loading';
export default function Home() {
  const { data, status } = useQuery("Fieldstories", fetchFieldstories);
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Fieldstories - AirJaldi</title>
      </Head>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && 
      
    <Loading/>
      
      }
        {status === "success" && (
    <>

      <Section>
      <Navbar/>
    <div class="grid"    >
   
      <div class='card'  >
      <div class='card-1'  >
      {data.map((number) =>  
      <div  onClick={() => router.push(`/field-stories/${number.slug}`) }  class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '13rem'}} >
{(() => {
     if (number.featureImg === "" ) {
       return (
         <Image
         className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        />
            
        
       )
     } 
       else { 
       return (
         <Image
         className="myImage"
        src={number.featureImg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        />
       )
       }
    
   })()}
    


</div>

<div className="data" >
 
   <h2>{number.title}</h2> 

  <span>{number.category}</span>
  <p>

 
  
       
       
            
  </p>
  <div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span>  Learn more </span> </div>


{/* <span className='status' >{number.status} {moment(number.created).format("DD")} {moment(number.created).format("MMMM")} {moment(number.created).format("YYYY")}   </span> */}
</div>
</div>

)}
</div>
</div>
    </div>



      </Section>
     
      
       
      <Footer/>
      </>
       )}
    </>
  );
}