import React from 'react'
import GstRegistration from '../componets/Links/gstRegistration'
import Head from 'next/head';
function gstRegistration({data}) {
    return (
        <div>
            <GstRegistration data={data}/>
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

export default gstRegistration
