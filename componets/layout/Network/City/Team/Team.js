import React from 'react'
import Image from 'next/image'
import { Section} from './Style'
import { useQuery } from "react-query";
import ReadMoreReact from 'read-more-react';
import Loading from '@/componets/Loading/Loading';

import Masonry from "react-responsive-masonry"

const fetchpeople = async ( id) => {
  const idd = id.queryKey[1]
   const res = await fetch(`http://localhost:3000/api/client/people/${idd}`);
   return res.json();
 };
function AllTeam({data1  , city, id}) {


  
  
    return (
     
     
        <Section>
        <div class="flex" >
                       <div class="head" >
                       <h2>THE {city.cityName} NETWORK TEAM</h2>
                       </div>
                       <div className="data" >
                       <div  className="team"  >
                       <Masonry columnsCount={3} gutter="10px">
     

          {data1.map((number, i) => {
            const height = Math.random() * (500 - 350) + 300;
            return (
              <div  style={{ height: `${height}px`,}}  class="flip-card">
  <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={number.memberAvatar} alt="Avatar" />
         <div className="det" > 
          <div className="data" >
                         <h2>{number.memberName}</h2>
                        <span>{number.memberPosition}
    </span>
                      
                         </div>
                         </div>
        </div>
        <div class="flip-card-back">
          <div className="data" >
          <h1>{number.memberName}</h1> 
          
          <p>{number.memberDescription}</p>
    </div>
        </div>
      </div>
    
                    </div>
            )}
          )}

</Masonry>


                     
           </div> 
           <div  className="team-1"  >
                       <Masonry columnsCount={1} gutter="10px">
     

          {data1.map((number, i) => {
            const height = Math.random() * (500 - 350) + 300;
            return (
              <div  style={{ height: `${height}px`,}}  class="flip-card">
  <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={number.memberAvatar} alt="Avatar" />
         <div className="det" > 
          <div className="data" >
                         <h2>{number.memberName}</h2>
                        <span>{number.memberPosition}
    </span>
                      
                         </div>
                         </div>
        </div>
        <div class="flip-card-back">
          <div className="data" >
          <h1>{number.memberName}</h1> 
          
          <p>{number.memberDescription}</p>
    </div>
        </div>
      </div>
    
                    </div>
            )}
          )}

</Masonry>


                     
           </div> 
                    
   </div>
   </div>
   </Section>
  
          )
      }
export default AllTeam;
