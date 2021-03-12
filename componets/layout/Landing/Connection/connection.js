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
              <div className='top' >

           <h2> Get a <span>Wireless Internet Connection</span> for Your Home or Office.
</h2>  
              </div>
              <div className='bottom' >
              <h2>    Call 1-800-200-9989 or email
support@airjaldi.com to
get connected. </h2>
              </div>
          </div>
          <div className="flex-2" >
          <div className='top' >
     <div className='wrapper' style={{ position: 'relative',height:"100%" , width:"30%"}}  >
       
     <Image
        
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613192388/AirJaldi/skdplwbw7a4sp4ww7dhv.png"
    
     layout="fill"
     objectFit="contain"
   />
     </div>
     </div>
     <div className='bottom' >
         <div className="text" >
      <h2>   Connect to <span>JaldiFi hotspots</span>  with
your devices for high speed wireless
internet access at affordable rates</h2>
         </div>
         <button>Get JaldiFi deals</button>
     </div>
       
          </div>
        
            </div>
        </Foot>
    )
}

export default Navbar
