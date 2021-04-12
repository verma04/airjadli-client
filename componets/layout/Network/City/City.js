import React, {useState, useEffect} from 'react'
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import axios from "axios";
import { Section} from './Style'
import Image from 'next/image';
import Map from './Map/Map';
import Team from './Team/Team'
import router from 'next/router';
import { useQuery } from "react-query";
import Loading from '@/componets/Loading/Loading';
const fetchNetwork = async ( id) => {
  const idd = id.queryKey[1]
   const res = await fetch(`https://airjadli.herokuapp.com/api/client/network/${idd}`);
   return res.json();
 };

 
 
function City({id}) {

  const [people, setpeople] = useState("");
  useEffect( async () => {
    const res = await axios.get(`http://airjadli.herokuapp.com/api/client/people/${id}`)
   
  
    const data = await res.data;
    setpeople(data)
    
  } , [id]);
  
    const convertFromJSONToHTML = (text) => {

        console.log(text)
          try{
              return { __html: stateToHTML(convertFromRaw(text))}
            } catch(exp) {
              console.log(exp)
              return { __html: 'Error' }
            }
      }

      const { data, status } = useQuery(["news" , id ], fetchNetwork);

    
      if(people === '')
      {
        return (
          <Loading/>
        )
      }  

    return (
          <>
        {status === "error" && <p>Error fetching data</p>}
          {status === "loading" && <Loading/>}
          {status === "success" && (
            <>
        
             <Section>
              <div className="flex" >
              <div className="flex-1" >

                  <div className="head" >
              <h1>{data.cityName}</h1>    
                  </div>


                  <div className="data" >
                      <ul>
                          <li>Technical Contact:</li>
                          <li>{data.contact}</li>
                     
                          <li>Email: <span>support@airjaldi.net</span> </li>
                         


                      </ul>
                      <ul>
                          <li>Office Address:</li>
                         <li>{data.address}</li>
                          
                      </ul>

                    











                      
                  </div>
                  
                  </div>
                  <div className="flex-2" >
                  <Image
              className="myImage"
        src={data.featureImg}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
        
      /> 
                  </div>
              </div>
            
            
            </Section >
         <Map  convertFromJSONToHTML={convertFromJSONToHTML}  data={data}/>
       
       
</>
      
         )}
<Team id={id}  data={people} />  
         </>
          )
      }

export default City
