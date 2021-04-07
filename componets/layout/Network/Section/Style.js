

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;

@media (min-width: 1035px) {

    .grid {

        width:100%;
       
        display:flex;
        justify-content:center; 
        flex-direction:column;
        align-items:center;

          .head {

              width:60%;
              align-items:center;
              text-align:center;

          }

          .data {
              display:flex;
              justify-content:center;
              align-items:left;
              flex-direction:column;
              width:76%;
              
         margin-top:5rem;
              .set {
                display:flex;
              justify-content:center;
              align-items:left;
              flex-direction:column;
              width:60%;
               
              h2 {
                  width:70%;
                color: ${props => props.theme.colors.blue};
              }
              p {
                  margin-top:1rem;
              }
              }
          }

          .data-1 {
            display:flex;
              justify-content:flex-end;
              align-items:left;
              margin-top:5rem;
         height:25rem;
       
              
              width:100%;
              
       

         .right {
             width:50%;
             
             height:100%;
             position: relative;
             display:flex;
             justify-content:center;
             flex-direction:column;
         }
         .left {
             width:40%;
             
             height:100%;
             display:flex;
             justify-content:space-evenly;
             flex-direction:column;

              p {
                  width:90%;
              }
              
                button {
         font-size:1.5rem;
         background-color:${props => props.theme.colors.blue};
    width:40%;
         padding:0.5rem;
         border:none;
         color:white;
         font-weight:900;
         border-radius:0.5rem;

       }
       h2 {
        color:${props => props.theme.colors.blue};
       }
              
           
         }
          }
    
       
    

       
    }
    

  

}

@media (max-width: 600px) {

.grid {

    width:90%;
   
    display:flex;
    justify-content:center; 
    flex-direction:column;
    align-items:center;

      .head {

          width:100%;
          align-items:center;
          text-align:center;

      }

      .data {
          display:flex;
          justify-content:center;
          align-items:left;
          flex-direction:column;
          width:100%;
          
     margin-top:5rem;
          .set {
            display:flex;
          justify-content:center;
          align-items:left;
          flex-direction:column;
          width:100%;
           
          h2 {
              width:100%;
            color: ${props => props.theme.colors.blue};
          }
          p {
              margin-top:1rem;
          }
          }
      }

      .data-1 {
        display:flex;
          justify-content:flex-end;
          align-items:left;
          margin-top:5rem;
     height:25rem;
   
          
          width:100%;
          
   

     .right {
         width:50%;
         
         height:100%;
         position: relative;
         display:flex;
         justify-content:center;
         flex-direction:column;
     }
     .left {
         width:40%;
         
         height:100%;
         display:flex;
         justify-content:space-evenly;
         flex-direction:column;

          p {
              width:90%;
          }
          
            button {
     font-size:1.5rem;
     background-color:${props => props.theme.colors.blue};
width:40%;
     padding:0.5rem;
     border:none;
     color:white;
     font-weight:900;
     border-radius:0.5rem;

   }
   h2 {
    color:${props => props.theme.colors.blue};
   }
          
       
     }
      }

   


   
}




}
`