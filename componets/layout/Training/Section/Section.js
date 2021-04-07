import Head from 'next/head';

import { Section} from './Style'


import Image from 'next/image';


export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
    
    <div class="grid"   >

        <div className="head" >
            <h2>{data.tranningData}</h2>
        </div>
    

    <div className="data" > 
    <div className="set" >
     <h2>{data.SectionHead}</h2>

<p>{data.SectionData}</p>

<p>Call 1-800-200-9989 or email support@airjaldi.com to get connected</p>

    </div>
    </div>


<div className="data-1" >

<div className="right" >
    <Image
              className="myImage"
        src={data.Section2img}
       
        layout="fill"
       
        objectFit="cover"
      />


    </div>
    <div className="left" >


<p>“{data.Section2Data}”</p>
<span>{data.Section2Name}</span>


</div>


     </div>
   
    </div>



      </Section>
     

 
  
       
  
    </>
  );
}