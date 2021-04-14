

import styled from 'styled-components'



export const News = styled.div`
display:flex;
justify-content:center;
height:100%;
background-color: #1690D2;
margin-top:5rem;
@media (min-width: 1035px) {

    .flex {
        height:20rem;
      
        width:80%;
        display:flex;
        justify-content:space-around;
       align-items:center;
       flex-direction:column;

       h2 {
        
         margin-top:2rem;
         font-size:3.2rem;
         color:white;
        
         width:100%;
         text-align:center;
         word-spacing: 0.1rem;
       font-family:1000;
       }
       button {
         font-size:1.4rem;
         color:#1690D2;
         background-color:white;
         padding:0.7rem;
          width:15rem;
         border:none;
         font-weight:900;
         border-radius:0.5rem;
         margin-bottom:1rem;

       }
    
    }

}

@media (max-width: 600px) {

.flex {
    height:15rem;
  
    width:80%;
    display:flex;
    justify-content:space-around;
   align-items:center;
   flex-direction:column;

   h2 {
     font-size:2.2rem;
     color:white;
     word-spacing: 0.1rem;
    text-align:center;
   }
   button {
     display:none;
     font-size:1.5rem;
     color:${props => props.theme.colors.blue};
     background-color:white;
     padding:0.5rem;
     border:none;
     font-weight:900;
     border-radius:0.5rem;

   }

}

}
`