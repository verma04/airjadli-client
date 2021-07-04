import React , { useEffect, useState } from 'react';
import { Section } from './Style';
import AllTeam from './List';
import axios from 'axios';
import Mang from './Mangement';
import Reg  from './regional'
import Tech from './tech'
import Head from './Head'
import Network from './Netwrk'
import Masonry from "react-responsive-masonry"
import { useQuery } from "react-query";
import Loading from '../../../Loading/Loading';


import useAxios from 'axios-hooks'
function Aboutus({page}) {

  useEffect( async () => {
    axios.get(`http://sandbox.airjaldi.com:3000/api/client/allpeople`)
    .then(res => {
      const people = res.data;
      setdata( people );
    })
  }, [] )



   
    const [  active , setActive] = useState("All");
    const [  data , setdata] = useState("");
   
    if (data === "") return <p> </p>
 


    return (
     
        <Section>
           <div class="flex" >
           <div class="head" >
           <span  id={active === "All" ? "active" : ""}  onClick={() => setActive("All")  }   >All</span>
               {page.category.sort((a, b) => a.categoryId - b.categoryId).map((number) => 
               <>
           
               {number.category === "Member" ?
               (
                <span id={active === "Member" ? "active" : ""}  onClick={() => setActive("Member")  }   >Network</span>
  
               ):
(    <span id={active === number.category ? "active" : ""}  onClick={() => setActive(number.category)  }   >{number.category}</span>)

               }
            
             </>
               
           
               )
}
</div>
     
               <div className="data" >

           
            <AllTeam list={data}   active={active} />
        
            
                   </div> 
              
                
               </div> 
        </Section>




);
}
export default Aboutus
