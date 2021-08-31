import React from 'react'
import { Foot} from './Style'
import Image from 'next/image'
import { Router, useRouter } from "next/router";
<style jsx>{`
#myImage {
  width: 64px;
}
`}</style>
const Navbar = () => {
  const router = useRouter();
    return (
        <Foot>
            <div className="flex" >
              
          <div className="flex-1" >
              <div className='top' >

           <h2> Get a <br/> <span>Wireless Internet Connection</span> for Your Home or Office.
</h2>  
              </div>
              <div className='bottom' >
              <h2>    Call 1800-121-3648 or email
 <span  onClick={() => window.open('mailto:support@airjaldi.net') }
      title="support@airjaldi.net"  >support@airjaldi.net </span> to
get connected. </h2>
              </div>
          </div>
          <div className="flex-2" >
          <div className='top' >
     <div className='wrapper' style={{ position: 'relative'}}  >
       
     <Image
        
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617868237/w77nybjkb1ztmbvuw5zu.png"
    
     layout="fill"
     objectFit="contain"
   />
     </div>
     </div>
     <div className='bottom' >
         <div className="text" >
      <h2>Connect to <span>JaldiFi hotspots</span>  with
your devices for high speed wireless
internet access at affordable rates</h2>
         </div>
         <button  onClick={() => window.open('https://www.jaldifi.net/')  }  >Get JaldiFi deals</button>
     </div>
       
          </div>
        
            </div>
        </Foot>
    )
}

export default Navbar
