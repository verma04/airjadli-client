import React from 'react';
import  Training from '@/componets/layout/Training/Training'
function index({data}) {
    return (
        <div>
            <Training data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`http://sandbox.airjaldi.com:3000/api/client/getTraining`)
    const data = await res.json()
  
   
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }
export default index;

