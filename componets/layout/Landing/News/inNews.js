
import { Section} from './Style'

import Image from 'next/image'
import { Router, useRouter } from "next/router";

export default function News() {
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
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"90%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190590/AirJaldi/u1qeedb7atqtjak6mpqj.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
       <div class='name'>
    
<h3>Google, Facebook race to get
1 billion Indians online</h3>
       </div>

     <p>Epeditation plam id quam qui ut omniend
ipient pera denturesed quet est restiorum-
qui dolore pa perum expe autae simusa udit
eume cum hil mo odiciis ipsa alit a conse-
quam hitatibus et ut in.</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
 <span>  Learn more </span> </div>
   </div>
  </div>
  <div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"90%", height: '50%'}} >
<Image
           className="myImage"
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190591/AirJaldi/f2j0357fxvicngshvsef.jpg"
     alt="Picture of the author"
     layout="fill"
     objectFit="cover"
   />
</div>

<div className="data" >
<div class='name'>
      
<h3>JaldiFi goes Cashless</h3>
       </div>
  
  <p>Epeditation plam id quam qui ut omniend
ipient pera denturesed quet est restiorum-
qui dolore pa perum expe autae simusa udit
eume cum hil mo odiciis ipsa alit a conse-
quam hitatibus et ut in.</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span>  Learn more </span> </div>
</div>
</div>


<div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"90%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190590/AirJaldi/zo8ds9wahfu4oyy6mxt4.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
   </div>

   <div className="data" >
   <div class='name'>
      
<h3>Casting the net wide</h3>
       </div>
     <p>Epeditation plam id quam qui ut omniend
ipient pera denturesed quet est restiorum-
qui dolore pa perum expe autae simusa udit
eume cum hil mo odiciis ipsa alit a conse-
quam hitatibus et ut in.</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
<span>  Learn more </span> </div>
   </div>
  </div>
 


</div>
</div>
<div className='btn' >
<button onClick={() => router.push('/news')} >See all news</button>
</div>
    </div>



      </Section>

     
      
    </>
  );
}