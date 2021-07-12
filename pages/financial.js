import React from 'react'
import Financial from '../componets/Links/financial'
import Head from 'next/head';
function financial({data}) {
    return (
        <div>
     
            <Financial data={data}/>
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

export default financial
