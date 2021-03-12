import React from 'react'
import Image from 'next/image'
function AllTeam() {
    return (
        <div  className="team"  >
             <div  className="member"  >

             <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>

             <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190589/AirJaldi/eqzxzgaxatfoo1ytemb9.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        style={{}}

        
      />

      

                 <div className='det' >
                     <div className="data" >
                     <h2>Michael Ginguld </h2>
                    <span>Founder, Director
</span>
                      <span>Strategy and Operations</span>
                     </div>
                 </div>
            
            </div>
            <div  className="member"  >
            <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190588/AirJaldi/dgjqi5hu3b9uniyx487t.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        style={{}}
      />

                 <div className='det' >
                     <div className="data" >
                     <h2>Sujnil Battengry </h2>
                     <span>Position</span>
                     <span>Network</span>
                     </div>
                 </div>
            </div>
            <div  className="member"  >
            <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190588/AirJaldi/ikkqhzakuvlrzolw0xwe.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        style={{}}
      />

                 <div className='det' >
                     <div className="data" >
                     <h2>Sujnil Battengry </h2>
                    <span>Position</span>
                      <span>Network</span>
                     </div>
                 </div>
            </div>
           
        </div>
    )
}

export default AllTeam;
