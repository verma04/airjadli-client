import React from 'react'
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
  const res = await fetch(` https://airjadli.herokuapp.com/api/getNews/${idd}`);
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
            <Section>
            <div  className="flex" >
             <div className="single-post">
            <h1 className="head" >{data.title}</h1>
            

            <div className="data"  dangerouslySetInnerHTML={convertFromJSONToHTML(data.description)} ></div>
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
