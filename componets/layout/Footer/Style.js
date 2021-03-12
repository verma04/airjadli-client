

import styled from 'styled-components'



export const Foot = styled.footer`
display:flex;
justify-content:center;
height:100%;
background-color: ${props => props.theme.colors.footerColor};
margin-top:10rem;
@media (min-width: 1035px) {

    .flex {
        height:15rem;
      
        width:80%;
        display:flex;
        justify-content:space-between;
       align-items:center;
        
       .flex-1 {
         width:30%;
         height:100%;
      
         
         display:flex;
         justify-content:space-around;
         flex-direction:column;
         .contact {
          line-height: 1.5rem;
          h3 {
            color: white;
          }

         }
         h2 {
               color:white;
             }
       }
       .flex-2 {
         width:30%;
         height:100%;
     
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         .top {
           display:flex;
           justify-content:space-around;
            flex-direction:column;
          
            color:white;
            width:100%;
           height:60%;
           .head{
             width:100%;
             height:30%;
         
             display:flex;
             justify-content:center;
             flex-direction:column;
             h2 {
               color:white;
             }
          
           } 
           .icon {
      
             height:90%;
             
             display:flex;
             justify-content:space-around;
             width:70%;
             align-items:center;
             .fab {
               color: black;
               border-radius:2rem;
               background-color:white;
               font-size:2rem;
               padding:0.5rem;
               cursor: pointer;
             }

             .fa-facebook-f {
              padding-left: 0.9rem;
    padding-right: 0.9rem;
             }
             .fa-twitter-square{
              padding-left: 0.7rem;
    padding-right: 0.7rem;
             }
           }
         }
       }
       .flex-3 {
         width:30%;
         height:100%;
       
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         .top{
           width:100%;
           height:60%;
           display:flex;
           justify-content:space-around;
           flex-direction:column;
           color:white;
           .contact{
           h3 {
            color: white;
          }
           }

         }
       }
    }

}
@media (max-width: 600px) {
  .flex {
        height:30rem;
      
        width:90%;
        display:flex;
        justify-content:space-around;
       align-items:center;
       flex-direction:column;
        
       .flex-1 {
         width:95%;
         height:40%;
         margin-top:1rem;
      
         
         display:flex;
         justify-content:space-around;
         flex-direction:column;
         .contact {
          line-height: 1.5rem;
          h3 {
            color: white;
          }

         }
         h2 {
               color:white;
             }
       }
       .flex-2 {
        width:95%;
         height:30%;
     
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         .top {
           display:flex;
           justify-content:space-around;
            flex-direction:column;
        
            margin-top: 1.5rem;
            color:white;
            width:100%;
           height:60%;
           .head{
             width:100%;
             height:30%;
         
             display:flex;
             justify-content:center;
             flex-direction:column;
             h2 {
               color:white;
             }
          
           } 
           .icon {
         
             height:90%;
             
             display:flex;
             justify-content:space-around;
             width:60%;
             align-items:center;
             .fab {
               color: black;
               border-radius:2rem;
               background-color:white;
               font-size:2rem;
               padding:0.5rem;
               cursor: pointer;
             }

             .fa-facebook-f {
              padding-left: 0.9rem;
    padding-right: 0.9rem;
             }
             .fa-twitter-square{
              padding-left: 0.7rem;
    padding-right: 0.7rem;
             }
           }
         }
       }
       .flex-3 {
        width:95%;
         height:30%;
       
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         .top{
           width:100%;
           height:60%;
           display:flex;
           justify-content:space-around;
           flex-direction:column;
           color:white;
           .contact{
           h3 {
            color: white;
          }
           }

         }
       }
    }

}
`