

import styled from 'styled-components'



export const Foot = styled.footer`
display:flex;
justify-content:center;
height:100%;
background-color: ${props => props.theme.colors.footerColor};
margin-top:5rem;
a:hover {
  font-weight: 1000;
}
a {
  color:white;
}
i {
  z-index: 1;
}
#hover:hover{
  font-weight: 1000;
  cursor: pointer;
}

@media (min-width: 1281px) {
  a {
    font-size: 1.25rem;;
  }

.flex { 
  


  height: 21rem;
  
    width:75rem;
    display:flex;
    justify-content:space-between;
   align-items:center;
    
   .flex-1 {

     width:38%;
     height:100%;
  
     
     display:flex;
     justify-content:flex-start;
     flex-direction:column;
     .head {
      margin-top: 2rem;
    margin-bottom: 1rem
     }
     .contact {
    
      line-height: 1.5rem;
      h3 {
        color: white;
        font-size: 1.2rem;
        line-height: 1.4;
      }

     }
     .contact1 {
       margin-top:1.5rem;
      line-height: 1.5rem;
      line-height: 1.4;
      h3 {
        color: white;
      }

     }
     h2 {
           color:white;
         }
   }
   .flex-2 {
     margin-top: 1.3rem;;
   
     width:30%;
     height:100%;
     
     display:flex;
     justify-content:space-between;
     align-items:center;
     flex-direction:column;
     .top {
      margin-top: 2.2rem;
       display:flex;
       justify-content:space-around;
        flex-direction:column;
        
        color:white;
        width:100%;
       height:20%;
       .head{
         width:100%;
         height:30%;
   
         display:flex;
         justify-content:center;
         flex-direction:column;
         h2 {
           color:white;
         }
      
       } 
       .icon {
  
         height:90%;
         
         display:flex;
         justify-content:space-between;
         width:100%;
         
         align-items:center;
         margin-top:1rem;
         .fab {
           color: black;
           border-radius:2rem;
           background-color:white;
           font-size:2.7rem;
           margin-right: 2rem;
           padding:0.7rem;
           cursor: pointer;
         }

         .fa-facebook-f {
          padding-left: 1.2rem;
padding-right: 1.2rem;
         }
         .fa-twitter-square{
          padding-left: 0.7rem;
padding-right: 0.7rem;
         }
       }

       
     }
     .contact2{
       width: 100%;
         margin-top:2.2rem;
       h3 {
        color: white;
      }
       }
    
   }
   .flex-3 {
  
     width:30%;
     height:100%;
   
     display:flex;
     justify-content:flex-start;
     align-items:center;
     flex-direction:column;
     .top{
       width:100%;
       margin-top:2rem;
       display:flex;
       justify-content:space-around;
       flex-direction:column;
       color:white;
       .contact{
       h3 {
        color: white;
      }
       }
       .contact1{
         margin-top:1.2rem;
         text-align: right;
       h3 {
        color: white;
      }
       }
       

     }


    
   }
}

}



@media (min-width: 1024px) and (max-width: 1280px) {

    .flex { 
      
    
  
      height: 20rem;
      
        width:80%;
        display:flex;
        justify-content:space-between;
       align-items:center;
        
       .flex-1 {

width:38%;
height:100%;


display:flex;
justify-content:flex-start;
flex-direction:column;
.head {
 margin-top: 2rem;
margin-bottom: 1rem
}
.contact {

 line-height: 1.5rem;
 h3 {
   color: white;
   font-size: 1.2rem;
   line-height: 1.4;
 }

}
.contact1 {
  margin-top:1.5rem;
 line-height: 1.5rem;
 line-height: 1.4;
 h3 {
   color: white;
 }

}
h2 {
      color:white;
    }
}
.flex-2 {
margin-top: 1.3rem;;

width:30%;
height:100%;

display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
.top {
 margin-top: 2.2rem;
  display:flex;
  justify-content:space-around;
   flex-direction:column;
   
   color:white;
   width:100%;
  height:20%;
  .head{
    width:100%;
    height:30%;

    display:flex;
    justify-content:center;
    flex-direction:column;
    h2 {
      color:white;
    }
 
  } 
  .icon {

    height:90%;
    
    display:flex;
    justify-content:space-between;
    width:100%;
    
    align-items:center;
    margin-top:1rem;
    .fab {
      color: black;
      border-radius:2rem;
      background-color:white;
      font-size:1.3rem;
      margin-right: 2rem;
      padding:0.7rem;
      cursor: pointer;
    }

    .fa-facebook-f {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .fa-twitter-square{
     padding-left: 0.7rem;
padding-right: 0.7rem;
    }
  }

  
}
.contact2{
  width: 100%;
    margin-top:2.2rem;
  h3 {
   color: white;
 }
  }

}
.flex-3 {

width:30%;
height:100%;

display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
.top{
  width:100%;
  margin-top:2rem;
  display:flex;
  justify-content:space-around;
  flex-direction:column;
  color:white;
  .contact{
  h3 {
   color: white;
 }
  }
  .contact1{
    margin-top:1.2rem;
    text-align: right;
  h3 {
   color: white;
 }
  }
  

}



}
    }

}
@media (min-width: 768px) and (max-width: 1024px) {
  margin-top:5rem;
  .flex { 
      
    
  
      height: 20rem;
      
        width:80%;
        display:flex;
        justify-content:space-between;
       align-items:center;
        
       .flex-1 {

         width:33%;
         height:100%;
      
         
         display:flex;
         justify-content:flex-start;
         flex-direction:column;
         .head {
          margin-top: 2rem;
         }
         .contact {
        
          line-height: 1.5rem;
          h3 {
            color: white;
            font-size: 1.2rem;
          }

         }
         .contact1 {
           margin-top:1.5rem;
          line-height: 1.5rem;
          h3 {
            color: white;
          }

         }
         h2 {
               color:white;
             }
       }
       .flex-2 {
      
         width:30%;
         height:100%;
         justify-content:flex-start;
         display:flex;
         justify-content:flex-start;
         align-items:center;
         flex-direction:column;
         .top {
          margin-top: 2rem;
           display:flex;
           justify-content:space-around;
            flex-direction:column;
            
            color:white;
            width:100%;
           height:20%;
           .head{
             width:100%;
             height:33%;
       
             display:flex;
             justify-content:center;
             flex-direction:column;
             h2 {
               color:white;
             }
          
           } 
           .icon {
      
             height:90%;
             
             display:flex;
             justify-content:space-between;
             width:100%;
             
             align-items:center;
             margin-top:1rem;
             .fab {
               color: black;
               border-radius:2rem;
               background-color:white;
               font-size: 1.7rem;
               margin-right: 2rem;
               padding:0.5rem;
               cursor: pointer;
             }

             .fa-facebook-f {
              padding-left: 0.5rem;
    padding-right: 1rem;
             }
             .fa-twitter-square{
              padding-left: 0.7rem;
    padding-right: 0.7rem;
             }
           }
         }

         .contact2{
       width: 100%;
         margin-top:2.2rem;
       h3 {
        color: white;
      }
       }
       }
       .flex-3 {
        
         width:30%;
         height:100%;
       
         display:flex;
         justify-content:flex-start;
         align-items:center;
         flex-direction:column;
         .top{
           width:100%;
       margin-top:2rem;
           display:flex;
           justify-content:space-around;
           flex-direction:column;
           color:white;
           .contact{
           h3 {
            color: white;
          }
           }
           .contact1{
             text-align: right;
             margin-top:1.2rem;
           h3 {
            color: white;
          }
           }
           .contact2{
             margin-top:2.2rem;
           h3 {
            color: white;
          }
           }

         }
       }
    }
}
@media (max-width: 767px) {
  .flex {
        height:38rem;
      
        width:90%;
        display:flex;
        justify-content:space-around;
       align-items:center;
       flex-direction:column;
        
       .flex-1 {
         width:95%;
         height:40%;
         margin-top:1rem;
      
         
         display:flex;
         justify-content:space-around;
         flex-direction:column;
         .contact {
          line-height: 1.5rem;
          h3 {
            color: white;
          }

          

         }
         .contact1 {
          line-height: 1.5rem;
          h3 {
            color: white;
          }
         }
         h2 {
               color:white;
             }
       }
       .flex-2 {
        width:95%;
         height:30%;
     
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         .top {
           display:flex;
           justify-content:space-around;
            flex-direction:column;
        
            margin-top: 1.5rem;
            color:white;
            width:100%;
           height:60%;
           .head{
             width:100%;
             height:30%;
         
             display:flex;
             justify-content:center;
             flex-direction:column;
             h2 {
               color:white;
             }
          
           } 
           .icon {
         
             height:90%;
             
             display:flex;
             justify-content:space-around;
             width:100%;
             align-items:center;
             .fab {
               color: black;
               border-radius:2rem;
               background-color:white;
               font-size:2rem;
               padding:0.5rem;
               cursor: pointer;
             }

             .fa-facebook-f {
              padding-left: 0.9rem;
    padding-right: 0.9rem;
             }
             .fa-twitter-square{
              padding-left: 0.7rem;
    padding-right: 0.7rem;
             }
           }
         }
       }
       .flex-3 {
        width:95%;
        height: 39%;

       
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         .top{
           width:100%;
           height:100%;
           display:flex;
           justify-content:space-around;
           flex-direction:column;
           color:white;
           .contact-1{
             
           h3 {
            
            color: white;
          }
           }
           .contact1 {
          line-height: 1.5rem;
          h3 {
            color: white;
          }
          a {
            font-size: 1.2rem;
          }
         }
         
           .contact1{
           h3 {
            color: white;
          }
           }
           .contact2{
           h3 {
            color: white;
          }
           }

         }
       }
    }

}
`