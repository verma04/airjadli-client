import React from 'react'
import ParentalControls from '../componets/Links/parentalControls'
import Head from 'next/head';
function parentalControls({data}) {
    return (
        <div>
            <Head>
    <title>Parental Controls - AirJaldi</title>
  </Head>
            <ParentalControls  data={data} />
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
export default parentalControls
