import React from 'react'
import { Foot} from './Style'
import Image from 'next/image'
<style jsx>{`
#myImage {
  width: 64px;
}
`}</style>
const Navbar = () => {
    return (
        <Foot>
            <div className="flex" >
              
          <div className="flex-1" >
     
     <div className='head' ><h2>CONTACT US</h2></div>

     <div className ="contact" >
       <h3>Any Queries or Any Comment:</h3>
       <h3>info@airjaldi.net</h3>
     </div>

     <div className ="contact1" >
       <h3>For New Connections & Support:</h3>
       <h3>support@airjaldi.net</h3>
     </div>
     <div className ="contact1" >
       <h3>Call Us Toll-Free:</h3>
       <h3>1-800-121-3648</h3>
     </div>

          </div>
          <div className="flex-2" >
     
          <div className='top' >
          <div className='head' ><h2>FOLLOW US:</h2></div>
           
           <div className='icon' >
           <i class="fab fa-facebook-f"></i>
           <i class="fab fa-twitter"></i>
           <i class="fab fa-youtube"></i>



           </div>
          
        
  </div>
  <div className='down' ></div>
          </div>
          <div className="flex-3" >
    
    <div className='top' > 
          <div className ="contact" >
       <h3>JaldiFi terms</h3>
       
     </div>

     <div className ="contact1" >
       <h3>GST Registration</h3>
     
     </div>
     <div className ="contact1" >
       <h3>Parental controls</h3>
     
     </div>

     <div className ="contact1" >
       <h3>Privacy policy</h3>
     
     </div>
     
     <div className ="contact1" >
       <h3>Terms & Conditions</h3>
     
     </div>
     <div className ="contact2" >
       <h3>© {new Date().getFullYear()}</h3>
       </div>

       <div className='down' ></div>
     </div>

          </div>

            </div>
        </Foot>
    )
}

export default Navbar
