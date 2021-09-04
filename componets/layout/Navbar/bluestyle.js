

import styled from 'styled-components'



export const Nav = styled.nav`
display:flex;
justify-content:center;
height:100%;
position:absolute;
top:0;
width:100%;
z-index:1000;
a{
   color:white
}
@media  (min-width: 1280px) {
   
   height:5rem;
   z-index:1000;
    .flex {
        height:5rem;
        
        width:75rem;
        display:flex;
        justify-content:space-between;
       align-items:center;
   .nav-img {
      position: relative;
       width: 30%;
        height: 100%;
   }
   
       .dropdown-content {
          z-index:3;
  display: none;
  position: fixed;

  background: ${props => props.theme.colors.blue};
   width:100%;
  top:0;
  left:0;
  height:4rem;

  z-index: 1;
  top:4rem;
  justify-content:center;
  align-items:center;
  .content {
     display:flex;
     justify-content:center;
     width:60%;
    margin-left:5%;
align-items:center;
height:100%;
     .list {
        width:50%;
        height:100%;
        display:flex;
        justify-content:space-between;
     
align-items:center;       
        h3 {
          
      
       
           font-size:1.1rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           color:white;
          
        }
        h3:hover {
           border-bottom: 2px solid white ;
       
        }
        
     }

     
  }
 

        }
        .nav-item {
            position: relative;
           cursor: pointer;
          color:white;
          height:100%;
          display:flex;
          justify-content:center;
          flex-direction:column;
         
          position: relative;
          img {
             cursor: pointer;
          }
   span {
      margin-top:1rem;
      font-size:1.1rem;
   }




}
.fa-bars {
   display:none;
}
.fa-times {
   display:none;
}
.fa-search {
       font-size:1.2rem;
       margin-top:1%;
      }
.nav-item:hover .dropdown-content {display: flex;}
.nav-item:hover span  {
   
   border-bottom:2px solid white;


}

        
      
        #active {
  
           border-bottom:2px solid white;
        }
     i {
  color: white;
  cursor: pointer;
     }
    }

   
    .search {
       display:flex;
       justify-content:center;
       height:5rem;
      width:100%;
      background-color:#1690d2;
      .input {
         width:75rem;
        
         height:100%;
         display:flex;
       justify-content:center;
       .input-field {
          display:flex;
          justify-content:center;
          align-items:center;
          width:90%;
          input {
             width:100%;
             background-color:#1690d2;
             height:50%;
             border: none;
             border-bottom: 1px solid white;
            font-size:1.5rem;
           
            ::placeholder {
               color:white;
}
          }
    
          }
          .close {
             cursor: pointer;
             display:flex;
             justify-content:center;
             align-items:center;
             width:10%;
             height:100%;

          i {
             font-size:2rem;
              color:white;

          }
       }
      }
    }
    .data {
       top:5rem;
      z-index: 1000;
       width:100%;
       position:absolute;
       height:50em;
       display:flex;
       justify-content:center;
       .data-2 {
          margin-top:1rem;
         background-color:white;
         width:75rem;
         height:100%;
         box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
         display:flex;
       justify-content:flex-start;
       flex-direction: column;
       overflow: scroll;
       align-items: center;
      
       .spinner {
          display: flex;
          justify-content: center;
         flex-direction: column;
          width: 100%;
          height: 100%;
          align-items: center;
          img {
             width: 10rem;
          }
          h3 {
             font-size: 2rem;
          }
       }
      
       .news {
         width:90%;
          display:flex;
       justify-content:center;
      
  align-items: center;
       box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
       flex-direction:column;
       .news-1 {
          margin-top:1rem;
          display:flex;
          justify-content:space-between;
           align-items:center;
          width:100%;
          height: 13rem;
      
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          img {
             width:20%;
             height:80%;
          }
          ul {
           
            height: 80%;
            width:65%;
            display: flex;
            justify-content:space-evenly;
            flex-direction: column;
            li {
               display: flex;
            justify-content:flex-start;
            align-items: center;
         
              img {
               
    width: 4%;
    height: 64%;

                 margin-left: 0.5rem;
              }

              :nth-child(4) {
               color: #0085C5; 
               font-size: 1.5rem;
            }
            :nth-child(1) {
              
               font-size: 1.7rem;
            }
            :nth-child(2) {
               font-weight: 900;
              font-size: 1.3rem;
           }
            p {
             
               font-size: 1rem;
            }

            }

          
            h3{
               font-size: 1.7rem;
               color: #0085C5;
            }
         }
       }
       }
       }
    
    }
    .sm {
       display:none;
    }
}

@media (min-width: 1024px) and (max-width: 1280px) {
   
   height:5rem;
   z-index:1000;
    .flex {
        height:5rem;
        
        width:85%;
        display:flex;
        justify-content:space-between;
       align-items:center;
   .nav-img {
      position: relative;
       width: 30%;
        height: 100%;
   }
   
   .dropdown-content {
          z-index:3;
  display: none;
  position: fixed;

  background: ${props => props.theme.colors.blue};
   width:100%;
  top:0;
  left:0;
  height:4rem;

  z-index: 1;
  top:4rem;
  justify-content:center;
  align-items:center;
  .content {
     display:flex;
     justify-content:center;
     width:80%;
    margin-left:5%;
align-items:center;
height:100%;
     .list {
        width:50%;
        height:100%;
        display:flex;
        justify-content:space-between;
     
align-items:center;       
        h3 {
          
      
       
           font-size:1.1rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           color:white;
          
        }
        h3:hover {
           border-bottom: 2px solid white ;
       
        }
        
     }

     
  }
 

        }
        .nav-item {
            position: relative;
           cursor: pointer;
          color:white;
          height:100%;
          display:flex;
          justify-content:center;
          flex-direction:column;
         
          position: relative;
          img {
             cursor: pointer;
          }
   span {
      margin-top:1rem;
      font-size:1.1rem;
   }




}
.fa-bars {
   display:none;
}
.fa-times {
   display:none;
}
.fa-search {
       font-size:1.2rem;
       margin-top:1%;
      }
.nav-item:hover .dropdown-content {display: flex;}
.nav-item:hover span  {
   
   border-bottom:2px solid white;


}

        
      
        #active {
  
           border-bottom:2px solid white;
        }
     i {
  color: white;
  cursor: pointer;
     }
    }

    .search {
       display:flex;
       justify-content:center;
       height:5rem;
      width:100%;
      background-color:#1690d2;
      .input {
         width:85%;
        
         height:100%;
         display:flex;
       justify-content:center;
       .input-field {
          display:flex;
          justify-content:center;
          align-items:center;
          width:90%;
          input {
             width:100%;
             background-color:#1690d2;
             height:50%;
             border: none;
             border-bottom: 1px solid white;
            font-size:1.5rem;
           
            ::placeholder {
               color:white;
}
          }
    
          }
          .close {
             cursor: pointer;
             display:flex;
             justify-content:center;
             align-items:center;
             width:10%;
             height:100%;

          i {
             font-size:2rem;
              color:white;

          }
       }
      }
    }
    .data {
       top:5rem;
      z-index: 1000;
       width:85%;
       position:absolute;
       height:50em;
       display:flex;
       justify-content:center;
       .data-2 {
          margin-top:1rem;
         background-color:white;
         width:75rem;
         height:100%;
         box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
         display:flex;
       justify-content:flex-start;
       flex-direction: column;
       overflow: scroll;
       align-items: center;
      
       .spinner {
          display: flex;
          justify-content: center;
         flex-direction: column;
          width: 100%;
          height: 100%;
          align-items: center;
          img {
             width: 10rem;
          }
          h3 {
             font-size: 2rem;
          }
       }
      
       .news {
         width:90%;
          display:flex;
       justify-content:center;
      
  align-items: center;
       box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
       flex-direction:column;
       .news-1 {
          margin-top:1rem;
          display:flex;
          justify-content:space-between;
           align-items:center;
          width:100%;
          height: 13rem;
      
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          img {
             width:20%;
             height:80%;
          }
          ul {
           
            height: 80%;
            width:65%;
            display: flex;
            justify-content:space-evenly;
            flex-direction: column;
            li {
               display: flex;
            justify-content:flex-start;
            align-items: center;
         
              img {
               
    width: 4%;
    height: 64%;

                 margin-left: 0.5rem;
              }

              :nth-child(4) {
               color: #0085C5; 
               font-size: 1.5rem;
            }
            :nth-child(1) {
              
               font-size: 1.7rem;
            }
            :nth-child(2) {
               font-weight: 900;
              font-size: 1.3rem;
           }
            p {
             
               font-size: 1rem;
            }

            }

          
            h3{
               font-size: 1.7rem;
               color: #0085C5;
            }
         }
       }
       }
       }
    
    }
    .sm {
       display:none;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
  
  height:5rem;
  z-index:1;
   .flex {
       height:5rem;
     
       width:80%;
       display:flex;
       justify-content:space-between;
      align-items:center;
  .nav-img {
     position: relative;
      width: 25%;
       height: 100%;
  }
  
  .dropdown-content {
          z-index:3;
  display: none;
  position: fixed;

  background: ${props => props.theme.colors.blue};
   width:100%;
  top:0;
  left:0;
  height:4rem;

  z-index: 1;
  top:4rem;
  justify-content:center;
  align-items:center;
  .content {
     display:flex;
     justify-content:center;
     width:60%;
    margin-left:5%;
align-items:center;
height:100%;
     .list {
        width:70%;
        height:100%;
        display:flex;
        justify-content:space-between;
     
align-items:center;       
        h3 {
          
         
       
           font-size:1.1rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           color:white;
          
        }
        h3:hover {
           border-bottom: 2px solid white ;
       
        }
        
     }

     
  }
 

        }
       .nav-item {
           position: relative;
          cursor: pointer;
         color:white;
         height:100%;
         display:flex;
         justify-content:center;
         flex-direction:column;
        
         position: relative;
         img {
            cursor: pointer;
         }
  span {
     margin-top:1rem;
     font-size:1rem;
  }




}
.fa-bars {
  display:none;
}
.fa-times {
  display:none;
}
.fa-search {
      font-size:1.2rem;
      margin-top:1%;
     }
.nav-item:hover .dropdown-content {display: flex;}
.nav-item:hover span  {
  
  border-bottom:2px solid white;


}

       
     
       #active {
 
          border-bottom:2px solid white;
       }
    i {
 color: white;
 cursor: pointer;
    }
   }

   .search {
       display:flex;
       justify-content:center;
       height:5rem;
      width:100%;
      background-color:#1690d2;
      .input {
         width:85%;
        
         height:100%;
         display:flex;
       justify-content:center;
       .input-field {
          display:flex;
          justify-content:center;
          align-items:center;
          width:90%;
          input {
             width:100%;
             background-color:#1690d2;
             height:50%;
             border: none;
             border-bottom: 1px solid white;
            font-size:1.5rem;
           
            ::placeholder {
               color:white;
}
          }
    
          }
          .close {
             cursor: pointer;
             display:flex;
             justify-content:center;
             align-items:center;
             width:10%;
             height:100%;

          i {
             font-size:2rem;
              color:white;

          }
       }
      }
    }
    .data {
       top:5rem;
      z-index: 1000;
       width:85%;
       position:absolute;
       height:50em;
       display:flex;
       justify-content:center;
       .data-2 {
          margin-top:1rem;
         background-color:white;
         width:75rem;
         height:100%;
         box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
         display:flex;
       justify-content:flex-start;
       flex-direction: column;
       overflow: scroll;
       align-items: center;
      
       .spinner {
          display: flex;
          justify-content: center;
         flex-direction: column;
          width: 100%;
          height: 100%;
          align-items: center;
          img {
             width: 10rem;
          }
          h3 {
             font-size: 2rem;
          }
       }
      
       .news {
         width:90%;
          display:flex;
       justify-content:center;
      
  align-items: center;
       box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
       flex-direction:column;
       .news-1 {
          margin-top:1rem;
          display:flex;
          justify-content:space-between;
           align-items:center;
          width:100%;
          height: 13rem;
      
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          img {
             width:20%;
             height:80%;
          }
          ul {
           
            height: 80%;
            width:65%;
            display: flex;
            justify-content:space-evenly;
            flex-direction: column;
            li {
               display: flex;
            justify-content:flex-start;
            align-items: center;
         
              img {
               
    width: 4%;
    height: 64%;

                 margin-left: 0.5rem;
              }

              :nth-child(4) {
               color: #0085C5; 
               font-size: 1.5rem;
            }
            :nth-child(1) {
              
               font-size: 1.7rem;
            }
            :nth-child(2) {
               font-weight: 900;
              font-size: 1.3rem;
           }
            p {
             
               font-size: 1rem;
            }

            }

          
            h3{
               font-size: 1.7rem;
               color: #0085C5;
            }
         }
       }
       }
       }
    
    }
   .sm {
      display:none;
   }
 
}



@media (max-width: 767px) {

display:flex;
justify-content:flex-start;
flex-direction:column;
align-items:center;
height:100%;
position:absolute;
top:0;
width:100%;

height:5rem;
background: linear-gradient(${props => props.theme.colors.blue}, #1cb5e0); 
.flex {
 height:5rem;

 width:95%;
 display:flex;
 justify-content:space-between;
align-items:center;
 .nav-item {
   display:none;
  
}
.nav-img{
   width: 74%;
    position: relative;
    height: 76%;
   }
   .fa-search {
      display:none
   }
   .fa-bars  {
      font-size:2rem;
      color:white;
      cursor: pointer;
    
   }
   .fa-times {
      font-size:2rem;
      color:white;
      cursor: pointer;
   }
}
.sm {
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
position: fixed;
right:0; 
width:100%;
height:100%;
z-index:2;
background-color:red;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
align-items:center;
background-color:#0a5d9f;
.logo {
   width:90%;
   height:10%;
  
   display:flex;
   justify-content:space-between;
   align-items:center;
   .img {
      width:80%;
      img {
         width:100%;
      }
      
   }
   i{
          font-size:2rem;
          color:white;
       }
} 
.link {
   width:100%;
    height:7%;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   
   
   h2 {
      color:white;
      font-size:1.2rem;
      color:white;
    cursor: pointer;
    font-weight:900;

   }

}
#first {
   width:100%;
   height:30%;

 h2 {
   height:15%;
   margin-top:2%;

 }
  
   .list {

   height:85%;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   h3 {
      height:20%;
      a {
         font-weight:0;
      }
   }
      
   }
  
}
#last{
      width:100%;
      height: 5.6%;
    margin-top:1%;
    h2 {
       text-transform: uppercase;
    }
      h3 {
        
      height:10%;
      }
      .list {
   
      height:90%;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      h3 {
         height: 29%;
      }
         
      }
     
   }

}
}



@media only screen and (device-width: 768px) {
  
  height:5rem;
  z-index:1;
   .flex {
       height:5rem;
     
       width:90%;
       display:flex;
       justify-content:space-between;
      align-items:center;
  .nav-img {
     position: relative;
      width: 25%;
       height: 100%;
  }
  
  .dropdown-content {
          z-index:3;
  display: none;
  position: fixed;

  background: ${props => props.theme.colors.blue};
   width:100%;
  top:0;
  left:0;
  height:4rem;

  z-index: 1;
  top:4rem;
  justify-content:center;
  align-items:center;
  .content {
     display:flex;
     justify-content:center;
     width:75%;
    margin-left:5%;
align-items:center;
height:100%;
     .list {
        width:70%;
        height:100%;
        display:flex;
        justify-content:space-between;
     
align-items:center;       
        h3 {
          
         
       
           font-size:1.1rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           color:white;
          
        }
        h3:hover {
           border-bottom: 2px solid white ;
       
        }
        
     }

     
  }
 

        }
       .nav-item {
           position: relative;
          cursor: pointer;
         color:white;
         height:100%;
         display:flex;
         justify-content:center;
         flex-direction:column;
        
         position: relative;
         img {
            cursor: pointer;
         }
  span {
   font-size: 0.9rem;
      text-align:center;
  }




}
.fa-bars {
  display:none;
}
.fa-times {
  display:none;
}
.fa-search {
      font-size:1.2rem;
      margin-top:1%;
     }
.nav-item:hover .dropdown-content {display: flex;}
.nav-item:hover span  {
  
  border-bottom:2px solid white;


}

       
     
       #active {
 
          border-bottom:2px solid white;
       }
    i {
 color: white;
 cursor: pointer;
    }
   }

   .search {
      display:flex;
      justify-content:center;
  
     width:100%;
     background-color:#1690d2;
     .input {
        width:76%;
       
        height:100%;
        display:flex;
      justify-content:center;
      .input-field {
         display:flex;
         justify-content:center;
         align-items:center;
         width:90%;
         input {
            width:100%;
            background-color:#1690d2;
            height:50%;
            border: none;
            border-bottom: 1px solid white;
           font-size:1.5rem;
          
           ::placeholder {
              color:white;
}
         }
   
         }
         .close {
            cursor: pointer;
            display:flex;
            justify-content:center;
            align-items:center;
            width:10%;
            height:100%;

         i {
            font-size:2rem;
             color:white;

         }
      }
     }
   }
   .sm {
      display:none;
   }
 
}




`