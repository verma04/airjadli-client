import styled from 'styled-components'




export const Section = styled.section`

 @media (min-width: 1281px) {
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
  
   .flex {
     margin-top:12vh;
     width:50rem;
     height:76%;
     img {
         width: 40rem;
         height: 30rem;
         margin-top: 1rem;
                margin-bottom: 1rem;
           
     }
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          align-items: center;
          width:100%;
          height:100%;
          .head {
              text-align: center;
              font-size:2.5rem;
              font-weight:1000;
              padding-bottom: 0.5rem;
          }
          .data {
            display:flex;
         justify-content:center;
          flex-direction:column;
          align-items: center;
          }
          .category {
            padding-bottom: 0.5rem;
            text-align: center;
          }
          figure {
              width:100%;
          
              display:flex;
              justify-content:center;
              img {
    
                margin-top: 1rem;
                margin-bottom: 1rem;
    
              }
          }
          p {
            text-align: center;
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

 @media (min-width: 1024px) and (max-width: 1280px)  {
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex {
     margin-top:12vh;
     width:76%;
     height:76%;
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;
          .head {
              text-align: center;
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
            text-align: center;
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

 @media (min-width: 768px) and (max-width: 1024px) {

  display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex {
     margin-top:12vh;
     width:80%;
     height:76%;
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;
          .head {
              text-align: center;
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
            text-align: center;
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
 @media (max-width: 767px) {
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex {
    margin-top: 5rem;
     width:90%;
     height:60%;
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;
          .head {
              text-align: center;
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
            text-align: center;
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