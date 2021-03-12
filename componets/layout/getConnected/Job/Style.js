

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;


@media (min-width: 1035px) {

   .flex {
       width:80%;
       
       display:flex;
       justify-content:center;
     flex-direction:column;

     .flex-1 {
        margin-top:2rem;
     .head {
         height:3rem;
         display:flex;
       justify-content:center;
     flex-direction:column;
     h2 {
     color: ${props => props.theme.colors.blue};
     font-size:1.7rem;
     }
     }
     .data {
         display:flex;
         justify-content:space-between;

         .left {
             width:45%;
            
             display:flex;
             justify-content:center;
             flex-direction:column;
             .des {
                 display:flex;
                 display:flex;
             justify-content:center;
             flex-direction:column;
             margin-top:1rem;
             h3 {
                 font-weight:900;
             }
             p {
                 margin-top:0.5rem;
             }
             }
         }
         .right{
             width:45%;
             
             display:flex;
             justify-content:flex-end;
             align-items:flex-end;
             flex-direction:column;
             .box {
                 height:40%;
                 width:100%;
                 
                 background-color: ${props => props.theme.colors.lightblue};
                 display:flex;
             justify-content:flex-start;
             align-items:center;
             flex-direction:column;
             .contact {
                 width:80%;
                
               h3 {
                color: ${props => props.theme.colors.blue};
                font-weight:900;
               }
               p {
                color: ${props => props.theme.colors.blue};
               }
                 margin-top:5%;
             }
             .bottom {
                 width:80%;
                 text-align:left;
                 margin-top:3%;
                color: ${props => props.theme.colors.blue};
             }
             }
         }
     }

     }
   }

  

}

@media (max-width: 600px) {

.flex {
    width:90%;
    
    display:flex;
    justify-content:center;
  flex-direction:column;
  .bird {
        top: 1rem;
      
    height: 38rem;
    position: absolute;

        img {
            width:100%;
            left:0%;
            height:100%;
        }
    }
  .flex-1 {
     margin-top:2rem;
  .head {
      height:3rem;
      display:flex;
    justify-content:center;
  flex-direction:column;
  h2 {
  color: ${props => props.theme.colors.blue};
  font-size:1.7rem;
  }
  }
  .data {
      display:flex;
      justify-content:space-between;
      flex-direction:column;

      .left {
          width:100%;
         
          display:flex;
          justify-content:center;
          flex-direction:column;
          .des {
              display:flex;
              display:flex;
          justify-content:center;
          flex-direction:column;
          margin-top:1rem;
          h3 {
              font-weight:900;
          }
          p {
              margin-top:0.5rem;
          }
          }
      }
      .right{
          width:100%;
          margin-top:1rem;
          display:flex;
          justify-content:flex-end;
          align-items:flex-end;
          flex-direction:column;
          .box {
              height:40%;
              width:100%;
              
              background-color: ${props => props.theme.colors.lightblue};
              display:flex;
          justify-content:flex-start;
          align-items:center;
          flex-direction:column;
          .contact {
              width:80%;
             
            h3 {
             color: ${props => props.theme.colors.blue};
             font-weight:900;
            }
            p {
             color: ${props => props.theme.colors.blue};
            }
              margin-top:5%;
          }
          .bottom {
              width:80%;
              text-align:left;
              margin-top:3%;
             color: ${props => props.theme.colors.blue};
          }
          }
      }
  }

  }
}



}
`