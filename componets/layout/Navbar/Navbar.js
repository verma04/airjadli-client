import React , {useState} from 'react'
import { Nav} from './Style'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  , faBars } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from "react-query";
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';


const saerchNavbar = async (sea) => {
  const idd = sea.queryKey[1]
  const res = await fetch(`https://admin.airjaldi.com/api/client/search/${idd}`);
  return res.json();
};
 
const Navbar = () => {
  const [sea, setsea] = useState(null);
  const { data, status } = useQuery( ["search" , sea ], saerchNavbar);
  const [pop, setPop] = useState(true);

  
  const smtoggle = () => {
    setPop(!pop)
     } 
  const [search, setSerach] = useState(true);
  
   const router = useRouter();
  
  
   const toggle = () => {
     setSerach(!search)
   } 
   const change= (e) => {
   setsea(e.target.value)
   }
  
   const convertFromJSONToHTML = (text) => {

    try{
        return { __html: stateToHTML(convertFromRaw(text))}
      } catch(exp) {
        console.log(exp)
        return { __html: 'Error' }
      }
}


 
    return (

      
        <Nav>
       


      {(() => {
        if (search) {
          return (
                   
 <div class="flex" >

 <div    onClick={() =>router.push("/")}  class="nav-img" >
               <Image
               className="myImage"
               src={`${process.env.url}/opzgbjka9kd6japxx0ye.png`}
               alt="Navbar Logo"
         
         layout="fill"
         objectFit="contain"
        
       />
  
               </div>
               <div  id="nav1" class="nav-item" >
               <span id={router.pathname === "/profile" ? "active" : ""} >    WHO WE ARE </span>
               <div className="tri" ></div>
               <div class="dropdown-content">
 
                 
        <div className="content" >
        <div className="list" >
        <h3 id={router.pathname == "/profile" ? "active" : ""} >  <Link  href="/profile" >  Profile</Link></h3>
         <h3 id={router.pathname == "/people" ? "active" : ""}> <Link   href="/people" >People</Link></h3>
         <h3  id={router.pathname == "/careers" ? "active" : ""}>  <Link   href="/careers" >Careers</Link></h3>
         <h3 className="news" id={router.pathname == "/news" ? "active" : ""} >  <Link  href="/news" >In the News</Link></h3>
         <h3 id={router.pathname == "/partnerships" ? "active" : ""}>  <Link   href="/partnerships">Partnerships</Link></h3>
        </div>
       
       
 
        </div>
   </div>
             
             
               </div>
        
               <div     class="nav-item" >
               <span id={router.pathname === "/networks"    ? "active" : ""} >       WHAT WE DO     </span>
 
               <div className="tri" ></div>
               <div class="dropdown-content">
 
                 
        <div className="content" >
       
        <div className="list" >
        <h3 id={router.pathname == "/networks" ? "active" : ""}>  <Link    href="/networks" >Networks</Link></h3>
        <h3 id={router.pathname == "/projects" ? "active" : ""}>  <Link    href="/projects" >Projects</Link></h3>

        <h3 id={router.pathname == "/training" ? "active" : ""}>  <Link    href="/training" >Training</Link></h3>
        <h3 className="news" id={router.pathname == "/field-stories" ? "active" : ""}>  <Link    href="/field-stories" >Field Stories</Link></h3>
        </div>
     
 
        </div>
   </div>
             
             
               </div>
               <div class="nav-item" >

      

               <span  onClick={() =>router.push("/services")}    >  OUR SERVICES </span>
 
               <div className="tri" ></div>
          
             
               </div>
               <div class="nav-item" >
               <span id={router.pathname == "/get-connected" ? "activesm" : ""}  >   <Link  href="/contact" >  CONTACT US  </Link> </span>

           
               </div>

               <div class="nav-item" >
               <span id={router.pathname == "/faqs" ? "activesm" : ""}  >   <Link  href="/faqs" > FAQ  </Link> </span>

           
               </div>
               <div class="nav-item" >
               <span>    <Link  href="/payments" >MAKE PAYMENT</Link>     </span>
               </div>
   
            
            
              <i onClick={() => toggle() } class="fas fa-search"></i>

              {(() => {
        if (pop) {
          return (
            <i  onClick={() => smtoggle() }  class="fas fa-bars"></i>
          )
        } else {
          return (
            <i  onClick={() => smtoggle() }  class="fas fa-times"></i>
          )
        }
      })()}
              
            
             </div>
 
 
        
          )
        }  else {
          return (
            <>
            <div className="search" >

              <div className="input" >

   <div className='input-field' >
     <input onChange={change} value={sea}  autofocus placeholder="Find here what you are lokking for" ></input>
   </div>
<div onClick={() => toggle() }  className="close" >
   <i   class="fas fa-times"></i>
   </div>
   </div>
            </div>
           
            {status === "loading" && 
                  <div className="data" >
                  <div className="data-2" >
                

                  <div className='spinner' >
               <h3> Loading ...</h3>
            <img src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1610968677/pnawdrirgbwerhgt1fkx.gif' ></img>
        </div>
</div>
                 </div>
            }
   
   {sea === null ? 
   (
    null
   )
   :
   (
     <>
    {status === "success" && (
      <>
{data.news.length < 1 && data.network.length < 1 && data.field.length < 1 && data.project.length < 1 ?
           (
             <div className="data" >
                <div className="data-2" >
              

                <div className='spinner' >
           <h3>     Does not match any results </h3>
          <img src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1610968677/pnawdrirgbwerhgt1fkx.gif' ></img>
      </div>
</div>
               </div>
           )
           :
           (
             <div className="data" >
             <div className="data-2" >
               {data.network.length < 1 ? 
               (
null
               )
               :
               (
                 <div className="news" >
             
 
                 {data.network.map((number, i)  => 
                 <div className="news-1" >
                   <img src={  process.env.url +  number.featureImg} ></img>
                   <ul>
 <li><h3>Network</h3></li>
   <li>{number.cityName} </li>
   <li></li>
   <li  onClick={()=> router.push(`/networks/${number.slug}`)} >View <img alt="Image Arrow" src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img></li>
     </ul>
               </div>
                 )}

                 
               
               
               </div>
               
               )

               }
               
               {data.news.length < 1  ? 
               (
null
               )
               :
               (
               <div className="news" >
             

{data.news.map(number => 
<div className="news-1" >
 <img src={ process.env.url +  number.featureImg} ></img>

 <ul>
 <li><h3>News</h3></li>
   <li>{number.title} </li>
   <li><p>{number.newsDescription} </p> </li>
   <li  onClick={()=> router.push(`/news/${number.slug}`)} >View <img alt="Image Arrow" src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img></li>
     </ul>

 </div>
)}
               </div>
               )
}

{data.project.length < 1 ? 
               (
null
               )
               :
               (
               <div className="news" >
             

             {data.project.map(number => 
             <div className="news-1" >
               <img src={ process.env.url + number.featureImg} ></img>
               <ul>
 <li><h3>Projects</h3></li>
   <li>{number.title} </li>
   <li><p>{number.description} </p></li>
   <li  onClick={()=> router.push(`/projects/${number.slug}`)}  >View <img alt="Image Arrow" src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img></li>
     </ul>
               </div>
             )}
                             </div>

               )
             }
{data.field.length < 1 ? 
               (
null
               )
               :
               (
                             <div className="news" >
             

             {data.field.map(number => 
             <div className="news-1" >
               <img src={ process.env.url + number.featureImg} ></img>
               <ul>
 <li><h3>Field Stories</h3></li>
   <li>{number.title} </li>
  <li></li>
   <li  onClick={()=> router.push(`/field-stories/${number.slug}`)} ><h3>View</h3> <img alt="Image Arrow" src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img></li>
     </ul>
               </div>
             )}
                             </div>

)
}  _
                       
                       
         
             </div>
           </div>
           
           )

   }

     
       </>
          )}
          </>
   )

   }

          
       </> 
          )
        }
      })()}

{!pop &&
<div className="sm" >

<div class="logo" >

  <div class="img" >
    <img onClick={() =>router.push("/")} src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1614312333/AirJaldi/opzgbjka9kd6japxx0ye.png'} ></img>
  </div>

<i  onClick={() => smtoggle() }  class="fas fa-times"></i>
</div>
<div id="first" className="link" >


  <h2>WHO WE ARE</h2>



         
 
        
        <div className="list" >
        <h3 id={router.pathname == "/profile" ? "active" : ""} >  <Link  href="/profile" >  Profile</Link></h3>
         <h3 id={router.pathname == "/people" ? "active" : ""}> <Link   href="/people" >People</Link></h3>
         <h3 id={router.pathname == "/careers" ? "active" : ""}>  <Link   href="/careers" >Careers</Link></h3>
         <h3 id={router.pathname == "/news" ? "active" : ""} >  <Link  href="/news" >In the News</Link></h3>
         <h3 id={router.pathname == "/partnerships" ? "active" : ""}>  <Link   href="/partnerships">Partnerships</Link></h3>
        </div>
       
       
 
  

             

  </div>

  <div id="first"  className="link" >
 <h2>WHAT WE DO</h2> 

 <div  className="list" >
        <h3 id={router.pathname == "/networks" ? "active" : ""}>  <Link    href="/networks" >Networks</Link></h3>
        <h3 id={router.pathname == "/projects" ? "active" : ""}>  <Link    href="/projects" >Projects</Link></h3>
       
        <h3 id={router.pathname == "/training" ? "active" : ""}>  <Link    href="/training" >Training</Link></h3>
        <h3 id={router.pathname == "/field-stories" ? "active" : ""}>  <Link   c href="/field-stories" >Field Stories</Link></h3>
    
        </div>

 
  </div>
  <div id="last"  className="link" >

  <h2  onClick={()=> router.push('/services')}  >Services</h2>

  
  



  </div>

  <div className="link" >
 <h2 id={router.pathname == "/get-connected" ? "activesm" : ""}  >   <Link  href="/contact" > CONTACT US </Link> </h2>

 <div className="list" >
      <h3  style={{marginTop:'1em'}} id={router.pathname == "/faq" ? "active" : ""} >  <Link  href="/profile" >FAQ</Link></h3>
      
        </div>
       
  </div>
  <div className="link" >
 <h2><Link  href="/payments" >MAKE PAYMENT</Link> </h2> 
  </div>
  </div>
   
}
   
      </Nav>
   
   
   
   
   )
}

export default Navbar
