import styled from 'styled-components'




export const Section = styled.section`
 @media (min-width: 1281px) {
   display:flex;
   justify-content:center;
   align-items: center;
   flex-direction: column;
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
         display: flex;
        flex-wrap: wrap;
          align-items:center;
          width:75rem;
          height:100%;
          .head {
             display: flex;
             justify-content: center;
              width:100%;
             
              font-weight:1000;
          }
          .category {
       
              width:100%;
             
              
          }
          .data {
              width:100%;
           
         display: flex;
        flex-wrap: wrap;
          align-items:center;
          justify-content:space-evenly;
          figure {
              width:30%;
          margin-bottom: 0.5rem;
              display:flex;
              justify-content:center;
              img {
                width:100%;
              
              }
          }
          }
          p {
          
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:90%;
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
     .section {
         margin-top:2rem;
         display:flex;
         justify-content:space-between;
         align-items:center;
         width:100%;
         height:35rem;
         
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

 @media (min-width: 1024px) and (max-width: 1280px) {
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
            
              width:100%;
             
              font-weight:1000;
          }
          .category {
          
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
          
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:60%;
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
            
              width:100%;
             
              font-weight:1000;
          }
          .category {
          
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
          
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:60%;
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
 @media (max-width: 767px) {
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex {
     margin-top:12vh;
    width:100%;
     height:95%;
     
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
          width:95%;
          height:100%;
          .head {
            
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
                width:70%;
              }
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
     .section {
         margin-top:2rem;
         display:flex;
         justify-content:space-between;
          flex-direction:column;
         align-items:center;
         width:100%;
       
         
         .left {
             display:flex;
             justify-content:center;
             width:95%;
             height:29rem;
             height:100%;
             img {
                 width:100%;
                 height:100%;
             }
         }

         .right {
            width:95%;
            height:100%;
            height:29rem;
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items:center;
            .text {
                width:100%;
                height:90%;
                display:flex;
                justify-content:center;
            
                flex-direction:column;
                h2 {
                    width:100%;
                    font-size:2rem;
                    text-align:center;
                    
                }
                span {
                  text-align:center;
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
`