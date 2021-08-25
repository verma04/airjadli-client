

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
align-items:center;
flex-direction:column;
width: 100%;

button {
        margin-top: 0.5rem;
    width: 10rem;
    padding: 0.5rem;
    border: none;
    font-size: 1.3rem;
    padding: 0.4rem;
    background-color: #0085C5;
    color: white;
    }

span {
    cursor: pointer;
}

@media (min-width: 1281px) {
    

        .logo {
        display:flex;
       justify-content:space-between;
      align-items:flex-start;
       width:77rem;
        
  margin-top: 4rem;
        margin-bottom: 2em;
       
           .logo1 {
               width:23%;
             
            border: 1ox solid red;
               
               display:flex;
       justify-content:space-between;
      align-items:center;
      flex-direction:column;
      .img {
          position: relative;
          width: 100%;
    height: 8rem;

          
          display: flex;
          justify-content: left;
          
          img {
   width:  45% ;
 
          }
     
      }
      h2 {
          
           margin-bottom: 1.5rem;
        margin-top:1rem;
        color: ${props => props.theme.colors.blue};
            text-align:left;
            font-weight:900;
           width: 100%;
           font-size: 1.7rem;
           height: 2rem;
          }
          p {
       height: 6em;
            text-align:left;
            font-size:1.3rem;
              
          }
          button {
              margin-top: 1.5rem;
              width: 100%;
              border-radius: 0%;
          }
           }

          
       }

   

  .flex {
    width:80rem;
     
      display:flex;
      justify-content:center;
    flex-direction:column;
 margin-bottom:2rem;
 .cat {
   color: ${props => props.theme.colors.blue};
   font-size:1.7rem;
    margin-top: 2rem;
    font-weight: 600;
 }
    .flex-1 {
       margin-top:1.5rem;
       margin-bottom: 1rem;
  
    .data {
        display:flex;
        justify-content: space-between;
    

        .left {
            width:48%;
             position: relative;
            display:flex;
            justify-content:flex-start;
            flex-direction:column;
 
 min-height: 15rem;
            .head {
       margin-top: 1rem;
        display:flex;
      justify-content:center;
    flex-direction:column;
    
    h2 {
    color:black;
    font-size:1.5rem;
    font-weight: 800;
    }
    }
            .des {
            
                display:flex;
                display:flex;
            justify-content:center;
            flex-direction:column;
 
          
            p {
                margin-top:0.5rem;
                width: 90%;

               

              
        display:flex;
        justify-content:center;
         flex-direction:column;
   
         height:100%;
         .head {
             text-align:left;
              font-size:1.7rem;
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
   
             margin-bottom:0.5rem;
             width:100%;
             margin-top:0.7rem;
             margin-bottom:0.5rem;
         }
         h1 {
             margin-top:2rem;
             margin-bottom:0.9rem;
         }
         h2 {
           font-weight:900;
         }
         li {
             list-style:disc;
             margin-left:1.5rem;
             font-size:1.2rem;
             margin-top:0.5rem;
             margin-bottom:0.5rem;
         }
    }
           
    
    h3 {
        width: 90%;
       margin-top: 2rem;
    color:black;
    font-size:1.3rem;

      
                font-weight: 1000;
            
            span {
                color: ${props => props.theme.colors.blue};
                text-decoration: underline;
            }

                
    
    }
            }
        
        }
        .right{
            width:45%;
         min-height: 15rem;
            display:flex;
            justify-content:flex-end;
            align-items:flex-end;
            flex-direction:column;
                position: relative;  
          
        }

        

    }
  
    button {
        margin-top: 0.5rem;
    width: 10rem;
    padding: 0.5rem;
    border: none;
    font-size: 1.3rem;
    padding: 0.4rem;
    background-color: #0085C5;
    color: white;
    }
    }
  }

 
  

}



@media (min-width: 1024px) and (max-width: 1280px) {
    
     
    .logo {
        display:flex;
       justify-content:space-between;
      align-items:flex-start;
       width:85%;
        
  margin-top: 4rem;
        margin-bottom: 2em;
       
           .logo1 {
               width:23%;
             
            border: 1ox solid red;
               
               display:flex;
       justify-content:space-between;
      align-items:center;
      flex-direction:column;
      .img {
          position: relative;
          width: 100%;
    height: 8rem;

          
          display: flex;
          justify-content: left;
          
          img {
   width:  45% ;
 
          }
     
      }
      h2 {
          
           margin-bottom: 1.5rem;
        margin-top:1rem;
        color: ${props => props.theme.colors.blue};
            text-align:left;
            font-weight:900;
           width: 100%;
           font-size: 1.7rem;
           height: 2rem;
          }
          p {
       height: 6em;
            text-align:left;
            font-size:1.3rem;
              
          }
          button {
              margin-top: 1.5rem;
              width: 100%;
              border-radius: 0%;
          }
           }

          
       }
 .flex {
    width:80%;
    
     display:flex;
     justify-content:center;
   flex-direction:column;
margin-bottom:2rem;
.cat {
  color: ${props => props.theme.colors.blue};
   font-size:2rem;
   margin-top: 2rem;
   font-weight: 600;
}
   .flex-1 {
      margin-top:1.5rem;
      margin-bottom: 1rem;
 
   .data {
       display:flex;
       justify-content: space-between;
   

       .left {
           width:50%;
            position: relative;
           display:flex;
           justify-content:flex-start;
           flex-direction:column;

min-height: 15rem;
           .head {
      margin-top: 1rem;
       display:flex;
     justify-content:center;
   flex-direction:column;
   
   h2 {
   color:black;
   font-size:1.5rem;
   font-weight: 800;
   }
   }
           .des {
           
               display:flex;
               display:flex;
           justify-content:center;
           flex-direction:column;

         
           p {
               margin-top:0.5rem;
               width: 90%;

            

             
       display:flex;
       justify-content:center;
        flex-direction:column;
  
        height:100%;
        .head {
            text-align:left;
             font-size:1.7rem;
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
   
            margin-bottom:0.5rem;
            width:100%;
            margin-top:0.7rem;
            margin-bottom:0.5rem;
        }
        h1 {
            margin-top:2rem;
            margin-bottom:0.9rem;
        }
        h2 {
          font-weight:900;
        }
        li {
            list-style:disc;
            margin-left:1.5rem;
            font-size:1.2rem;
            margin-top:0.5rem;
            margin-bottom:0.5rem;
        }
   }
          
   
   h3 {
       width: 90%;
      margin-top: 2rem;
   color:black;
   font-size:1.3rem;

     
               font-weight: 1000;
           
           span {
               color: ${props => props.theme.colors.blue};
               text-decoration: underline;
           }

               
   
   }
           }
       
       }
       .right{
           width:43%;
        min-height: 15rem;
           display:flex;
           justify-content:flex-end;
           align-items:flex-end;
           flex-direction:column;
               position: relative;  
         
       }

       

   }

   }
 }

  

}


@media (min-width: 768px) and (max-width: 1024px) {
    
    .logo {
        display:flex;
       justify-content:space-between;
      align-items:flex-start;
       width:95%;
        
  margin-top: 4rem;
        margin-bottom: 2em;
       
           .logo1 {
               width:23%;
             
            border: 1ox solid red;
               
               display:flex;
       justify-content:space-between;
      align-items:center;
      flex-direction:column;
      .img {
          position: relative;
          width: 90%;
    height: 8rem;

          
          display: flex;
          justify-content: left;
          
          img {
   width:  60% ;
 
          }
     
      }
      h2 {
          
           margin-bottom: 1.5rem;
        margin-top:1rem;
        color: ${props => props.theme.colors.blue};
            text-align:left;
            font-weight:900;
           width: 100%;
           font-size: 1.7rem;
           height: 2rem;
          }
          p {
       height: 8em;
            text-align:left;
            font-size:1.3rem;
              
          }
          button {
              margin-top: 1.5rem;
              width: 100%;
              border-radius: 0%;
          }
           }

          
       }

  

 .flex {
    width:80%;
    
     display:flex;
     justify-content:center;
   flex-direction:column;
margin-bottom:2rem;
.cat {
  color: ${props => props.theme.colors.blue};
   font-size:2rem;
   margin-top: 2rem;
   font-weight: 600;
}
   .flex-1 {
      margin-top:1.5rem;
      margin-bottom: 1rem;
 
   .data {
       display:flex;
   

       .left {
           width:65%;
            position: relative;
           display:flex;
           justify-content:flex-start;
           flex-direction:column;

min-height: 15rem;
           .head {
      margin-top: 1rem;
       display:flex;
     justify-content:center;
   flex-direction:column;
   
   h2 {
   color:black;
   font-size:1.7rem;
   font-weight: 800;
   }
   }
           .des {
           
               display:flex;
               display:flex;
           justify-content:center;
           flex-direction:column;

         
           p {
               margin-top:0.5rem;
               width: 90%;

               font-size: 1.5rem;

             
       display:flex;
       justify-content:center;
        flex-direction:column;
  
        height:100%;
        .head {
            text-align:left;
             font-size:1.7rem;
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
          font-size: 1.5rem;
            margin-bottom:0.5rem;
            width:100%;
            margin-top:0.7rem;
            margin-bottom:0.5rem;
        }
        h1 {
            margin-top:2rem;
            margin-bottom:0.9rem;
        }
        h2 {
          font-weight:900;
        }
        li {
            list-style:disc;
            margin-left:1.5rem;
            font-size:1.2rem;
            margin-top:0.5rem;
            margin-bottom:0.5rem;
        }
   }
          
   
   h3 {
       width: 90%;
      margin-top: 2rem;
   color:black;
   font-size:1.3rem;

     
               font-weight: 1000;
           
           span {
               color: ${props => props.theme.colors.blue};
               text-decoration: underline;
           }

               
   
   }
           }
       
       }
       .right{
           width:30%;
        min-height: 15rem;
           display:flex;
           justify-content:flex-end;
           align-items:flex-end;
           flex-direction:column;
               position: relative;  
         
       }

       

   }

   button {
       
   }

   }
 }

  

}

@media (max-width: 767px) {
z-index:-1;

    
       .logo {
        display:flex;
       justify-content:space-around;
      align-items:center;
       width:70%;
        flex-wrap:wrap;
  margin-top: 4rem;
           width:100%;

           .logo1 {
               width:45%;
             
            border: 1ox solid red;
               
               display:flex;
       justify-content:space-between;
      align-items:center;
      flex-direction:column;
      .img {
          position: relative;
          width: 100%;
    height: 8rem;

          
          display: flex;
          justify-content: left;
          
          img {
   width:  45% ;
 
          }
     
      }
      h2 {
          
           margin-bottom: 1.5rem;
        margin-top:1rem;
        color: ${props => props.theme.colors.blue};
            text-align:left;
            font-weight:900;
           width: 100%;
           font-size: 1.7rem;
           height: 2rem;
          }
          p {
       height: 8em;
            text-align:left;
            font-size:1.3rem;
              
          }
          button {
              margin-top: 1rem;
              width: 100%;
              border-radius: 0%;
              margin-bottom: 1.5rem;
          }
           }
          
       }

  

 .flex {
    width:90%;
    
     display:flex;
     justify-content:center;
   flex-direction:column;
margin-bottom:2rem;
.cat {
  color: ${props => props.theme.colors.blue};
   font-size:2rem;
   margin-top: 2rem;
   font-weight: 600;
}
   .flex-1 {
      margin-top:1.5rem;
      margin-bottom: 1rem;
 
   .data {
       display:flex;
     flex-direction: column;

       .left {
           width:100%;
            position: relative;
           display:flex;
           justify-content:flex-start;
           flex-direction:column;

min-height: 15rem;
           .head {
      margin-top: 1rem;
       display:flex;
     justify-content:center;
   flex-direction:column;
   
   h2 {
   color:black;
   font-size:1.7rem;
   font-weight: 800;
   }
   }
           .des {
           
               display:flex;
               display:flex;
           justify-content:center;
           flex-direction:column;

         
           p {
               margin-top:0.5rem;
               width: 100%;

   

             
       display:flex;
       justify-content:center;
        flex-direction:column;
  
        height:100%;
        .head {
            text-align:left;
             font-size:1.7rem;
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
          font-size: 1.5rem;
            margin-bottom:0.5rem;
            width:100%;
            margin-top:0.7rem;
            margin-bottom:0.5rem;
        }
        h1 {
            margin-top:2rem;
            margin-bottom:0.9rem;
        }
        h2 {
          font-weight:900;
        }
        li {
            list-style:disc;
            margin-left:1.5rem;
            font-size:1.2rem;
            margin-top:0.5rem;
            margin-bottom:0.5rem;
        }
   }
          
   
   h3 {
       width: 100%;
      margin-top: 2rem;
      line-height: 2rem;
   color:black;
   font-size:1.3rem;

     
               font-weight: 1000;
           
           span {
               color: ${props => props.theme.colors.blue};
               text-decoration: underline;
           }

               
   
   }
           }
       
       }
       .right{
           margin-top: 1rem;
           width:100%;
        min-height: 15rem;
           display:flex;
           justify-content:flex-end;
           align-items:flex-end;
           flex-direction:column;
               position: relative;  
         
       }

       

   }

   }
 }



}
`