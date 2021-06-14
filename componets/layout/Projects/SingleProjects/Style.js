import styled from 'styled-components'




export const Section = styled.section`

 @media (min-width: 1281px) {
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
  
   .flex {
     margin-top:12vh;
     width:47rem;
     height:76%;
     img {
         width: 47rem;
  
         margin-top: 1rem;
                margin-bottom: 1rem;
           
     }
     .set {
       margin-top: 1rem;
       width: 100%;
       height: 3rem;;
       display: flex;
       justify-content: space-between;
       .set-left {
         width: 60%;
         height: 100%;
         display: flex;
       justify-content: flex-start;
        align-items: center;
       
       img {
         padding-left: 1rem;;
         padding-right: 1rem;;
         width: 6%;
         height: 90%;
         
         border-radius: 50%;
       }
       #d {
   
color: #0085C5;
padding-left: 1rem;;
         padding-right: 1rem;;

       }
       span {
        padding-left: 1rem;;
         padding-right: 1rem;;
       }
       }

       .set-right {
         width: 25%;
         height: 100%;
         display: flex;
       justify-content: space-around;
        align-items: center;
  
       img {
         width: 10%;
         height: 90%;
       
       }
       li {
         list-style:none;
       }
       }
     }
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          align-items: left;
          width:100%;
          height:100%;
          .head {
              text-align: left;
              font-size:3rem;
            letter-spacing: -0.011em;
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
            text-align: left;
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
            text-align: left;
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
     margin-top:15vh;
     width:76%;
     height:76%;
     .set {
       margin-top: 1rem;
       width: 100%;
       height: 3rem;;
       display: flex;
       justify-content: space-between;
       .set-left {
         width: 60%;
         height: 100%;
         display: flex;
       justify-content: flex-start;
        align-items: center;
       
       img {
         padding-left: 1rem;;
         padding-right: 1rem;;
         width: 6%;
         height: 90%;
         
         border-radius: 50%;
       }
       #d {
   
color: #0085C5;
padding-left: 1rem;;
         padding-right: 1rem;;

       }
       span {
        padding-left: 1rem;;
         padding-right: 1rem;;
       }
       }

       .set-right {
         width: 25%;
         height: 100%;
         display: flex;
       justify-content: space-around;
        align-items: center;
  
       img {
         width: 10%;
         height: 90%;
       
       }
       li {
         list-style:none;
       }
       }
     }
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;
          .head {
              text-align: left;
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
            text-align: left;
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
     margin-top:15vh;
     width:80%;
     height:76%;
     .set {
       margin-top: 1rem;
       width: 100%;
       height: 3rem;;
       display: flex;
       justify-content: space-between;
       .set-left {
         width: 60%;
         height: 100%;
         display: flex;
       justify-content: flex-start;
        align-items: center;
       
       img {
         padding-left: 1rem;;
         padding-right: 1rem;;
         width: 6%;
         height: 90%;
         
         border-radius: 50%;
       }
       #d {
   
color: #0085C5;
padding-left: 1rem;;
         padding-right: 1rem;;

       }
       span {
        padding-left: 1rem;;
         padding-right: 1rem;;
       }
       }

       .set-right {
         width: 25%;
         height: 100%;
         display: flex;
       justify-content: space-around;
        align-items: center;
  
       img {
         width: 10%;
         height: 90%;
       
       }
       li {
         list-style:none;
       }
       }
     }
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;
          .head {
              text-align: left;
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
            text-align: left;
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
              text-align: left;
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
            text-align: left;
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

     .set {
       margin-top: 1rem;
       width: 100%;
     
       display: flex;
       justify-content: space-between;
       flex-direction: column;
       .set-left {
         width: 90%;
         height: 3rem;
         display: flex;
       justify-content: flex-start;
        align-items: center;
       
       img {
         padding-left: 1rem;;
         padding-right: 1rem;;
         width: 6%;
         height: 90%;
         
         border-radius: 50%;
       }
       #d {
   
color: #0085C5;
padding-left: 0.5rem;;
         padding-right: 0.5rem;;

       }
       span {
        padding-left: 1rem;;
         padding-right: 1rem;;
       }
       }

       .set-right {
         width: 90%;
         height: 3rem;
         display: flex;
       justify-content: flex-start;
        align-items: center;
  
       img {
         width: 10%;
         height: 90%;
       
       }
       li {
         list-style:none;
       }
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