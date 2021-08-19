

import styled from 'styled-components'



export const  Section = styled.section`
@media (min-width: 1035px) {
    display:flex;
justify-content:center;
flex-direction:column;

align-items:center;


 

.flex-0{

margin-top:5rem;


    display:flex;
    justify-content:space-between;
    width:75rem;
    height:100%;
    .flex-1 {
  
        width:48%;
        height:100%;
        display:flex;
        justify-content:center;
        
        flex-direction:column;
     
    }
    .flex-2 {
         
        width:48%;
      
        position: relative;
        iframe {
            min-height:20rem;
            min-width: 100%;
        }
    }
}
   
   .grid {
       margin-top:4rem;
       margin-bottom:4rem;
       display:flex;
       justify-content:space-evenly;
        flex-direction:column;
        width:75rem;
  
        
        h3 {
            font-weight:1000;
        }
        p {
                 margin-top: 0rem !important;
                 
        }
        h3 {
            margin-top: 1.5rem;
        }
        ul {
         display:none;
     }
     li {
         display:none;
     }

       
    
   }
    

  

}

@media (min-width: 1024px) and (max-width: 1280px) {

    display:flex;
justify-content:center;
flex-direction:column;

align-items:center;


 

.flex-0{

margin-top:5rem;


    display:flex;
    justify-content:space-between;
    width:76%;
    height:100%;
    .flex-1 {
  
        width:48%;
        height:100%;
        display:flex;
        justify-content:center;
        
        flex-direction:column;
    
        
    }
    .flex-2 {
         
        width:48%;
      
        position: relative;
        iframe {
            min-height:20rem;
            min-width: 100%;
        }
    }
}
   
   .grid {
       margin-top:4rem;
       margin-bottom:4rem;
       display:flex;
       justify-content:space-evenly;
        flex-direction:column;
        width:76%;
  
        
        h3 {
            font-weight:1000;
        }

        p {
                 margin-top: 0rem !important;
                 
        }
        h3 {
            margin-top: 1.5rem;
        }
    
   }
    

  

}


@media (min-width: 768px) and (max-width: 1024px) {
    display:flex;
justify-content:center;
flex-direction:column;

align-items:center;


 

.flex-0{

margin-top:5rem;


    display:flex;
    justify-content:space-between;
    width:81%;
    height:100%;
    .flex-1 {
  
        width:48%;
        height:100%;
        display:flex;
        justify-content:center;
        
        flex-direction:column;
     
        
    }
    .flex-2 {
         
        width:48%;
      
        position: relative;
        iframe {
            min-height:20rem;
            min-width: 100%;
        }
    }
}
   
   .grid {
       margin-top:4rem;
       margin-bottom:4rem;
       display:flex;
       justify-content:space-evenly;
        flex-direction:column;
        width:76%;
     ul {
         display:none;
     }
        
        h3 {
            font-weight:1000;
        }

       
    
   }
    


}

@media (max-width: 767px) {


    display:flex;
justify-content:center;
flex-direction:column;

align-items:center;


 

.flex-0 {
    height:100%;
margin-top:3rem;

    display:flex;
    justify-content:center;
    flex-direction:column-reverse;
    width:90%;
    height:100%;
    .flex-1 {
        
       padding-top:1rem;
       padding-bottom:1rem;
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        flex-direction:column;
       
        
    }
    .flex-2 {
       
        width:100%;
        height:12rem;
        position: relative;
    }
}
   
.grid {
       margin-top:4rem;
       margin-bottom:4rem;
       display:flex;
       justify-content:space-evenly;
        flex-direction:column;
        width:90%;
     ul {
         display:none;
     }
        
        h3 {
            font-weight:1000;
        }

        p {
                 margin-top: 0rem !important;
                 
        }
        h3 {
            margin-top: 1.5rem;
        }
       

       
    
   }
   
    

  

}
`