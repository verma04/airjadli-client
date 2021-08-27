import React from 'react'
import JaldifiTerms from '../componets/Links/jaldifiTerms'
import Head from 'next/head';
function jaldifiTerms({data}) {

    return (
        <div>
            <JaldifiTerms  data={data} />
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

export default jaldifiTerms
