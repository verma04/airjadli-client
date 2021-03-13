

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
    
        .bird {
        top: 11%;
   
    left: 2.5%;
    height: 39rem;
    position: absolute;


        img {
           
            left:0%;
            height:100%;
        }
    }
       
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
    z-index:-1;
margin-top:20%;

.grid {
position: relative;
    width:100%;
    height:30rem;


   
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
    width:90%;
  
    .grid1 {
         width:100%;
         height:55%;
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