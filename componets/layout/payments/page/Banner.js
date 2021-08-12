import React from 'react'

function Banner({data}) {
    return (
      <>
     
        <div class='grid1' >
           



        <h1>{data.bannerHead}</h1>
  
  <div className='btn' >
  <button onClick={()  =>  window.open('https://billing.airjaldi.net', '_blank')  }  >{data.bannerbutton}</button>
  </div>
 

  
  <span>

 {data.bannerQuery}
<br></br><span> {data.bannerNumber}</span>
  </span>
  
    <h1>
  
        </h1>
  
     
    </div>
    </>
    )
}

export default Banner
