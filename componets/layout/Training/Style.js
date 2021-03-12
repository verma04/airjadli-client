

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media (min-width: 1035px) {
  
    .grid {
        
   position: relative;
        width:100%;
        height:40rem;
    

       
    }
    .card {
        position:absolute;
        bottom:7%;
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
.grid {
  position: relative;
    width:100%;
    height:30rem;


   
}
.card {
    position:absolute;
    bottom:5%;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
   
    height:80%;
    .card-1 {
        display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    height:100%;
    width:100%;
  
    .grid1 {
         width:90%;
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