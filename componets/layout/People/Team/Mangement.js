import React from 'react'
import Image from 'next/image'
function AllTeam() {
    return (
        <div  className="team"  >
      
            <div  className="member"  >
            <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190586/AirJaldi/nxzha0xhuxka8dhug95g.jpg"
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
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190586/AirJaldi/lccrzcgix4yoiwpeup8i.jpg"
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
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190586/AirJaldi/bv6shfyofsw5hvjrga7z.jpg"
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
