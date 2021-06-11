import React  , { useState } from 'react'
import {News} from './Style'
import Image from 'next/image'
import  { Pop } from './Pop'
<style jsx>{`
#myImage {
  width: 64px;
}
`}</style>
const Navbar = () => {
    const [pop , setPop  ] = useState(false)
    return (
        <>
        <News>
            <div className="flex" >
           
           <h2>Join Our Newsletter List for Updates & Special Offers</h2>
           <button  onClick={() => setPop(!pop)}  >Get the newsletter</button>
            </div>
        </News>
        {pop ? (
            <Pop>
 <div id="myModal" class="modal">

 
 <div class="modal-content">
   <span onClick={() => setPop(!pop)} class="close">&times;</span>
   <div className="form" >
                 
                 <form>
     
     <div class="group">      
       <input type="text" required/>
       <span class="highlight"></span>
       <span class="bar"></span>
       <label>Your Name</label>
     </div>
 
     <div class="group">      
       <input type="text" required/>
       <span class="highlight"></span>
       <span class="bar"></span>
       <label>Your Email
 </label>
     </div>
 
 
     <button> Send </button>
     
   </form>
 
                 </div>
 
 </div>

</div>
</Pop>
        )
        : (
            null
        )

        }
        </>
    )
}

export default Navbar
