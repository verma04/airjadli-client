

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
align-items:center;
flex-direction:column;


@media (min-width: 1281px) {
    margin-top:5rem;

    .grid {
  margin-top:5rem;
        width:100%;
        height:34rem;
      
        display:flex;
        justify-content:center;
        align-items:center;
         flex-direction:column;

         .head {
            width:75rem;
            height:15%;
            display:flex;
            justify-content:center;
            flex-direction:column;
            h1 {
            color:${props => props.theme.colors.blue};
            }


         }

         .card {
      
    
      display:flex;
      justify-content:center;
      align-items:center;
        width:75rem;
     
      height:85%;
      .card-1 {
          display:flex;
      justify-content:space-between;
      align-items:center;
      height:100%;
      width:75rem;
    
      .grid1 {
           width:30%;
           height:100%;
           background-color:white;
           display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      .wrapper {
      width:100%;
      height:50%;
      position: relative;
     
      }
      .data {
          width:100%;
         
          .name {
          span {
              font-size:1.2rem;
          }
          h3 {
              font-size:1.2rem;
              font-weight:900; 
          }
          }
 
      height:50%;
      
      display:flex;
      justify-content:space-evenly;
      flex-direction:column;
    
  p {
     color: #2f3435; 
  }
  .head {
      h2 {
      text-align:left;
  }

  }
 
.link {
display:flex;
cursor: pointer;
justify-content:flex-start;
color:${props => props.theme.colors.blue};
i {
  font-size:1.2rem;
}
span {
  font-size:1.2rem;
  margin-left:0.5rem;
}

}
      }
      }
      }
  
  }
    

       
    }

    .grid-1 {
        margin-top:5rem;
        width:100%;
        height:35rem;
   
        display:flex;
        justify-content:center;
    
        .left {
            width:50%;
            height:100%;
           
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
                    font-size: 1.7rem;

                    
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

    .btn {
        display:flex;
        justify-content:center;
        height:15%;

   margin-top:4rem;
        align-items:center;
        button {
            height:3.5rem; 
            width:13rem;
            color: ${props => props.theme.colors.blue};
            font-weight:900;
            font-size:1.3rem;
            background-color:white;
            border: 1px solid  ${props => props.theme.colors.blue};
        }
    }
   

  

}

@media (min-width: 1024px) and (max-width: 1280px)  {
    margin-top:5rem;

    .grid {
  margin-top:5rem;
        width:100%;
        height:34rem;
      
        display:flex;
        justify-content:center;
        align-items:center;
         flex-direction:column;

         .head {
            width:76%;
            height:15%;
            display:flex;
            justify-content:center;
            flex-direction:column;
            h1 {
            color:${props => props.theme.colors.blue};
            }


         }

         .card {
      
    
      display:flex;
      justify-content:center;
      align-items:center;
      width:100%;
     
      height:85%;
      .card-1 {
          display:flex;
      justify-content:space-between;
      align-items:center;
      height:100%;
      width:76%;
    
      .grid1 {
           width:30%;
           height:100%;
           background-color:white;
           display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      .wrapper {
      width:100%;
      height:50%;
      position: relative;
     
      }
      .data {
          width:100%;
         
          .name {
          span {
              font-size:1.2rem;
          }
          h3 {
              font-size:1.2rem;
              font-weight:900; 
          }
          }
 
      height:50%;
      
      display:flex;
      justify-content:space-evenly;
      flex-direction:column;
    
  p {
     color: #2f3435; 
  }
  .head {
      h2 {
      text-align:left;
  }

  }
 
.link {
display:flex;
cursor: pointer;
justify-content:flex-start;
color:${props => props.theme.colors.blue};
i {
  font-size:1.2rem;
}
span {
  font-size:1.2rem;
  margin-left:0.5rem;
}

}
      }
      }
      }
  
  }
    

       
    }

    .grid-1 {
        margin-top:5rem;
        width:100%;
        height:35rem;
   
        display:flex;
        justify-content:center;
    
        .left {
            width:50%;
            height:100%;
           
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

    .btn {
        display:flex;
        justify-content:center;
        height:15%;

   margin-top:4rem;
        align-items:center;
        button {
            height:3.5rem; 
            width:13rem;
            color: ${props => props.theme.colors.blue};
            font-weight:900;
            font-size:1.3rem;
            background-color:white;
            border: 1px solid  ${props => props.theme.colors.blue};
        }
    }
   

  

}

@media (min-width: 768px) and (max-width: 1024px) {
    margin-top:5rem;

.grid {
margin-top:5rem;
    width:100%;
   
  
    display:flex;
    justify-content:center;
    align-items:center;
     flex-direction:column;

     .head {
        width:80%;
        height:4rem;
        display:flex;
        justify-content:center;
        flex-direction:column;
        h1 {
        color:${props => props.theme.colors.blue};
        }


     }

     .card {
  

  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
 
  height:85%;
  .card-1 {
      display:flex;
  justify-content:space-between;
  align-items:center;
  height:100%;
  width:80%;

  .grid1 {
       width:30%;
       height:100%;
       background-color:white;
       display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  .wrapper {
  width:100%;
  height:10rem;
  position: relative;
 
  }
  .data {
      width:100%;
     
      .name {
        padding-top:0.2rem;
        padding-bottom:0.2rem;
      span {
          font-size:1.2rem;
      }
      h3 {
         
          font-size:1.2rem;
          font-weight:900; 
      }
      }

  height:50%;
  
  display:flex;
  justify-content:space-evenly;
  flex-direction:column;

p {
 color: #2f3435; 
}
.head {
  h2 {
  text-align:left;
}

}

.link {
display:flex;
cursor: pointer;
justify-content:flex-start;
color:${props => props.theme.colors.blue};
i {
font-size:1.2rem;
}
span {
font-size:1.2rem;
margin-left:0.5rem;
}

}
  }
  }
  }

}


   
}

.grid-1 {
    margin-top:5rem;
    width:100%;
    height:25rem;

    display:flex;
    justify-content:center;

    .left {
        width:50%;
        height:100%;
       
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
                font-size:1.7rem;
                
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

.btn {
    display:flex;
    justify-content:center;
    height:15%;

margin-top:4rem;
    align-items:center;
    button {
        height:3.5rem; 
        width:13rem;
        color: ${props => props.theme.colors.blue};
        font-weight:900;
        font-size:1.3rem;
        background-color:white;
        border: 1px solid  ${props => props.theme.colors.blue};
    }
}

}
@media (max-width: 767px) {
    margin-top:3rem;
    .grid {

        width:100%;
       
      
        display:flex;
        justify-content:center;
        align-items:center;
         flex-direction:column;

         .head {
            width:95%;
            height:3rem;
            display:flex;
            justify-content:center;
            flex-direction:column;
            h1 {
            color:${props => props.theme.colors.blue};
            }


         }

         .card {
      
    
      display:flex;
      justify-content:center;
      align-items:center;
      width:100%;
     
   
      .card-1 {
          display:flex;
      justify-content:space-between;
      align-items:center;
   flex-direction:column;
      height:100%;
      width:90%;
    
      .grid1 {
        width:100%;
            height:30rem;
           background-color:white;
           display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      .wrapper {
        width:100%;
        height:50%;
        position: relative;
         width:100%;
          height: 50%
     
      }
      .data {
          .name {
          span {
              font-size:1.2rem;
          }
          h3 {
              font-size:1.2rem;
              font-weight:900; 
          }
          }
          width: 100%;
      height:50%;
      
      display:flex;
      justify-content:space-evenly;
      flex-direction:column;
    
  p {
     color: #2f3435; 
  }
  .head {
      h2 {
      text-align:left;
  }

  }
 
.link {
display:flex;
cursor: pointer;
justify-content:flex-start;
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
  
  }
    

       
    }

    .grid-1 {
      display:none;
    }

    .btn {
        display:flex;
        justify-content:center;
        height:15%;

        align-items:center;
        button {
            height:50%; 
            width:10rem;
            color: ${props => props.theme.colors.blue};
            font-weight:900;
            font-size:1.3rem;
            background-color:white;
            border: 2px solid  ${props => props.theme.colors.blue};
        }
    }
   

}
`