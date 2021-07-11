import React from 'react'
import  Blog from '@//componets/layout/Fieldstories/SingleFieldstories/Fieldstories'
import axios  from 'axios'
function index({news}) {
    return (
        <div>
        
               <Blog  data={news}/>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://sandbox.airjaldi.com:3000/client/fieldStories');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(news => {
      return {
        params: { id: news.slug }
      }
    })
    
    return {
      paths,
      fallback: false
    }
    
  }

  export const getStaticProps = async (context) => {
   
    const id = context.params.id;

    console.log(id)
 
    const res = await axios.get(`http://sandbox.airjaldi.com:3000/client/getfieldStories/${encodeURI(id)}`);
    const data = await res.data;
    console.log(data)
    return {
      props: { news: data},
      revalidate: 1, 
    }
  }


export default index;