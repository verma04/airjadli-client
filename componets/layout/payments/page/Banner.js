import React from 'react'

function Banner() {
    return (
      <>
     
        <div class='grid1' >
           



        <h1>Start paying your bills with Airjaldi today</h1>
  
  <div className='btn' >
  <button onClick={()  =>  window.open('https://billing.airjaldi.net', '_blank')  }  >Pay your bill now</button>
  </div>
 

  
  <span>

  For more about payments or resolving payment issues yo may connect with our billing team here,
<br></br>Connect <span> 18001213648</span>
  </span>
  
    <h1>
  
        </h1>
  
     
    </div>
    </>
    )
}

export default Banner
