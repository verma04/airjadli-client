
import { Section} from './Style'

import Image from 'next/image'
import { Router, useRouter } from "next/router";
import { useQuery } from "react-query";

const fieldNews = async () => {
  const res = await fetch("https://admin.airjaldi.com/client/fieldStories");
  return res.json();
};
export default function News() {
  const { data, status } = useQuery("fieldNews",fieldNews);
  const router = useRouter();
  
  return (
    <>
    {status === "error" && <p></p>}
      {status === "loading"  && 
       <p></p>
    
      
      }
      { status === "success" && (
    <>
      
    <Section>

    <div class="grid" >
   
   <div className="head" >
   <h1> Stories from the field</h1>
   </div>

      <div class='card'  >
      <div class='card-1'  >
        {data.data.slice(0, 3).map((number) => 
 <div class='grid1' >

 <div onClick={() => router.push(`/field-stories/${number.slug}`) } className="wrapper"   >
 <Image
            className="myImage"
      src={ process.env.url +  number.featureImg}
      alt="Picture of the author"
      layout="fill"
      objectFit="cover"
    />
 </div>

 <div onClick={() => router.push(`/field-stories/${number.slug}`) } className="data" >
     <div class='name'>
  
<h3>{number.title}</h3>
     </div>

   <p>{number.newsDescription}</p>
<div className='link' >
<img src={`${process.env.url}/kks3py9aencqms2riscm.png`}></img>
<span>  Learn more </span> </div>
 </div>
</div>

        )}
 

</div>
</div>
<div className='btn' >
<button onClick={() => router.push('/field-stories')} >see all stories</button>
</div>
    </div>



      </Section>
      </>
       )}
     
      
    </>
  );
}