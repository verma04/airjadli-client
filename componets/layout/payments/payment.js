import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Section} from './style'
import Image from 'next/image';
import Facts from './facts/fact'
import Images from './Image/Image'
import Page from './page/Page'
import Head from 'next/head';
function payment() {
    return (
        <>
             <Head>
    <title>Payments - AirJaldi</title>
  </Head>
        <Section>
        <Navbar/>
        <div class="grid">
    <Image
              className="myImage"
        src="https://res.cloudinary.com/airjaldi/image/upload/v1622693976/AirJaldi_New_Year_3_h9mo2g.jpg"
        alt="Picture of the author"
        layout="fill"
       
        objectFit="cover"
      />



      <div class='card'  >
       

      <div class='card-1'  >
  <div class='grid1' >

      <h1>PAY BILLS ONLINE
SAFE & EASY.</h1>

<button onClick={()  =>  window.open('https://billing.airjaldi.net', '_blank')  }  >Pay your bill now</button>

<span>For new connection and help with billing 
    <br></br>
    <li>please contact 18001213648</li>
</span>

  <h1>

      </h1>

   
  </div>
 



 


</div>
</div>
   
   
   
    </div>




        </Section>
           
            <Facts/>

            <Images/>
            <Page/>

            <Footer/>
        </>
    )
}

export default payment
