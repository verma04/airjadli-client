import React , {useState} from 'react'
import { Nav} from './Style'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  , faBars } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from "react-query";

const saerchNavbar = async (sea) => {
  const idd = sea.queryKey[1]
  const res = await fetch(`https://airjadli.herokuapp.com/api/client/search/${idd}`);
  return res.json();
};
 
const Navbar = () => {
  const [sea, setsea] = useState('');
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
   console.log(data)

 
    return (

      
        <Nav>
       
      {(() => {
        if (search) {
          return (
                   
 <div class="flex" >

 <div    onClick={() =>router.push("/")}  class="nav-img" >
               <Image
               className="myImage"
         src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1614312333/AirJaldi/opzgbjka9kd6japxx0ye.png"
         alt="Picture of the author"
         
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
        <h3 id={router.pathname == "/projects" ? "active" : ""}>  <Link    href="/projects" >Project</Link></h3>
        <h3 id={router.pathname == "/services" ? "active" : ""}>  <Link   href="/services" >Services</Link></h3>
        <h3 id={router.pathname == "/training" ? "active" : ""}>  <Link    href="/training" >Training</Link></h3>
        <h3 className="news" id={router.pathname == "/field-stories" ? "active" : ""}>  <Link    href="/field-stories" >Field Stories</Link></h3>
        </div>
     
 
        </div>
   </div>
             
             
               </div>
               <div class="nav-item" >
               <span   >  GET CONNECTED </span>
 
               <div className="tri" ></div>
               <div class="dropdown-content">
 
                 
        <div className="content" >
       
       
        <div className="list" >
        <h3 id={router.pathname == "/new-connection" ? "activesm" : ""} className="small" > <Link  href="/new-connection" >Get a new Connection</Link></h3>
        <h3 id={router.pathname == "/customers" ? "activesm" : ""} className="small" >  <Link   href="/customers" >Existing Customers</Link></h3>
        <h3  id={router.pathname == "/faq" ? "active" : ""} >   <Link   href="/faq" >FAQs</Link></h3>
          
        </div>
 
        </div>
   </div>
             
             
               </div>
               <div class="nav-item" >
               <span>         CONTACT US </span>
               </div>
               <div class="nav-item" >
               <span>        MAKE PAYMENT </span>
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
           
            {/* {status === "loading" && <p> dsdsds</p> }
            {status === "success" && (
           <>
            <div className="data" >
              <div className="data-2" >
                
                <div className="news" >
              
                 
   <h1>sddssd</h1>
                  {data.network.map((number, i)  => 
                  <div className="news-1" >
                    <img src={number.featureImg} ></img>
                <h1> {number.cityName}</h1>
                </div>
                  )}

                  
                
                
                </div>
                
                <div className="news" >
              

{data.news.map(number => 
<div className="news-1" >
  <img src={number.featureImg} ></img>
  <h3>{number.title} </h3>
  </div>
)}
                </div>
              </div>
            </div>
            
            </>
               )} */}
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
        <h3 id={router.pathname == "/projects" ? "active" : ""}>  <Link    href="/projects" >Project</Link></h3>
        <h3 id={router.pathname == "/services" ? "active" : ""}>  <Link   href="/services" >Services</Link></h3>
        <h3 id={router.pathname == "/training" ? "active" : ""}>  <Link    href="/training" >Training</Link></h3>
        <h3 id={router.pathname == "/field-stories" ? "active" : ""}>  <Link   c href="/field-stories" >Field Stories</Link></h3>
    
        </div>

 
  </div>
  <div id="last"  className="link" >
  <h2>GET CONNECTED</h2>

  

<div   className="list" >
<h3 id={router.pathname == "/new-connection" ? "activesm" : ""} className="small" > <Link  href="/new-connection" >Get a new Connection</Link></h3>
<h3 id={router.pathname == "/customers" ? "activesm" : ""} className="small" >  <Link   href="/customers" >Existing Customers</Link></h3>
<h3  id={router.pathname == "/faq" ? "active" : ""} >   <Link   href="/faq" >FAQs</Link></h3>
  
</div>


  
  
  </div>

  <div className="link" >
 <h2> CONTACT US </h2>
  </div>
  <div className="link" >
 <h2>MAKE PAYMENT</h2> 
  </div>
  </div>
   
}
   
      </Nav>
   
   
   
   
   )
}

export default Navbar
