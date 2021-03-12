import React from 'react'
import { Section} from './Style'
import Image from 'next/image' 
function Stat() {
    return (
        <Section>
             <div class="flex" >
           <div class="head" >
               <h1>VITAL STATISTICS</h1>
                </div>

               <div className="data" >
               <div className="left" >
               <div className="data" >

                   <h2>No. of Networks</h2>
                   <p>AirJaldi presently owns and runs ten networks in six
Indian states:
Himachal Pradesh: Kangra District, Mandi, Manali, Palampur, Chamba
Uttarakhand : Dehradun, Pauri, Tehri, Uttarkashi, Kumaon Districts
Jharkhand: Ranchi, Sahibganj, Hazaribagh
Karnataka: Mundgod Districts, Bylakuppe Districts
Maharashtra: Harisal in Amravati Districts
Bihar: Bodhgaya District</p>
                    </div>
                    <div className="set" >

                 <h2> Overall coverage of Networks</h2>  
<p>24,200 km </p>
                    </div>
                    <div className="set" >

              <h2>Team members</h2>      
  <p>130 +</p>
                    </div>
                    <div className="set" >

             <h2>  Accounts</h2>     
<p>More than 60,000*</p>
                    </div>
                    <div className="set" >
                  <h2> Users/beneficiaries</h2> 
 <p>~100,000**</p>
                    </div>

                    <div className="set" >
                 <h2>   Longest Wireless link </h2>
 <p>54 Km</p>
                    </div>


               </div>

               <div className="right" >

               <div className="bottom" >
                         <p>* This number includes fixed wireless and
hotspot clients</p>
<p>
** Many of our clients are institutions and bu-
siness. These clients in turn enable access
to multiple users. The number provided
here is an estimate of the number of these
users/ beneficiaries).
</p>
               </div>
                     
   
                     </div>

                   </div> 
               </div> 
     
     
     
       
       
       
        </Section>
    )
}

export default Stat
