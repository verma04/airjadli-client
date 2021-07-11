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
import {FacebookShareButton, FacebookIcon , EmailShareButton, EmailIcon,   WhatsappIcon, WhatsappShareButton} from "react-share";


const convertFromJSONToHTML = (text) => {
    try{
        return { __html: stateToHTML(convertFromRaw(text))}
      } catch(exp) {
        console.log(exp)
        return { __html: 'Error' }
      }
}

function Blog({data}) {
   
    

    return (
    
          
        <div>
            <Navbar/>

            <Head>
      <meta charset="UTF-8"/>

<title>{data.title} - AirJaldi Networks</title>

<link rel="canonical" href={`https://airjaldi.com/field-stories/${data.slug}`} />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content={data.title - "AirJaldi Networks"} />
<meta property="og:url" content="https://airjaldi.com/field-stories" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content={`https://airjaldi.com/field-stories/${data.slug}`} />
<meta name="description" content={data.description}/>

<meta name="og:title" content="field-stories"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content={`https://airjaldi.com/field-stories/${data.slug}`}/>
      
      </Head>
    
  
          
            <Section>
            <Section>
          <div  className="flex" >
    
      


             <div className="single-post">
            <h1 className="head" >{data.title}</h1>
            
            <div className='set' >
              <div className="set-left" >
          <img src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618642890/izo5ri94zqjviheltfps.jpg"} ></img>
             <span id="d"  >AirJaldi Stories</span>
   


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
      url={`http://sandbox.airjaldi.com:5000/field-stories/${data.slug}`}
      title={"AirJaldi Stories"}
      hashtag="#Airjadli"
     
   >
     <FacebookIcon size={36} />
   </FacebookShareButton> </li>
                                       <li>  <EmailShareButton url={`https://niraamya.herokuapp.com`}
   url={`http://sandbox.airjaldi.com:5000/field-stories/${data.slug}`}
   title={"AirJaldi Stories"}
   hashtag="#Airjadli"
   >
     <EmailIcon size={36} />
     </EmailShareButton></li>
                                       <li>
                                         <WhatsappShareButton
     url={`http://sandbox.airjaldi.com:5000/field-stories/${data.slug}`}
     title={"AirJaldi Stories"}
     hashtag="#Airjadli"
     separator=":: "
     
   >
     <WhatsappIcon size={36} />
   </WhatsappShareButton></li>
              </div>
            </div>
            
            

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

    )
}

export default Blog
