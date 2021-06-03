import React from 'react'
import Navbar from '../layout/Navbar/BlueNavbar'
import Footer from '../layout/Footer/Footer'
import  { Section  } from './Style'
import { useQuery } from "react-query";
import Loading from '../Loading/Loading';
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
const fetchLink = async () => {
  const res = await fetch('http://sandbox.airjaldi.com:3000/client/footerLink');
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
function jaldifiTerms() {
    const { data, status } = useQuery("links", fetchLink);
    return (
        <div>
            <Navbar/>
               
    {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && 
      
    <Loading/>
      
      }
      {status === "success" && (
<>
     
            <Section>
            <div  className="flex" >
             <div className="single-post">
            
            

            <div className="data"  dangerouslySetInnerHTML={convertFromJSONToHTML(data.jaldifiTerms)} ></div>
        </div>
            
        </div>
            </Section>
            <Footer/>

            </>
            )}
            
        </div>
    )
}

export default jaldifiTerms
