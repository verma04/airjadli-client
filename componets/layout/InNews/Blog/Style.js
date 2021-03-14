import styled from 'styled-components'




export const Section = styled.section`
 @media (min-width: 1025px) {
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex {
     margin-top:12vh;
     width:60%;
     height:60%;
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;
          .head {
              text-align:left;
              font-size:2.5rem;
              font-weight:1000;
          }
          figure {
              width:100%;
          
              display:flex;
              justify-content:center;
              img {
                width:100%;
              }
          }
          p {
            text-align:left;
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:100%;
              margin-top:0.7rem;
              margin-bottom:0.5rem;
          }
          h2 {
            font-weight:900;
          }
          h1 {
              margin-top:2rem;
              margin-bottom:0.9rem;
          }
          li {
              list-style:disc;
              margin-left:1.5rem;
              font-size:1.2rem;
              margin-top:0.5rem;
              margin-bottom:0.5rem;
          }
     }
   }
   .btn {
       position:fixed;
       right:2%;
       top:12vh;
     
       display:flex;
       justify-content:center;
        flex-direction:column;
        button {
            width:10rem;
            margin-top:2rem;
            font-size:1.5rem;
        }
    
   }
 }
 @media (max-width: 600px) {
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex {
    margin-top: 3%;
     width:90%;
     height:60%;
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;
          .head {
              text-align:left;
              font-size:2.5rem;
              font-weight:1000;
          }
          figure {
              width:100%;
          
              display:flex;
              justify-content:center;
              img {
                width:100%;
              }
          }
          p {
            text-align:left;
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:100%;
              margin-top:0.7rem;
              margin-bottom:0.5rem;
          }
          h1 {
              margin-top:2rem;
              margin-bottom:0.9rem;
          }
          li {
              list-style:disc;
              margin-left:1.5rem;
              font-size:1.2rem;
              margin-top:0.5rem;
              margin-bottom:0.5rem;
          }
     }
   }
   .btn {
       position:fixed;
       right:2%;
       top:12vh;
     
       display:flex;
       justify-content:center;
        flex-direction:column;
        button {
            width:10rem;
            margin-top:2rem;
            font-size:1.5rem;
        }
    
   }
 }
`