
import { Section} from './Style'

import Image from 'next/image'


export default function Project() {
  return (
    <>
      
      <Section>
  
    <div class="grid" >
   
   <div className="head" >
   <h1>PROJECTS</h1>
   </div>

      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190590/AirJaldi/za5xtu8v76hx46byd9eq.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
   </div>

   <div className="data" >
       <div class='name'>
       <span>MONASTIC INSTITUTE</span>
<h3>DZONGSAR INSTITUTE</h3>
       </div>

     <p>Epeditation plam id quam qui ut omniend
ipient pera denturesed quet est restiorum-
qui dolore pa perum expe autae simusa udit
eume cum hil mo odiciis ipsa alit a conse-
quam hitatibus et ut in.</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span>  Learn more </span> </div>
   </div>
  </div>
  <div class='grid1' >

<div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
<Image
           className="myImage"
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190591/AirJaldi/f2j0357fxvicngshvsef.jpg"
     alt="Picture of the author"
     layout="fill"
     objectFit="contain"
   />
</div>

<div className="data" >
<div class='name'>
       <span>TELEMEDICINE</span>
<h3>HARISAL DIGITAL VILLAGE</h3>
       </div>
  
  <p>Epeditation plam id quam qui ut omniend
ipient pera denturesed quet est restiorum-
qui dolore pa perum expe autae simusa udit
eume cum hil mo odiciis ipsa alit a conse-
quam hitatibus et ut in.</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
<span>  Learn more </span> </div>
</div>
</div>


<div class='grid1' >

   <div className="wrapper"  style={{  position: 'relative', width:"100%", height: '50%'}} >
   <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190590/AirJaldi/qqgyle8fzxj4ukuou7vo.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
   </div>

   <div className="data" >
   <div class='name'>
       <span>LIVE BROADCAST</span>
<h3>DALAI LAMA’S 80TH BIRTHDAY</h3>
       </div>
     <p>Epeditation plam id quam qui ut omniend
ipient pera denturesed quet est restiorum-
qui dolore pa perum expe autae simusa udit
eume cum hil mo odiciis ipsa alit a conse-
quam hitatibus et ut in.</p>
<div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
<span>  Learn more </span> </div>
   </div>
  </div>
 


</div>
</div>
    </div>


<div className='grid-1' >

    <div className='left' style={{  position: 'relative', width:"50%", height: '100%'}} >
    <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190591/AirJaldi/s8l2fydbecxfe5w38m54.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
    </div>

    <div className='right' >

   <div class="text" >
  <h2>
  “Our village is in a very remote place
adn we didn’t have any internet
facilities before AirJaldi arrived here.
Now, we no longer need to commute
70-80 Km to get connected.”
  </h2>
  <span>Piyush Manviya, Private User, Katkumbh, Maharashtra</span>

   </div>

   <div className='link' >
<i className="fas fa-long-arrow-alt-right"></i>
 <span> Watch the video </span> </div>

    </div>

</div>


      </Section>

     
      
    </>
  );
}