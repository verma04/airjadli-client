import styled from 'styled-components'




export const Section = styled.section`
 @media (min-width: 1025px) {
   display:flex;
   justify-content:center;
   
   width:100%;
   height:100%;
   .flex {
     margin-top:12vh;
    width:100%;
     height:76%;
     
     align-items:center;
     display:flex;
         
         justify-content:center;
          flex-direction:column;
          align-items:center;
     .single-post{
         display:flex;
         
         justify-content:center;
          flex-direction:column;
          align-items:center;
          width:81%;
          height:100%;
          .head {
              text-align:left;
              width:100%;
             
              font-weight:1000;
          }
          .category {
            text-align:left;
              width:100%;
             
              
          }
          .data {
              width:100%;
          figure {
              width:100%;
          
              display:flex;
              justify-content:center;
              img {
                width:100%;
              }
          }
          }
          p {
            text-align:left;
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:60%;
              margin-top:0.7rem;
              margin-bottom:0.5rem;
              line-height:1.3;
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
     .section {
         margin-top:2rem;
         display:flex;
         justify-content:space-between;
         align-items:center;
         width:100%;
         height:29rem;
         
         .left {
             display:flex;
             justify-content:center;
             width:50%;
             
             height:100%;
             img {
                 width:100%;
                 height:100%;
             }
         }

         .right {
            width:50%;
            height:100%;
           
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items:center;
            .text {
                width:90%;
                height:90%;
                display:flex;
                justify-content:center;
            
                flex-direction:column;
                h2 {
                    width:80%;
                    font-size:2rem;
                    
                }
                span {
                    margin-top:1rem;
                    font-size:1.3rem;
                }
              
            }
            .link {
               
                width:90%;
                height:10%;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                color:${props => props.theme.colors.blue};
                
                i {
  font-size:1.2rem;
}
span {
    margin-left:0.5rem;
  font-size:1.2rem;
}

                
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

     .section {
         display:flex;
         justify-content:space-between;
         align-items:center;
         width:100%;
         height:30rem;
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