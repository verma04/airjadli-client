import  Landing from '@/componets/layout/Landing/Landing'

import React from 'react'

function index({data}) {
  return (
    <div>
  
      <Landing  data={data} />
    </div>
  )
  }


  export async function getStaticProps(context) {
    const res = await fetch(`https://admin.airjaldi.com/client/landing`)
    const data = await res.json()
  
 console.log(data)
  
    return {
      props: { data },
      revalidate: 1,  // will be passed to the page component as props
    }
  }

 


export default index