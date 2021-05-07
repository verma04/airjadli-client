

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;


@media  (min-width: 1281px) {

   .flex{
       display:flex;
       justify-content:space-between;
       flex-direction:column;
       align-items:center;
       width:75rem;
       z-index:1000;
       .head {
           width:100%;
        height:3rem;
           display:flex;
           
       justify-content: flex-start;
       align-items:center;
      
      
       
      span {
          margin-left:1rem;
          margin-right:1rem;
         z-index:1000;
         text-transform:uppercase;
         cursor: pointer;
         font-size:1.2rem;
    color: ${props => props.theme.colors.blue};
   
       }
       #active {
        border-bottom:2px solid  #4089bd;;
      }
       

       }
       .data {
     width:100%;

    .team {
      z-index:900;
         flex-flow: wrap;
         width:100%;
         margin-top:3rem;
         .flip-card {
          z-index:1000;
  background-color: transparent;
  width: 98%;
  height: 300px;
  margin-bottom:0.9rem;


}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;

  cursor: pointer;
  overflow: hidden;


}





.flip-card-front {
background-color: rgb(221,243,255);
  color: black;
  img {
    width:100%;
    height:100%;
  }
  .det {
                position: absolute;
               
            
                left:3%;
                bottom:4%;
                opacity:1;
                background:rgba(255,255,255, 0.9);
                display:flex;
               justify-content:center;
                .data {
                
                    width:100%;
                    padding:0.5rem;
                  
               display:flex;
               justify-content:center;
              
             
               flex-direction:column;
               h2 {
                   
                 text-align:left;
                 width:100%;
                   font-weight:900;
               }
               span {
                text-align:left;
                width:50%;
               }
                }
            }
}

.flip-card-back {
 
  color: white;

  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgb(221,243,255);
  z-index:1000;

  width:100%;
  height:100%;
  transition: all 400ms ;
  text-align: center;
  .data {
    display:flex;
    justify-content:flex-start;
      align-items:left;
     flex-direction:column;
     width:100%;
     height:100%;

     h1 {
       margin:0.3rem;
       text-align:left;
  
       font-weight:900;
     }
     p {
     padding:0.3rem;
       font-size:0.9rem;
      text-align:left;
      
      background-color: rgb(221,243,255);
      z-index:1000;
      margin-bottom:1rem;
     }
  }
}


.flip-card-inner .flip-card-back:hover  {
  opacity: 1;
  transform: translateY(50px);

}


     }

     .team-1 {
       display:none;
     }
     .btn {

       width:100%;
         margin-top:5rem;
         display:flex;
         justify-content:center;
         button {
     font-size:1.2rem;
     width:13rem;
    
     font-weight:900;
     padding:0.6rem;
     color: #0085C5;
     border: 1px solid #0085C5;
     background-color:white;
         }
       }
       }

     

   }
}

@media (min-width: 1024px) and (max-width: 1280px) {

.flex{

   

    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    width:85%;
    .head {
        width:100%;
     height:3rem;
        display:flex;
        
    justify-content: flex-start;
    align-items:center;
   
   
    
   span {
       margin-left:1rem;
       margin-right:1rem;
      z-index:1000;
      text-transform:uppercase;
      cursor: pointer;
      font-size:1.2rem;
 color: ${props => props.theme.colors.blue};

    }
    #active {
     border-bottom:2px solid  #4089bd;;
   }
    

    }
    .data {
  width:100%;

  .team {
   z-index:1000;
      flex-flow: wrap;
      width:100%;
      margin-top:3rem;
      .flip-card {
background-color: transparent;
width: 98%;
height: 300px;
margin-bottom:0.9rem;


}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;

  cursor: pointer;
  overflow: hidden;


}





.flip-card-front {
background-color: rgb(221,243,255);
  color: black;
  img {
    width:100%;
    height:100%;
  }
  .det {
                position: absolute;
               
            
                left:3%;
                bottom:4%;
                opacity:1;
                background:rgba(255,255,255, 0.9);
                display:flex;
               justify-content:center;
                .data {
                
                    width:100%;
                    padding:0.5rem;
                  
               display:flex;
               justify-content:center;
              
             
               flex-direction:column;
               h2 {
                   
                 text-align:left;
                 width:100%;
                   font-weight:900;
               }
               span {
                text-align:left;
                width:50%;
               }
                }
            }
}

.flip-card-back {
 
  color: white;

  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgb(221,243,255);
  z-index:1000;

  width:100%;
  height:100%;
  transition: all 400ms ;
  text-align: center;
  .data {
    display:flex;
    justify-content:flex-start;
      align-items:left;
     flex-direction:column;
     width:100%;
     height:100%;

     h1 {
       margin:0.3rem;
       text-align:left;
  
       font-weight:900;
     }
     p {
     padding:0.3rem;
       font-size:0.9rem;
      text-align:left;
      
      background-color: rgb(221,243,255);
      z-index:1000;
      margin-bottom:1rem;
     }
  }
}


.flip-card-inner .flip-card-back:hover  {
  opacity: 1;
  transform: translateY(50px);

}

  }

  .team-1 {
    display:none;
  }
  .btn {

    width:100%;
      margin-top:5rem;
      display:flex;
      justify-content:center;
      button {
  font-size:1.2rem;
  width:13rem;
 
  font-weight:900;
  padding:0.6rem;
  color: #0085C5;
  border: 1px solid #0085C5;
  background-color:white;
      }
    }
    }

  

}
}

@media (min-width: 768px) and (max-width: 1024px) {
  .flex{

      

display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
width:90%;
.head {
    width:100%;
 height:3rem;
    display:flex;
    
justify-content: flex-start;
align-items:center;



span {
   margin-left:1rem;
   margin-right:1rem;
  z-index:1000;
  text-transform:uppercase;
  cursor: pointer;
  font-size:1rem;
  text-align:center;
color: ${props => props.theme.colors.blue};

}
#active {
 border-bottom:2px solid  #4089bd;;
}


}
.data {
width:100%;

.team {

  flex-flow: wrap;
  width:100%;
  margin-top:3rem;
  .flip-card {
background-color: transparent;
width: 98%;
max-height:400px;
margin-bottom:0.9rem;


}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;

  cursor: pointer;
  overflow: hidden;


}





.flip-card-front {
background-color: rgb(221,243,255);
  color: black;
  img {
    width:100%;
    height:100%;
  }
  .det {
                position: absolute;
               
            
                left:3%;
                bottom:4%;
                opacity:1;
                background:rgba(255,255,255, 0.9);
                display:flex;
               justify-content:center;
                .data {
                
                    width:100%;
                    padding:0.5rem;
                  
               display:flex;
               justify-content:center;
              
             
               flex-direction:column;
               h2 {
                   
                 text-align:left;
                 width:100%;
                   font-weight:900;
               }
               span {
                text-align:left;
                width:50%;
               }
                }
            }
}

.flip-card-back {
 
  color: white;

  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgb(221,243,255);
  z-index:1000;

  width:100%;
  height:100%;
  transition: all 400ms ;
  text-align: center;
  .data {
    display:flex;
    justify-content:flex-start;
      align-items:left;
     flex-direction:column;
     width:100%;
     height:100%;

     h1 {
       margin:0.3rem;
       text-align:left;
  
       font-weight:900;
     }
     p {
     padding:0.3rem;
       font-size:0.9rem;
      text-align:left;
      
      background-color: rgb(221,243,255);
      z-index:1000;
      margin-bottom:1rem;
     }
  }
}


.flip-card-inner .flip-card-back:hover  {
  opacity: 1;
  transform: translateY(20px);

}

}
.team-1 {
       display:none;
     }
.btn {

width:100%;
  margin-top:5rem;
  display:flex;
  justify-content:center;
  button {
font-size:1.2rem;
width:13rem;

font-weight:900;
padding:0.6rem;
color: #0085C5;
border: 1px solid #0085C5;
background-color:white;
  }
}
}



}

}
@media (max-width: 767px) {

.flex{

   

    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    width:95%;
    .head {
        width:100%;
     height:20rem;
        display:flex;
        
    justify-content: space-between;
    align-items:left;
    flex-direction:column;
   
   
    
   span {
       margin-left:1rem;
       margin-right:1rem;
      z-index:1000;
    
      text-transform:uppercase;
      cursor: pointer;
      font-size:1.2rem;
 color: ${props => props.theme.colors.blue};

    }
    #active {
      border-bottom: 2px solid #4089bd;
    width: 43%;
     border-bottom:2px solid  #4089bd;;
   }
    

    }
    .data {
  width:100%;

  .team-1 {
   z-index:1000;
      flex-flow: wrap;
      width:100%;
      margin-top:3rem;
      .flip-card {
background-color: transparent;
width: 98%;
height: 300px;
margin-bottom:0.9rem;


}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;

  cursor: pointer;
  overflow: hidden;


}





.flip-card-front {
background-color: rgb(221,243,255);
  color: black;
  img {
    width:100%;
    height:100%;
  }
  .det {
                position: absolute;
               
            
                left:3%;
                bottom:4%;
                opacity:1;
                background:rgba(255,255,255, 0.9);
                display:flex;
               justify-content:center;
                .data {
                
                    width:100%;
                    padding:0.5rem;
                  
               display:flex;
               justify-content:center;
              
             
               flex-direction:column;
               h2 {
                   
                 text-align:left;
                 width:100%;
                   font-weight:900;
               }
               span {
                text-align:left;
                width:50%;
               }
                }
            }
}

.flip-card-back {
 
  color: white;

  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgb(221,243,255);
  z-index:1000;

  width:100%;
  height:100%;
  transition: all 400ms ;
  text-align: center;
  .data {
    display:flex;
    justify-content:flex-start;
      align-items:left;
     flex-direction:column;
     width:100%;
     height:100%;

     h1 {
       margin:0.3rem;
       text-align:left;
  
       font-weight:900;
     }
     p {
     padding:0.3rem;
       font-size:0.9rem;
      text-align:left;
      
      background-color: rgb(221,243,255);
      z-index:1000;
      margin-bottom:1rem;
     }
  }
}


.flip-card-inner .flip-card-back:hover  {
  opacity: 1;
  transform: translateY(50px);

}

  }


  .team {
       display:none;
     }
  .btn {

    width:100%;
      margin-top:5rem;
      display:flex;
      justify-content:center;
      button {
  font-size:1.2rem;
  width:13rem;
 
  font-weight:900;
  padding:0.6rem;
  color: #0085C5;
  border: 1px solid #0085C5;
  background-color:white;
      }
    }
    }

  

}
}


`