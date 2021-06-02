import Head from 'next/head';

import { Section} from './Style'


import Image from 'next/image';


export default function Home({data1}) {
  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
    
    <div class="grid"   >

        <div className="head" >
            <h2>{data1.Section1}</h2>
        </div>
    

    <div className="data" > 
    <div className="set" >
     <h2>{data1.Section2Head}</h2>

<p>{data1.Section2Description}</p>



    </div>
    </div>


   
    </div>



      </Section>
     

 
  
       
  
    </>
  );
}