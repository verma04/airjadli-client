import React from 'react';
import  Services from '@/componets/layout/Services/services'
function index({data}) {
    return (
        <div>
            <Services data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`https://admin.airjaldi.com/api/client/getServices`)
    const data = await res.json()
  
   
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }
export default index;
