import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Section} from './style'
import Image from 'next/image';
import Facts from './facts/fact'
import Images from './Image/Image'
import Page from './page/Page'
import Head from 'next/head';
function payment({data}) {
    return (
        <>
      <Head>
      <meta charset="UTF-8"/>

<title>Payment - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/payment" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="People - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/payment" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Payment - AirJaldi Networks" />
<meta property='og:description' content="Airjaldi Payments"/>
<meta name='description' content="Airjaldi Payments"/>


<meta name="og:title" content="Payment"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/payment"/>
      
      </Head>
    
     
        <Section>
        <Navbar/>
        <div class="grid">
    <Image
              className="myImage"
        src={data.PaymentAvatar}
        alt="Picture of the author"
        layout="fill"
       
        objectFit="cover"
      />



      <div class='card'  >
       

      <div class='card-1'  >
  <div class='grid1' >

      <h1>{data.Paymenthead1}</h1>

<button onClick={()  =>  window.open('https://billing.airjaldi.net', '_blank')  }  >{data.PaymentButton}</button>

<span>{data.PaymentPara1}
    <br></br>
    <li>{data.PaymentParaBot}</li>
</span>

  <h1>

      </h1>

   
  </div>
 



 


</div>
</div>
   
   
   
    </div>




        </Section>
           
            <Facts data={data}/>

          
            <Page data={data}/>
          
            <Footer/>
        </>
    )
}

export default payment
