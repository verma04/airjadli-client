
import { Section } from './Style'

import Image from 'next/image'
import { useQuery } from "react-query";
import { Router, useRouter } from "next/router";
import { number } from 'prop-types';
import { useState } from 'react';
import ReactPlayer from 'react-player'
const fetchProjects = async () => {
  const res = await fetch("https://admin.airjaldi.com/client/getprojects");
  return res.json();
};
export default function Project({data}) {
  const { data:data1, status } = useQuery("Projects", fetchProjects);
  const router = useRouter();

  const [ved, setved] = useState(true)
  return (
    <>
      
      <Section>
  
    <div class="grid" >
   
   <div className="head" >
   <h1>PROJECTS</h1>
   </div>
   {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && 
      
   <p></p>
      
      }
        {status === "success" && (
    
      <div class='card'  >
      <div class='card-1'  >
        {data1.data.slice(0, 3).map((number) =>  
<div onClick={() => router.push(`/projects/${number.slug}`) } class='grid1' >

<div className="wrapper"  >

 
<Image
           className="myImage"
           src={ process.env.url +  number.featureImg}
     alt="Picture of the author"
     layout="fill"
     objectFit="cover"
   />
 
</div>

<div className="data" >
    <div class='name'>
    <span>{number.category}</span>
<h3>{number.title}</h3>
    </div>

  <p>{number.description}</p>
<div className='link' >
<img src={`${process.env.url}/kks3py9aencqms2riscm.png`}></img>
<span>  Learn more </span> </div>
</div>
</div>




        )}
        </div>
  
</div>
   
   )}
   </div>

  


<div className='grid-1' >

    <div className='left' style={{  position: 'relative', width:"50%", height: '100%'}} >
 
    {ved ? 
  (
    <Image
    className="myImage"
src={process.env.url + data.section3Avatar}
alt="Picture of the author"
layout="fill"
objectFit="cover"
/>
  )
  :
  (

    <ReactPlayer 
width='100%'
height='30rem'
url={data.section2Youtube} />

  )

  }
    </div>


    <div className='right' >

   <div class="text" >
  <h2>
  {data.section2Head}
  </h2>
  <span>{data.section2Des}</span>

   </div>

   <div className='link' >
<img src={`${process.env.url}/kks3py9aencqms2riscm.png`}></img>
 <span
     onClick={() => setved(false) }

     
 
 
  > Watch the video </span> </div>

    </div>

</div>


<div className='btn' >
<button onClick={() => router.push('/projects')} >see all projects</button>
</div>

      </Section>

     
      
    </>
  );
}