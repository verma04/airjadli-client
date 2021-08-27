import React from 'react';
import  News from '@/componets/layout/InNews/news'


function index({data}) {
    return (
        <div>
            <News data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`https://admin.airjaldi.com/api/client/getNews`)
    const data = await res.json()
  
 
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }


  export default index;