import Head from 'next/head';
import Navbar from '../Navbar/BlueNavbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import moment from 'moment'
import { useEffect  , useState  } from 'react';
import ReadMoreReact from 'read-more-react';
import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useQuery } from "react-query";
const fetchNews = async () => {
  const res = await fetch(" https://airjadli.herokuapp.com/api/client/getNews");
  return res.json();
};

import Loading from '../../Loading/Loading'


export default function Home({}) {
  const { data, status } = useQuery("news", fetchNews);
  const router = useRouter()
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
   
   <div class='card'  >
   <div class='card-1'  >
   {data.map((number) =>  
   
<div  onClick={() => router.push(`/news/${number._id}`) }  class='grid1' >

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
  <p>
  <ReadMoreReact text={number.newsDescription}
       
       
             readMoreText="  click here to read more"/>
  </p>
<div className='link' >

</div>


<span className='status' >{number.status} {moment(number.created).format("DD")} {moment(number.created).format("MMMM")} {moment(number.created).format("YYYY")}   </span>
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