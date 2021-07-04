import React from 'react';
import  Landing from '@/componets/layout/Profile/Profile'
function index({data}) {
    return (
        <div>
            <Landing data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`http://sandbox.airjaldi.com:3000/api/client/getprofile`)
    const data = await res.json()
  
 console.log(data)
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }

   
  

export default index;
