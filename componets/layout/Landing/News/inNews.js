
import { Section} from './Style'

import Image from 'next/image'
import { Router, useRouter } from "next/router";
import { useQuery } from "react-query";

const fetchNews = async () => {
  const res = await fetch("https://admin.airjaldi.com/api/client/getNews");
  return res.json();
};
export default function News() {
  const { data, status } = useQuery("news", fetchNews);
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
   <h1>IN THE NEWS</h1>
   </div>

      <div class='card'  >
      <div class='card-1'  >
        {data.data.reverse().slice(0, 3).map((number) => 
 <div class='grid1' >

 <div onClick={() => router.push(`/news/${number.slug}`) } className="wrapper"   >
 {(() => {
        if (number.featureImg === "" ) {
          return (
            <Image
            className="myImage"
           src="/static/odjjeta8wpc8nn2cwbit.png"
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />
               
           
          )
        } 
        else if  (number.featureImg.length > 40 ) {
          return (
            <Image
            className="myImage"
           src={ number.featureImg}
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
           src={process.env.url + number.featureImg}
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />
          )
          }
       
      })()}
 </div>

 <div onClick={() => router.push(`/news/${number.slug}`) } className="data" >
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
<button onClick={() => router.push('/news')} >see all news</button>
</div>
    </div>



      </Section>
      </>
       )}
     
      
    </>
  );
}