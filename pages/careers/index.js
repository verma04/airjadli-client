import React from 'react';
import GetConnected from '@/componets/layout/getConnected/getConnected'

function index({data}) {
    return (
        <div>
            <GetConnected data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`https://admin.airjaldi.com/api/client/getCarrer`)
    const data = await res.json()
  
 
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }


export default index;

