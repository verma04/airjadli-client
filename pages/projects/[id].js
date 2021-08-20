import React from 'react'
import  Blog from '@//componets/layout/Projects/SingleProjects/Projects'
import axios from 'axios'
function index({news}) {
    return (
        <div>
        
               <Blog  data={news}/>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://sandbox.airjaldi.com:3000/client/getprojects');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.data.map(news => {
      return {
        params: { id: news.slug }
      }
    })
    
    return {
      paths,
      fallback: true
    }
    
  }

  export const getStaticProps = async (context) => {
   
    const id = context.params.id;


 
    const res = await axios.get(`http://sandbox.airjaldi.com:3000/client/getProjects/${encodeURI(id)}`);
    const data = await res.data;
   
    return {
      props: { news: data},
      revalidate: 1, 
    }
  }




export default index;