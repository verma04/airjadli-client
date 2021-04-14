
import { Section} from './Style'

import Image from 'next/image'
import { Router, useRouter } from "next/router";

export default function News({data}) {
  const router = useRouter();
  return (
    <>
      
    <Section>

    <div class="grid" >
   
   <div className="head" >
   <h1>IN THE NEWS</h1>
   </div>

      <div class='card'  >
      <div class='card-1'  >
        {data.slice(0, 3).map((number) => 
 <div class='grid1' >

 <div onClick={() => router.push(`/news/${number.slug}`) } className="wrapper"   >
 <Image
            className="myImage"
      src={number.featureImg}
      alt="Picture of the author"
      layout="fill"
      objectFit="cover"
    />
 </div>

 <div onClick={() => router.push(`/news/${number.slug}`) } className="data" >
     <div class='name'>
  
<h3>{number.title}</h3>
     </div>

   <p>{number.newsDescription}</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span>  Learn more </span> </div>
 </div>
</div>

        )}
 

</div>
</div>
<div className='btn' >
<button onClick={() => router.push('/news')} >see all news</button>
</div>
    </div>



      </Section>

     
      
    </>
  );
}