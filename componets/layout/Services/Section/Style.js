

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
align-items:center;
flex-direction:column;
width: 100%;

@media (min-width: 1281px) {
    
    .haed {
       
        width:80%;
      
        display:flex;
        justify-content:space-between;
        margin-top:2rem;
        align-items:center;
        .fa-plus-circle {
            position: relative;
            font-size:3rem;
            color: ${props => props.theme.colors.blue};
            cursor: pointer;
        }
        h2 {
            font-size:2rem;
            color: ${props => props.theme.colors.blue};
            text-transform:uppercase;
        }

    }

   .flex {
       width:80%;
      
       display:flex;
       justify-content:center;
     flex-direction:column;
  margin-bottom:2rem;
     .flex-1 {
        margin-top:2rem;
        margin-bottom: 5rem;
     .head {
         height:3rem;
         display:flex;
       justify-content:center;
     flex-direction:column;
     
     h2 {
     color: ${props => props.theme.colors.blue};
     font-size:1.7rem;
     }
     }
     .data {
         display:flex;
         justify-content:space-between;

         .left {
             width:65%;
              position: relative;
             display:flex;
             justify-content:center;
             flex-direction:column;
             .des {
               margin-top: 4rem;
                 display:flex;
                 display:flex;
             justify-content:center;
             flex-direction:column;
             margin-top:1rem;
             .img {
                 position: relative;
               width:100%;
               height:20rem;
             }
             .p {
                 margin-top:0.5rem;


               
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
         
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
             
             }
             .fa-edit {
     bottom:0;
             }
         }
         .right{
           margin-top: 1rem;
             width:30%;
             height: 20rem;
             display:flex;
             justify-content:flex-end;
             align-items:flex-end;
             flex-direction:column;
                 
                form {
                    height:100%;
                 width:100%;
                 border: 1px solid;
                 display:flex;
                 justify-content:space-evenly;
                 align-items:center;
                 flex-direction:column;
                 input {
                     width:90%;
                     height:20%;
                     padding-left:1rem;
                 }
                 textarea {
                     width:90%;
                     height:40%;
                     padding-left:1rem;
                 }

                 .btn {
                height:20%;
                width:90%;
                display:flex;
                justify-content:flex-end;
             align-items:center;
             button {

    padding: 0.2rem;
    border: none;
    font-size: 1rem;
   
    background-color: #0085C5;
    color: white;
    
    height:2rem;
 
     font-size:1rem;
     width: 15%;
     margin-left:1rem;
}

             

            }
            
                }

             .box {
                 position: relative;
                 height:100%;
                 width:100%;
                 
                 background-color: ${props => props.theme.colors.lightblue};
                 display:flex;
             justify-content:flex-start;
             align-items:center;
             flex-direction:column;
         
             .contact {
                 width:80%;
                
               h3 {
                color: ${props => props.theme.colors.blue};
                font-weight:900;
               }
               p {
                color: ${props => props.theme.colors.blue};
               }
                 margin-top:5%;
             }
             .bottom {
                 width:80%;
                 text-align:left;
                 margin-top:3%;
                color: ${props => props.theme.colors.blue};
                margin-bottom:3%;

             }
             }
         }

         

     }

     }
   }

  

}



@media (min-width: 1024px) and (max-width: 1280px) {
    
    .haed {
       
        width:80%;
      
        display:flex;
        justify-content:space-between;
        margin-top:2rem;
        align-items:center;
        .fa-plus-circle {
            position: relative;
            font-size:3rem;
            color: ${props => props.theme.colors.blue};
            cursor: pointer;
        }
        h2 {
            font-size:2rem;
            color: ${props => props.theme.colors.blue};
            text-transform:uppercase;
        }

    }

   .flex {
       width:80%;
      
       display:flex;
       justify-content:center;
     flex-direction:column;
  margin-bottom:2rem;
     .flex-1 {
        margin-top:2rem;
        margin-bottom: 5rem;
     .head {
         height:3rem;
         display:flex;
       justify-content:center;
     flex-direction:column;
     
     h2 {
     color: ${props => props.theme.colors.blue};
     font-size:1.7rem;
     }
     }
     .data {
         display:flex;
         justify-content:space-between;

         .left {
             width:65%;
              position: relative;
             display:flex;
             justify-content:center;
             flex-direction:column;
             .des {
               margin-top: 4rem;
                 display:flex;
                 display:flex;
             justify-content:center;
             flex-direction:column;
             margin-top:1rem;
             .img {
                 position: relative;
               width:100%;
               height:34rem;
             }
             p {
                 margin-top:0.5rem;


               
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
             
             }
             .fa-edit {
     bottom:0;
             }
         }
         .right{
             width:30%;
             height: 20rem;
             display:flex;
             justify-content:flex-end;
             align-items:flex-end;
             flex-direction:column;
                 
                form {
                    height:100%;
                 width:100%;
                 border: 1px solid;
                 display:flex;
                 justify-content:space-evenly;
                 align-items:center;
                 flex-direction:column;
                 input {
                     width:90%;
                     height:20%;
                     padding-left:1rem;
                 }
                 textarea {
                     width:90%;
                     height:40%;
                     padding-left:1rem;
                 }

                 .btn {
                height:20%;
                width:90%;
                display:flex;
                justify-content:flex-end;
             align-items:center;
             button {

    padding: 0.2rem;
    border: none;
    font-size: 1rem;
   
    background-color: #0085C5;
    color: white;
    
    height:2rem;
 
     font-size:1rem;
     width: 15%;
     margin-left:1rem;
}

             

            }
            
                }

             .box {
                 position: relative;
                 height:100%;
                 width:100%;
                 
                 background-color: ${props => props.theme.colors.lightblue};
                 display:flex;
             justify-content:flex-start;
             align-items:center;
             flex-direction:column;
         
             .contact {
                 width:80%;
                
               h3 {
                color: ${props => props.theme.colors.blue};
                font-weight:900;
               }
               p {
                color: ${props => props.theme.colors.blue};
               }
                 margin-top:5%;
             }
             .bottom {
                 width:80%;
                 text-align:left;
                 margin-top:3%;
                color: ${props => props.theme.colors.blue};
                margin-bottom:3%;

             }
             }
         }

         

     }

     }
   }

  

}


@media (min-width: 768px) and (max-width: 1024px) {
    
    .haed {
       
        width:80%;
      
        display:flex;
        justify-content:space-between;
        margin-top:2rem;
        align-items:center;
        .fa-plus-circle {
            position: relative;
            font-size:3rem;
            color: ${props => props.theme.colors.blue};
            cursor: pointer;
        }
        h2 {
            font-size:2rem;
            color: ${props => props.theme.colors.blue};
            text-transform:uppercase;
        }

    }

   .flex {
       width:80%;
      
       display:flex;
       justify-content:center;
     flex-direction:column;
  margin-bottom:2rem;
     .flex-1 {
        margin-top:2rem;
        margin-bottom: 5rem;
     .head {
         height:3rem;
         display:flex;
       justify-content:center;
     flex-direction:column;
     
     h2 {
     color: ${props => props.theme.colors.blue};
     font-size:1.7rem;
     }
     }
     .data {
         display:flex;
         justify-content:space-between;

         .left {
             width:65%;
              position: relative;
             display:flex;
             justify-content:center;
             flex-direction:column;
             .des {
               margin-top: 4rem;
                 display:flex;
                 display:flex;
             justify-content:center;
             flex-direction:column;
             margin-top:1rem;
             .img {
                 position: relative;
               width:100%;
               height:34rem;
             }
             p {
                 margin-top:0.5rem;


               
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
             
             }
             .fa-edit {
     bottom:0;
             }
         }
         .right{
             width:30%;
             height: 20rem;
             display:flex;
             justify-content:flex-end;
             align-items:flex-end;
             flex-direction:column;
                 
                form {
                    height:100%;
                 width:100%;
                 border: 1px solid;
                 display:flex;
                 justify-content:space-evenly;
                 align-items:center;
                 flex-direction:column;
                 input {
                     width:90%;
                     height:20%;
                     padding-left:1rem;
                 }
                 textarea {
                     width:90%;
                     height:40%;
                     padding-left:1rem;
                 }

                 .btn {
                height:20%;
                width:90%;
                display:flex;
                justify-content:flex-end;
             align-items:center;
             button {

    padding: 0.2rem;
    border: none;
    font-size: 1rem;
   
    background-color: #0085C5;
    color: white;
    
    height:2rem;
 
     font-size:1rem;
     width: 15%;
     margin-left:1rem;
}

             

            }
            
                }

             .box {
                 position: relative;
                 height:100%;
                 width:100%;
                 
                 background-color: ${props => props.theme.colors.lightblue};
                 display:flex;
             justify-content:flex-start;
             align-items:center;
             flex-direction:column;
         
             .contact {
                 width:80%;
                
               h3 {
                color: ${props => props.theme.colors.blue};
                font-weight:900;
               }
               p {
                color: ${props => props.theme.colors.blue};
               }
                 margin-top:5%;
             }
             .bottom {
                 width:80%;
                 text-align:left;
                 margin-top:3%;
                color: ${props => props.theme.colors.blue};
                margin-bottom:3%;

             }
             }
         }

         

     }

     }
   }

  

}

@media (max-width: 767px) {
z-index:-1;

.haed {
       
       width:90%;
     
       display:flex;
       justify-content:space-between;
       margin-top:2rem;
       align-items:center;
       .fa-plus-circle {
           position: relative;
           font-size:3rem;
           color: ${props => props.theme.colors.blue};
           cursor: pointer;
       }
       h2 {
           font-size:2rem;
           color: ${props => props.theme.colors.blue};
           text-transform:uppercase;
       }

   }
.flex {
    width:90%;
    
    display:flex;
    justify-content:center;
  flex-direction:column;

  .flex-1 {
     margin-top:2rem;
  .head {
   
      display:flex;
    justify-content:center;
  flex-direction:column;
  h2 {
  color: ${props => props.theme.colors.blue};
  font-size:1.7rem;
  }
  }
  .data {
      display:flex;
      justify-content:space-between;
      flex-direction:column;

      .left {
          width:100%;
         
          display:flex;
          justify-content:center;
          flex-direction:column;
          .des {
              display:flex;
              display:flex;
          justify-content:center;
          flex-direction:column;
          margin-top:1rem;
          .img {
              position: relative;
            width:100%;
            height:10rem;
          }
          .p {
              margin-top:0.5rem;
          }
          }
      }
      .right{
          width:100%;
           margin-top: 2rem;
          display:flex;
          justify-content:flex-end;
          align-items:flex-end;
          flex-direction:column;
          .box {
              height:100%;
              width:100%;
              
              background-color: ${props => props.theme.colors.lightblue};
              display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          .contact {
              width:80%;
             
            h3 {
             color: ${props => props.theme.colors.blue};
             font-weight:900;
            }
            p {
             color: ${props => props.theme.colors.blue};
            }
              margin-top:5%;
              
          }
          .bottom {
              width:80%;
              text-align:left;
              margin-top:3%;
             color: ${props => props.theme.colors.blue};
             margin-bottom: 5%;
          }
          }
      }
  }

  }
}



}
`