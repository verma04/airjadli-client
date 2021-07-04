import React from 'react'
import  Project from '@/componets/layout/Projects/Project'
function index({data}) {
    return (
        <div>
            <Project data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`http://sandbox.airjaldi.com:3000/client/getprojects`)
    const data = await res.json()
  
   
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }

export default index
