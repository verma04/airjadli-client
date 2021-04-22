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
const fetchNews = async ( id) => {
 const idd = id.queryKey[1]
  const res = await fetch(`https://airjadli.herokuapp.com/client/getProjects/${idd}`);
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
   
    const { data, status } = useQuery(["news" , id ], fetchNews);

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
            <div  className="flex" >
             <div className="single-post">
             <h3 className="category" >{data.category}</h3>
            <h2 className="head" >{data.title}</h2>
            

            <div className="data"  dangerouslySetInnerHTML={convertFromJSONToHTML(data.data)} ></div>
        </div>


  
  <div className="section" >

      <div className="left" >
          <img src={data.featureImg} ></img>
      </div>

      <div className='right' >

<div class="text" >
<h2>
“{data.sectionDec}”
</h2>
<span>“{data.sectionTitle}”</span>

</div>



 </div>

  
  </div>
            
        </div>
            </Section>
           
           
           
           
            <Footer/>
        </div>
         )}

   </>
    )
}

export default Blog
