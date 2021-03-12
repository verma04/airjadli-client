import React , { useState } from 'react';
import { Section } from './Style';
import AllTeam from './AllTeam';

import Mang from './Mangement';
import Reg  from './regional'
import Tech from './tech'
import Head from './Head'
import Network from './Netwrk'


function Aboutus() {
   
    const [active, setactive] = useState("all");

    const allTeam = () => {
        setactive("all")
    }

    const mangTeam = () => {
        setactive("mang")
    }
    const headTeam = () => {
        setactive("head")
    }
    const techTeam = () => {
        setactive("tech")
    }

    const regTeam = () => {
        setactive("reg")
    }

    const networkTeam = () => {
        setactive("network")
    }
    return (
        <Section>
           <div class="flex" >
           <div class="head" >
               <h2  onClick={() =>allTeam()  } id={active === "all" ? "active" : ""}  >BOARD</h2>
               <h2   onClick={() =>mangTeam()  }  id={active === "mang" ? "active" : ""}  > MANAGEMENT</h2>
               <h2  onClick={() =>headTeam()  }   id={active === "head" ? "active" : ""} > HEAD OFFICE</h2>
               <h2  onClick={() =>techTeam()  } id={active === "tech" ? "active" : ""} > TECH. TEAM</h2>
               <h2  onClick={() =>regTeam()  } id={active === "reg" ? "active" : ""} >  REGIONAL TEAM</h2>
               <h2  onClick={() =>networkTeam()  } id={active === "network" ? "active" : ""} >  NETWORK</h2>
                </div>

               <div className="data" >

               {(() => {
        if (active === "all") {
          return (
            <AllTeam/>
          )
        } else if (active === "mang") {
          return (
            <Mang/>
          )
        } 
        else if (active === "head") {
            return (
            <Head/>
            )
          }
          else if (active === "tech") {
            return (
              <Tech/>
            )
          }
          else if (active === "reg") {
            return (
              <Reg/>
            )
          }
          else if (active === "network") {
            return (
             <Network/>
            )
          }

        
      
      })()}
            
                   </div> 
              
                <div className="btn" >
                  <button>Load More</button>
                </div>
               </div> 
        </Section>
    )
}

export default Aboutus
