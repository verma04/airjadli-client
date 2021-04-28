import Head from 'next/head';
import Navbar from '../Navbar/BlueNavbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import styled, { createGlobalStyle } from 'styled-components';
import Team from './Team/Team'
import Image from 'next/image';
import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';
const fetchPeoplePage = async () => {
  const res = await fetch("https://airjadli.herokuapp.com/api/client/Peopelpage");
  return res.json();
};



export default function Home() {
  const { data, status } = useQuery("peoplePage", fetchPeoplePage);
 
  return (
    <>
  
     {status === "error"  && <p>Error fetching data</p>}
      {status === "loading" && <Loading/>}
      {status === "success" && (
          <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
      <Navbar/>
    <div class="grid"     >
    <Image
              className="myImage"
        src={data.PeoplePageAvatar}
        alt="Picture of the author"
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
{data.PeoplePageDescription}
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>


      </Section>
     
     <Team page={data}/>
    
      
       
      <Footer/>
    
    </>
    )}
    </>
    );
  }