import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section} from './Style'
import  Job from './Partner/Partner'

import Image from 'next/image';

import { useQuery } from "react-query";
import Loading from '../../Loading/Loading';

const fetchUsers = async () => {
  const res = await fetch("https://airjadli.herokuapp.com/api/client/getPartner");
  return res.json();
};


export default function Home() {
  const { data, status } = useQuery("partner", fetchUsers);
  return (
    <>
    {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <Loading/>}
      {status === "success" && (
          <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
      <Navbar/>
    <div class="grid"     >
   
    <div className="birdOut" >
      <div className="birdd" > 
  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
   </div>
         </div>
    
    
    
    
    <Image
              className="myImage"
        src={data.aboutAvatar}
       
        layout="fill"
       
        objectFit="cover"
      />

      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

  <h1>
  {data.aboutDescription}
 
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     

    <Job data={data.partner} />
      
       
      <Footer/>
      </>
      )}
  </>
  );
}