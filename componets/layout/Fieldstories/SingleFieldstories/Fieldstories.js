import React from 'react'
import Head from 'next/head';
import Navbar from '../../Navbar/BlueNavbar';
import Footer from '../../Footer/Footer';
import  { Section } from './Style';
import Image from 'next/image'
import { useQuery } from "react-query";
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Loading from '../../../Loading/Loading';
import ReactPlayer from 'react-player'
const fetchStories = async ( id) => {
 const idd = id.queryKey[1]
  const res = await fetch(`http://sandbox.airjaldi.com:3000/client/getfieldStories/${idd}`);
  return res.json();
};

const convertFromJSONToHTML = (text) => {
    try{
        return { __html: stateToHTML(convertFromRaw(text))}
      } catch(exp) {
        console.log(exp)
        return { __html: 'Error' }
      }
}

function Blog({id}) {
   
    const { data, status } = useQuery(["Stories" , id ], fetchStories);

    return (
        <>
        {status === "error" && <p>Error fetching data</p>}
          {status === "loading" && <Loading/>}
          {status === "success" && (
          
        <div>
            <Navbar/>

            <Head>
        <title>{data.title} - AirJaldi</title>
      </Head>
            <Section>
            <Section>
          <div  className="flex" >
    
      


             <div className="single-post">
            <h1 className="head" >{data.title}</h1>
            

            { data.youtubelink === '' ?
(

  null



):


(

  <ReactPlayer
  volume={0} 
  className='react-player'

  volume={100}
url={data.youtubelink}

loop={true} 

/>

)



 

}
 

            <div className="data"  dangerouslySetInnerHTML={convertFromJSONToHTML(data.description)} ></div>
        </div>
            
        </div>
        <div className="btn" >
            
         
            </div>
        </Section>
           
            
            </Section>
           
           
           
           
            <Footer/>
        </div>
         )}

   </>
    )
}

export default Blog