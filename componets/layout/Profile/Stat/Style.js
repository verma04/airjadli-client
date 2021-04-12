

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;

@media (min-width: 1035px) {

   .flex{

       height:37rem;

       display:flex;
       justify-content:space-between;
       flex-direction:column;
       width:76%;
       .head {
           width:100%;
           height:5%;
           display:flex;
       justify-content:center;
       flex-direction:column;
       h1 {
    color: ${props => props.theme.colors.blue};
       }
       h2 {
           margin-top:1rem;
       }

       }
       .data {
        display:flex;
       justify-content:space-around;

       width:100%;
           height:95%;
       .left {
           width:50%;
           height:100%;
      
           display:flex;
           justify-content:space-evenly;
           flex-direction:column;
            .data {
                display:flex;
           justify-content:center;
           flex-direction:column; 
           width:100%;
           height:40%;
           h2 {
            font-weight:900;
           } 
       
            }

            .set {
                display:flex;
           justify-content:center;
           flex-direction:column;
           height:10%;
           h2 {
               font-weight:900;
           }
           
            }


       }
       .right {
           width:50%;
           height:100%;
         
           display:flex;
           justify-content:flex-end;
           flex-direction:column;
           align-items:center;
 
           .bottom {
            height:40%;
          width:90%;
        padding-left:6%;
          border-left: 1px solid;
          display:flex;
          flex-direction:column;
           justify-content:center;
           p {
               margin-bottom:1rem;
            
                   width:80%;
               
           }
           }

       }
       
       }

   }
}
  

@media (max-width: 600px) {

    .flex{



display:flex;
justify-content:space-between;
flex-direction:column;
width:90%;
.head {
    width:100%;
    height:5%;
    display:flex;
justify-content:center;
flex-direction:column;
h1 {
color: ${props => props.theme.colors.blue};
}

}
.data {
 display:flex;
justify-content:space-around;
flex-direction:column;
width:100%;
    height:95%;
.left {
    width:100%;
  
    height:40rem;
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
     .data {
         display:flex;
    justify-content:center;
    flex-direction:column; 
    width:100%;
    height:40%;
    h2 {
     font-weight:900;
    } 

     }

     .set {
         display:flex;
    justify-content:center;
    flex-direction:column;
    height:10%;
    h2 {
        font-weight:900;
    }
    
     }


}
.right {
    width:100%;
    height:100%;
  
    display:flex;
    justify-content:flex-end;
    flex-direction:column;
    align-items:center;

    .bottom {
     height:40%;
   width:100%;
 padding-left:6%;

   display:flex;
   flex-direction:column;
    justify-content:center;
    }

}

}

}


}


`