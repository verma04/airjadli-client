

import styled from 'styled-components'



export const  Section = styled.section`

@media (min-width: 1035px) {
    display:flex;
justify-content:center;
flex-direction:column;

align-items:center;


 

.flex {
    height:100%;
margin-top:5rem;
height:20rem;
    display:flex;
    justify-content:center;
    width:80%;
    height:100%;
    .flex-1 {
  
        width:50%;
        height:100%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        flex-direction:column;
       
        
    }
    .flex-2 {
       
        width:50%;
        height:20rem;
        position: relative;
    }
}
   
   .grid {
       margin-top:4rem;
       display:flex;
       justify-content:space-evenly;
        flex-direction:column;
        width:80%;
       height:30rem;
        
        .one {
            h2 {
                font-weight:1000;
            }
        }
   }
    

  

}

@media (max-width: 600px) {


    display:flex;
justify-content:center;
flex-direction:column;

align-items:center;


 

.flex {
    height:100%;
margin-top:3rem;

    display:flex;
    justify-content:center;
    flex-direction:column-reverse;
    width:90%;
    height:100%;
    .flex-1 {
        height:20rem;
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        flex-direction:column;
       
        
    }
    .flex-2 {
       
        width:100%;
        height:20rem;
        position: relative;
    }
}
   
   .grid {
     display:none;
   }
   
    

  

}
`