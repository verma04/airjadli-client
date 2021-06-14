import React from 'react'
import Navbar from '../../Navbar/BlueNavbar';
import Footer from '../../Footer/Footer';
import  { Section } from './Style';
import Image from 'next/image'
import { useQuery } from "react-query";
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Loading from '../../../Loading/Loading';
import ReactPlayer from 'react-player'
import {FacebookShareButton, FacebookIcon , EmailShareButton, EmailIcon,   WhatsappIcon, WhatsappShareButton} from "react-share";
const fetchNews = async ( id) => {
 const idd = id.queryKey[1]
  const res = await fetch(`http://sandbox.airjaldi.com:3000/api/getNews/${idd}`);
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

            <div className='set' >
              <div className="set-left" >
          <img src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618642890/izo5ri94zqjviheltfps.jpg"} ></img>
             <span id="d"  >AirJaldi  News</span>
   


             { parseInt((data.description.blocks.length)/2/6) === 0 ? 
                (
                
                  <span>   1 min read <i class="fas fa-star"></i> </span>    
              
               )
                :
                (
                
                
                  <span>     {parseInt((data.description.blocks.length)/2/6)} min read <i class="fas fa-star"></i> </span>    
          
              )

                }






            
              
           
              </div>
              <div className="set-right" >
              <li>   <FacebookShareButton
      url={`http://sandbox.airjaldi.com:5000/news/${id}`}
      title={"AirJaldi News"}
      hashtag="#Airjadli"
     
   >
     <FacebookIcon size={36} />
   </FacebookShareButton> </li>
                                       <li>  <EmailShareButton url={`https://niraamya.herokuapp.com`}
   url={`http://sandbox.airjaldi.com:5000/news/${id}`}
   title={"AirJaldi News"}
   hashtag="#Airjadli"
   >
     <EmailIcon size={36} />
     </EmailShareButton></li>
                                       <li>
                                         <WhatsappShareButton
     url={`http://sandbox.airjaldi.com:5000/news/${id}`}
     title={"AirJaldi News"}
     hashtag="#Airjadli"
     separator=":: "
     
   >
     <WhatsappIcon size={36} />
   </WhatsappShareButton></li>
              </div>
            </div>
            
            

            { data.youtubeLink === '' ||  data.youtubeLink=== undefined ?
(

  null



):


(

  <ReactPlayer
  volume={0} 
  className='react-player'

  volume={100}
url={data.youtubeLink}

loop={true} 

/>

)
}
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
