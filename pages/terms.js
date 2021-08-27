import React from 'react'
import Terms from '../componets/Links/terms'
import Head from 'next/head';
function terms({data}) {
    return (
        <div>
                      <Head>
    <title>Terms - AirJaldi</title>
  </Head>
            <Terms data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`https://admin.airjaldi.com/client/footerLink`)
    const data = await res.json()
  
   
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }
export default terms
