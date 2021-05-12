

import styled from 'styled-components'



export const Nav = styled.nav`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
height:100%;
position:absolute;
top:0;
width:100%;

@media   (min-width: 1281px) {
   z-index:1000;
   height:5rem;

    .flex {
        height:5rem;
        z-index:1000;
     
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

  width:100%;
  top:0;
  left:0;
  height:12rem;

  z-index: 1;
  top:4rem;
  justify-content:center;
  .content {
     display:flex;
     justify-content:center;
     width:60%;
    margin-left:5%;

     .list {
        width:50%;
        height:100%;
        display:flex;
        justify-content:space-between;
   
       
       
        h3 {
           height:18%;
  
       
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
    .data {
       top:5rem;
      
       width:100%;
       position:absolute;
       height:25rem;
       display:flex;
       justify-content:center;
       .data-2 {
          margin-top:2rem;
         background-color:white;
         width:76%;
         height:100%;
         border: 1px solid red;
         display:flex;
       justify-content:space-around;
  
       .network {
          width:40%;
          display:flex;
       justify-content:center;
       overflow: auto;
       height:100%;
       border: 1px solid red;
       }
       .news {
         width:40%;
          display:flex;
       justify-content:center;
       overflow: auto;

       border: 1px solid red;
       flex-direction:column;
       .news-1 {
          margin-top:1rem;
          display:flex;
          justify-content:space-evenly;
           align-items:center;
          width:100%;
    
          border: 1px solid red;
          img {
             width:30%;
             height:100%;
          }
          h3 {
             width:65%;
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
   z-index:1000;
   height:5rem;

    .flex {
        height:5rem;
        z-index:1000;
        width:75%;
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

  width:100%;
  top:0;
  left:0;
  height:12rem;

  z-index: 1;
  top:4rem;
  justify-content:center;
  .content {
     display:flex;
     justify-content:center;
     width:70%;
    margin-left:5%;

     .list {
        width:50%;
        height:100%;
        display:flex;
        justify-content:space-between;
   
       
       
        h3 {
           height:18%;
  
         text-align:center;
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
    .data {
       top:5rem;
      
       width:100%;
       position:absolute;
       height:25rem;
       display:flex;
       justify-content:center;
       .data-2 {
          margin-top:2rem;
         background-color:white;
         width:76%;
         height:100%;
         border: 1px solid red;
         display:flex;
       justify-content:space-around;
  
       .network {
          width:40%;
          display:flex;
       justify-content:center;
       overflow: auto;
       height:100%;
       border: 1px solid red;
       }
       .news {
         width:40%;
          display:flex;
       justify-content:center;
       overflow: auto;

       border: 1px solid red;
       flex-direction:column;
       .news-1 {
          margin-top:1rem;
          display:flex;
          justify-content:space-evenly;
           align-items:center;
          width:100%;
    
          border: 1px solid red;
          img {
             width:30%;
             height:100%;
          }
          h3 {
             width:65%;
          }
       }
       }
       }
    
    }
    .sm {
       display:none;
    }
}


@media (min-width: 769px) and (max-width: 1024px) {
  
   height:5rem;
   z-index:1000;
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

  width:100%;
  top:0;
  left:0;
  height:12rem;

  z-index: 1;
  top:4rem;
  justify-content:center;
  .content {
     display:flex;
     justify-content:center;
     width:60%;
    margin-left:5%;
    
     .list {
        width:70%;
        height:100%;
        display:flex;
        justify-content:space-between;
   
       
        h3 {
           height:18%;
          
       
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
    .data {

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

   height:30rem;
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
         width:80%;
         position: relative;
         height:70%;
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
   justify-content:center;
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
      height:20.6%;
    margin-top:1%;
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

/* For general iPad layouts */
@media only screen and (device-width: 768px) {
  
   height:5rem;
   z-index:1000;
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

  width:100%;
  top:0;
  left:0;
  height:12rem;

  z-index: 1;
  top:3rem;
  justify-content:center;
  .content {
     display:flex;
     justify-content:center;
     width:70%;
    margin-left:5%;
    
     .list {
        width:70%;
        height:100%;
        display:flex;
        justify-content:space-between;
   
       
        h3 {
           height:18%;
          
       
           font-size:1rem;
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
    .data {

    }
    .sm {
       display:none;
    }
  

}


`