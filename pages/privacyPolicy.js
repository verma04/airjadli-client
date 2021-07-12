import React from 'react'
import PrivacyPolicy from '../componets/Links/privacyPolicy'
import Head from 'next/head';
function privacyPolicy({data}) {
    return (
        <div>
                 <Head>
    <title>Parental Controls - AirJaldi</title>
  </Head>
            <PrivacyPolicy  data={data} />
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`http://sandbox.airjaldi.com:3000/client/footerLink`)
    const data = await res.json()
  
   
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }

export default privacyPolicy
