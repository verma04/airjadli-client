import React from 'react';
import  Profile from '@/componets/layout/People/People'


function index({data}) {
    return (
        <div>
            <Profile data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`http://sandbox.airjaldi.com:3000/api/client/Peopelpage`)
    const data = await res.json()
  
 
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }


export default index;

