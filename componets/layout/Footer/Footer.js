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

     <div className ="contact" >
       <h3>For New Connections & Support:</h3>
       <h3>support@airjaldi.net</h3>
     </div>
     <div className ="contact" >
       <h3>Call Us Toll-Free:</h3>
       <h3>1-800-121-3648</h3>
     </div>

          </div>
          <div className="flex-2" >
     
          <div className='top' >
          <div className='head' ><h2>FOLLOW US:</h2></div>
           
           <div className='icon' >
           <i class="fab fa-facebook-f"></i>
           <i class="fab fa-twitter-square"></i>
           <i class="fab fa-youtube"></i>



           </div>
          
        
  </div>
  <div className='down' ></div>
          </div>
          <div className="flex-3" >
    
    <div className='top' > 
          <div className ="contact" >
       <h3>PRIVACY POLICY</h3>
       
     </div>

     <div className ="contact" >
       <h3>TERMS AND CONDITIONS</h3>
     
     </div>
     <div className ="contact" >
       <h3>© AirJaldi 2021</h3>
       </div>

       <div className='down' ></div>
     </div>

          </div>

            </div>
        </Foot>
    )
}

export default Navbar
