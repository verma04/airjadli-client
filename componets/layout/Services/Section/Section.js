import Head from 'next/head';
import { useEffect , useState} from 'react'
import { Section} from './Style'


import Modal from '../modal/modal'
import Image from 'next/image';

import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
const convertFromJSONToHTML = (text) => {
  let data = JSON.parse(text)

  console.log(data)

    try{
        return { __html: stateToHTML(convertFromRaw(data))}
      } catch(exp) {
        console.log(exp)
        return { __html: 'Error' }
      }
}



 function Data({ser  }) {

  const [ modal , setmodal] = useState(false)
  

  return (
    <>
    <Head>
      <title>Home - AirJaldi</title>
    </Head>
    <Section>

    <div className="haed" >





              
          </div>

      <div className='flex' >


      {ser.category.map(cat =>
<>
<h2 className="cat"  >{cat.categoryName}</h2>
{ser.servicesSet.filter(element => element.category === cat._id).map((number , index ) => 
          <div   key={number._id} className="flex-1" >

    
    <div className='data' >
   
     <div className='left' >

     <div className="head" >
        <h2>{number.servicesName}</h2>
    </div>

      <div  className="des" >
   
     
    <div  className="data" dangerouslySetInnerHTML={convertFromJSONToHTML(number.servicesveDescription)} />
    
    <h3>For more details email <span>{number.servicesemail} </span> or call {number.servicesContact} </h3>
      </div>
    


    
    
    
     </div>
    
     
    
     <div className='right' >
    
         

     <Image
                  className="myImage"
            src={number.servicesAvatar}
            layout="fill"
            objectFit="cover"
          />
          
    
    </div>
    </div>

    <button  onClick={()=> setmodal(true)} >Conatact Us</button>
    
  

          </div>
     
     
     )}
    


</>

 )


 }
    
        
      </div>
       
         
  



   

    </Section>
   


{modal? 
(
<>
<Modal cat={ser.category} setmodal={setmodal}/>
</>
)
:
(
  <>
  </>
)

}



  </>


  
  
  
  );
}



export default Data;
