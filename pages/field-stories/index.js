import React from 'react'
import  Fs from '@/componets/layout/Fieldstories/Fieldstories'
function index({data}) {
    return (
        <div>
            <Fs data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`https://admin.airjaldi.com/client/fieldStories`)
    const data = await res.json()
  
   
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }
export default index;
