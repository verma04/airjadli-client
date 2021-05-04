

import styled from 'styled-components'



export const Foot = styled.footer`
display:flex;
justify-content:center;
height:100%;
width:100%;


align-items:center;

@media (min-width: 1281px) {
    margin-top:5rem;

    .flex {
        height: 26rem;
         
        width:75rem;
        display:flex;
        justify-content:space-between;
       align-items:center;
        
       .flex-1 {
         width:48%;
         height:100%;
        
         background-color: ${props => props.theme.colors.darkblue};
         color: white;
         display:flex;
         justify-content: flex-start;
         flex-direction:column;
         .top {
            
             height:35%;
            
             display:flex;
             justify-content:center;
              flex-direction:column;
              align-items:center;
             h2 {
                color:white;
                width:90%; 
            font-size:1.9rem;
            span {
                font-family: SourceSansPro-Bold ;
            }
             }

         }
         .bottom {
             width:100%;
             height:40%;
             display:flex;
             justify-content:center;
              flex-direction:column;
              align-items:center;
              h2 {
                color:white;
                width:90%; 
            font-size:1.9rem;
            span {
                font-family: SourceSansPro-Bold ;
                font-weight:1000;
                margin-left:0.5rem;
                text-decoration: underline;
            }
             }
         }
        
       }
       .flex-2 {
         width:48%;
         height:100%;
         background-color: ${props => props.theme.colors.yellow};
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         .top {
             width:100%;
             height:50%;
     
             display:flex;
             justify-content:center;
             flex-direction:column;
           
             .wrapper {
                 margin-left:8%;
                  width:25%;
                  height:70%;
                  
             
                  
             }

         }
         .bottom {
             width:90%;
             height:50%;
            
             display:flex;
                  justify-content:space-around;
            
                  flex-direction:column;
                  .text {
                      width:90%;
                      color:white;
                      h2 {
                        font-size:1.9rem;
                          line-height:1.2;
                      }
                     
                  }
                  button {
                      margin-bottom:0.5rem;
                     width:13rem;
                      padding:0.7rem;
                      border: none;
                      font-size:1.3rem;
                      padding:0.6rem;
                      background-color: ${props => props.theme.colors.blue};
                    color:white;
                    font-family: SourceSansPro-Bold ;
                  }
                  h2 {
                      word-spacing:0.2rem;
                      font-size:1.9rem;
                    
                      span {
                           font-weight:1000;
                           font-family: SourceSansPro-Bold ;
            
                      }
                  }

         }
         
       }
       
    }

}
@media (min-width: 1024px) and (max-width: 1280px) {
    margin-top:5rem;

    .flex {
        height: 26rem;
         
        width:76%;
        display:flex;
        justify-content:space-between;
       align-items:center;
        
       .flex-1 {
         width:48%;
         height:100%;
        
         background-color: ${props => props.theme.colors.darkblue};
         color: white;
         display:flex;
         justify-content: flex-start;
         flex-direction:column;
         .top {
            
             height:35%;
            
             display:flex;
             justify-content:center;
              flex-direction:column;
              align-items:center;
             h2 {
                color:white;
                width:90%; 
                font-size:1.9rem;
            span {
                font-family: SourceSansPro-Bold ;
            }
             }

         }
         .bottom {
             width:100%;
             height:40%;
             display:flex;
             justify-content:center;
              flex-direction:column;
              align-items:center;
              h2 {
                color:white;
                width:90%; 
                font-size:1.9rem;
            span {
                font-family: SourceSansPro-Bold ;
                font-weight:1000;
                margin-left:0.5rem;
                text-decoration: underline;
            }
             }
         }
        
       }
       .flex-2 {
         width:48%;
         height:100%;
         background-color: ${props => props.theme.colors.yellow};
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         .top {
             width:100%;
             height:50%;
     
             display:flex;
             justify-content:center;
             flex-direction:column;
           
             .wrapper {
                 margin-left:8%;
                  width:25%;
                  height:70%;
                  
             
                  
             }

         }
         .bottom {
             width:90%;
             height:50%;
            
             display:flex;
                  justify-content:space-around;
            
                  flex-direction:column;
                  .text {
                      width:90%;
                      color:white;
                      h2 {
                          font-size:1.7rem;
                          line-height:1.2;
                      }
                     
                  }
                  button {
                      margin-bottom:0.5rem;
                     width:13rem;
                      padding:0.7rem;
                      border: none;
                      font-size:1.3rem;
                      padding:0.6rem;
                      background-color: ${props => props.theme.colors.blue};
                    color:white;
                    font-family: SourceSansPro-Bold ;
                  }
                  h2 {
                      word-spacing:0.2rem;
                      font-size:1.9rem;
                    
                      span {
                           font-weight:1000;
                           font-family: SourceSansPro-Bold ;
            
                      }
                  }

         }
         
       }
       
    }

}

@media (min-width: 768px) and (max-width: 1024px) {
    margin-top:5rem;

.flex {
    height: 23rem;
    
    width:80%;
    display:flex;
    justify-content:space-between;
   align-items:center;
    
   .flex-1 {
     width:48%;
     height:100%;
    
     background-color: ${props => props.theme.colors.darkblue};
     color: white;
     display:flex;
     justify-content: flex-start;
     flex-direction:column;
     .top {
        
         height:35%;
        
         display:flex;
         justify-content:center;
          flex-direction:column;
          align-items:center;
         h2 {
            color:white;
            width:90%; 
        font-size:1.7rem;
        span {
            font-size:1.5rem;
            font-family: SourceSansPro-Bold ;
        }
         }

     }
     .bottom {
         width:100%;
         height:40%;
         display:flex;
         justify-content:center;
          flex-direction:column;
          align-items:center;
          h2 {
            color:white;
            width:90%; 
            font-size:1.7rem;
        span {
            font-family: SourceSansPro-Bold ;
            font-weight:1000;
            margin-left:0.5rem;
            text-decoration: underline;
        }
         }
     }
    
   }
   .flex-2 {
     width:48%;
     height:100%;
     background-color: ${props => props.theme.colors.yellow};
     display:flex;
     justify-content:space-between;
     align-items:center;
     flex-direction:column;
     .top {
         width:100%;
         height:50%;
 
         display:flex;
         justify-content:center;
         flex-direction:column;
       
         .wrapper {
             margin-left:8%;
              width:30%;
              height:80%;
              
         
              
         }

     }
     .bottom {
         width:90%;
         height:50%;
        
         display:flex;
              justify-content:space-around;
        
              flex-direction:column;
              .text {
                  width:90%;
                  color:white;
                  h2 {
                      font-size:1.5rem;
                      line-height:1.2;
                  }
                 
              }
              button {
                  margin-bottom:0.5rem;
                 width:13rem;
                  padding:0.7rem;
                  border: none;
                  font-size:1.3rem;
                  padding:0.6rem;
                  background-color: ${props => props.theme.colors.blue};
                color:white;
                font-family: SourceSansPro-Bold ;
              }
              h2 {
                  word-spacing:0.2rem;
                  font-size:2rem;
                
                  span {
                       font-weight:1000;
                       font-family: SourceSansPro-Bold ;
        
                  }
              }

     }
     
   }
   
}

}

@media (max-width: 767px) {
    margin-top:3rem;
    .flex {
       
         
        width:100%;
        display:flex;
        justify-content:space-between;
       align-items:center;
        flex-direction:column;
       .flex-1 {
         width:100%;
         height:20rem;
        
         background-color: ${props => props.theme.colors.darkblue};
         color: white;
         display:flex;
         justify-content:space-around;
         flex-direction:column;
         .top {
            
             height:50%;
            
             display:flex;
             justify-content:center;
              flex-direction:column;
              align-items:center;
             h2 {
                color:white;
                width:90%; 
                font-size: 1.7rem;
                line-height: 1.1;
            span {
                font-weight:1000;
            }
             }

         }
         .bottom {
             width:100%;
             height:50%;
             display:flex;
             justify-content:center;
              flex-direction:column;
              align-items:center;
              h2 {
                color:white;
                width:90%; 
                font-size: 1.7rem;
                line-height: 1.1;
            span {
                font-weight:1000;
            }
             }
         }
        
       }
       .flex-2 {
         width:100%;
         height:24rem;
         background-color: ${props => props.theme.colors.yellow};
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         .top {
             width:100%;
             height:40%;
          
             display:flex;
             justify-content:center;
             flex-direction:column;
           
             .wrapper {
                margin-left:8%;
                  width:30%;
                  height:80%;
                  
                  
             
                  
             }

         }
         .bottom {
             width:90%;
             height:60%;
            
             display:flex;
                  justify-content:space-around;
            
                  flex-direction:column;
                  .text {
                      width:95%;
                      color:white;

                      h2 {
                      word-spacing:0.2rem;
                      font-size: 1.7rem;
                line-height: 1.1;
                    
                      span {
                           font-weight:1000;
                      }
                  }

                     
                  }
                  button {
                     width:10rem;
                      padding:0.5rem;
                      border: none;
                      font-size:1.3rem;
                      padding:0.4rem;
                      background-color: ${props => props.theme.colors.blue};
                    color:white
                  }
                
         }
         
       }
       
    }
}
`