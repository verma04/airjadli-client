import React , { useState } from 'react';
import { Section } from './Style';
import AllTeam from './List';

import Mang from './Mangement';
import Reg  from './regional'
import Tech from './tech'
import Head from './Head'
import Network from './Netwrk'
import Masonry from "react-responsive-masonry"
import { useQuery } from "react-query";
import Loading from '../../../Loading/Loading';
const fetchAllPeople = async () => {
  const res = await fetch("https://airjadli.herokuapp.com/api/client/allpeople");
  return res.json();
};


function Aboutus({page}) {
    const { data, status} = useQuery("AllPeople", fetchAllPeople);
  ;
    const [  active , setActive] = useState("Board");
  
    return (
      <>
      {status === "error"  && <p>Error fetching data</p>}
      {status === "loading" && <Loading/>  }
      {status === "success" && (
        
        <Section>
           <div class="flex" >
           <div class="head" >
    
               {page.category.filter(element => element.category !== "Member").map((number) => 
               <>
               <h2  id={active === number.category ? "active" : ""}  onClick={() => setActive(number.category)  }   >{number.category}</h2>
             </>
               
   
   
               )
}
</div>
     
               <div className="data" >

           
            <AllTeam list={data}   active={active} />
        
            
                   </div> 
              
                <div className="btn" >
                  <button>Load More</button>
                </div>
               </div> 
        </Section>



)}
</>
);
}
export default Aboutus
