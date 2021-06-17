import Head from 'next/head';

import { Section} from './Style'
import { Router, useRouter } from "next/router";

import Image from 'next/image';


export default function Home({data}) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
    
    <div class="grid"   >

        <div className="head" >
            <h2>{data.servicesData}</h2>
        </div>
    

    <div className="data" > 
    <div className="set" >
     <h2>{data.SectionHead}</h2>

<p>{data.SectionData}</p>

<p>Call 1-800-200-9989 or email , <span  style={{cursor:"pointer"}}  onClick={() => window.open('mailto:support@airjaldi.com') }  > support@airjaldi.com <span/></span> to get connected</p>

    </div>
    </div>


<div className="data-1" >
    <div className="left" >

        <h2>{data.Section2head}</h2>
        <p>
{data.Section2Data}</p>
        <button  onClick={() => router.push("/contact") }  >{data.Section2Button}</button>


    </div>

    <div className="right" >
    <Image
              className="myImage"
        src={data.Section2img}
       
        layout="fill"
       
        objectFit="cover"
      />


    </div>
     </div>
    </div>



      </Section>
     

 
  
       
  
    </>
  );
}