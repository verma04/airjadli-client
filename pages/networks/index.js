import React from 'react';
import  Services from '@/componets/layout/Network/Network'

function index({data}) {
    return (
        <div>
            <Services data1={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`http://sandbox.airjaldi.com:3000/client/getNetworkPage`)
    const data = await res.json()
  
 
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }


export default index;
