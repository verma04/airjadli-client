

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
align-items:center;
@media (min-width: 1281px) {
  
    .grid {
  margin-top:5rem;
        width:100%;
        height:40rem;
      
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
    

       
    }
    .card {
      
    
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
       
        height:70%;
        .card-1 {
            display:flex;
        justify-content:space-between;
        align-items:center;
        height:100%;
        width:76rem;
      
        .grid1 {
             width:30%;
             height:100%;
             background-color:white;
             display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        cursor: pointer;
        .wrapper {
     
       width:90%;
       height:50%;
        position: relative;
       
       
        }
        .data {
            
   
            .name {
              padding-top:1rem;
              padding-bottom:0.5rem;
            span {
                font-size:1.2rem;
            }
            h3 {
                font-size:1.2rem;
                font-weight:900; 
            }
            }
            .link {
           margin-top:1.3rem;
            }
        width:90%;
        height:50%;
        
        display:flex;
        justify-content:flex-start;
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

    .btn {
        display:flex;
        justify-content:center;
        height:15%;
  
        align-items:center;
        button {
            height:60%; 
            width:13rem;
            color: ${props => props.theme.colors.blue};
            font-weight:900;
            font-size:1.3rem;
            background-color:white;
            border: 1px solid  ${props => props.theme.colors.blue};
        }
    }

}

@media (min-width: 1024px) and (max-width: 1280px) {

    .grid {
  margin-top:5rem;
        width:100%;
        height:40rem;
      
        display:flex;
        justify-content:center;
        align-items:center;
         flex-direction:column;

         .head {
            width:78%;
            height:15%;
            display:flex;
            justify-content:center;
            flex-direction:column;
            h1 {
            color:${props => props.theme.colors.blue};
            }


         }
    

       
    }
    .card {
      
    
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
       
        height:70%;
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
        cursor: pointer;
        .wrapper {
     
       width:90%;
       height:50%;
        position: relative;
       
       
        }
        .data {
            
   
            .name {
              padding-top:1rem;
              padding-bottom:0.5rem;
            span {
                font-size:1.2rem;
            }
            h3 {
                font-size:1.2rem;
                font-weight:900; 
            }
            }
            .link {
           margin-top:1.3rem;
            }
        width:90%;
        height:50%;
        
        display:flex;
        justify-content:flex-start;
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
    font-size:1rem;
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

    .btn {
        display:flex;
        justify-content:center;
        height:15%;
   margin-top:2rem;
        align-items:center;
        button {
            height:60%; 
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
    .grid {
  margin-top:5rem;
        width:100%;
       
      
        display:flex;
        justify-content:center;
        align-items:center;
         flex-direction:column;

         .head {
            width: 94%;
        height:4rem;
            display:flex;
            justify-content:center;
            flex-direction:column;
            h1 {
            color:${props => props.theme.colors.blue};
            }


         }
    

       
    }
    .card {
      
    
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
       
        height:70%;
        .card-1 {
            display:flex;
        justify-content:space-between;
        align-items:center;
        height:100%;
        width: 94%;
      
        .grid1 {
             width:30%;
             height:20rem;
             background-color:white;
             display:flex;
             justify-content:space-between;
  align-items:center;
        flex-direction:column;
        
        cursor: pointer;
        .wrapper {
  
            width:100%;
  height:48%;
        position: relative;
       
       
        }
        .data {
            .name {
                margin-top:0.2rem;
        margin-bottom:0.2rem;
            span {
                font-size:1.2rem;
            }
            h3 {
                font-size:1.2rem;
                font-weight:900; 
            }
            }
        width:90%;
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

    .btn {
        display:flex;
        justify-content:center;
        height:15%;
   margin-top:2rem;
        align-items:center;
        button {
            height:60%; 
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
    .grid {
  margin-top:4rem;
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
    

       
    }
    .card {
      
    
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:100%;
     
        .card-1 {
            display:flex;
        justify-content:space-between;
        align-items:center;
         flex-direction:column;
        height:100%;
        width:95%;
        margin-top:2rem;
      
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
        width:100%;
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
img {
   margin-right:0.5rem;
}
span {
    font-size:1.2rem;
}

  }
        }
        }
        }
    
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