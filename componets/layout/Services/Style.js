

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media (min-width: 1035px) {
 
    .grid {

        width:100%;
        height:40rem;
        position: relative;

       
    }
    .card {
        position:absolute;
        
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
       
        height:70%;
        .card-1 {
            display:flex;
        justify-content:space-between;
        align-items:center;
        height:100%;
        width:80%;
      
        .grid1 {
             width:50%;
             height:50%;
             background-color:white;
             display:flex;
        justify-content:center;
   
    
        align-items:center;
        h1 {
            margin-top:10%;
      
            width:90%;
            text-align:center;
            text-align:center;
        height:100%;
        }
           
        }
    
    }
    }

  

}

@media (max-width: 600px) {
    margin-top:20%;
    z-index:-1;
.grid {
   
    width:100%;
    height:30rem;
    position: relative;

   
}
.card {
    position:absolute;
    bottom:7%;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
   
    height:100%;
    .card-1 {
        display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
    width:80%;
  
    .grid1 {
         width:100%;
         height:70%;
         background-color:white;
         display:flex;
    justify-content:center;


    align-items:center;
    h1 {
        margin-top:10%;
  
        width:90%;
        text-align:center;
        text-align:center;
    height:100%;
    }
       
    }

}
}



}
`