import React from 'react';
import { Section } from './Style'
import Image from 'next/image';
function Map() {
    return (
        <Section>
            <div className='flex' >
                
            <div className='flex-1' >
                <p>Harisal is a village situated in the Amravati district, Maharashtra, India. As of the
2011 census, it had a population of 1,479 persons.[citation needed] Harisal is In-
dia’s first digital village and has been adopted by Microsoft.</p>
                <p>In Harisal village population of children with age 0-6 is 205 which makes up 13.86
% of total population of village. Average Sex Ratio of Harisal village is 906 which is
lower than Maharashtra state average of 929. Child Sex Ratio for the Harisal as per
census is 783, lower than Maharashtra average of 894.</p>
                <p>Harisal village has lower literacy rate compared to Maharashtra. In 2011, literacy
rate of Harisal village was 77.94 % compared to 82.34 % of Maharashtra. In Harisal
Male literacy stands at 85.48 % while female literacy rate was 69.82 %.</p>
                
                 </div>
            <div className='flex-2' >
            <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190580/AirJaldi/pmuozbhcvgvsbdtv5dsj.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
        
      />  
                
                 </div>
            
             </div>
       
        <div className='grid' >
<div className="one" >

<h2> Date of Inception</h2>
 <p>24 May 2016</p>
</div>
<div className="one" >
<h2>Size/Spread</h2>
<p>
Harisal is a medium size village located in Dharni Taluka of Amravati district, Maharashtra with
total 324 families residing. The Harisal village has population of 1479 of which 776 are males
while 703 are females as per Population Census 2011.
</p>
</div>
<div className="one" >
<h2>Longest Link </h2>
<p>Some of Our Clients</p>
<p>Anganwadi (Pre-school), Government Health Centre (Harisal), Chikhali (Senior Secondary
School), Wifi Services for the villagers in Harisal.
</p>
</div>
<div className="one" >
<h2>General Overview </h2>
<p>
The village falls under the Dharni Tehsil and is governed by a tahsildar. As per the 2011 census,
Harisal had 324 households with a population of 1,479, consisting of 776 males and 703 fe-
males. About 205 people are children between the ages of one and six. The total Scheduled
Castes and Scheduled Tribes population in the village was 935 people and of which 141 ware
Scheduled Castes, the rest 794 people are Scheduled Tribes.
Located in the Melghat region of Amravati district, the villages close to Harisal are Adhav, Duni,
Kakarmal, Malur, and Mangiya. The surrounding Talukas to Harisal areAchalpur Taluka, Akot
Taluka, Chikhaldara Taluka, and Khalwa Taluka.
</p>
</div>
        </div>
       
        </Section>
    )
}

export default Map
