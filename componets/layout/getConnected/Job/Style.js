

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;


@media (min-width: 1035px) {

    .flex {
       width:76%;
       
       display:flex;
       justify-content:center;
     flex-direction:column;
  margin-bottom:2rem;
     .flex-1 {
        margin-top:3rem;
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
             width:45%;
              position: relative;
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
               width:10rem;
               height:4rem;
             }
            
             }
             .fa-edit {
    top:0;
    right: -10%;
             }

             .peta {
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
         .right{
             width:45%;
             height:13rem;
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
     text-decoration:underline;
             }
             }
         }

         

     }

     }
   }

  

}

@media (min-width: 768px) and (max-width: 1024px) {
    .flex {
       width:80%;
       
       display:flex;
       justify-content:center;
     flex-direction:column;
  margin-bottom:2rem;
     .flex-1 {
        margin-top:3rem;
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
             width:45%;
              position: relative;
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
               width:10rem;
               height:4rem;
             }
            
             }
             .fa-edit {
    top:0;
    right: -10%;
             }

             .peta {
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
         .right{
             width:45%;
             height:13rem;
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
     text-decoration:underline;
             }
             }
         }

         

     }

     }
   }

}

@media (max-width: 600px) {

.flex {
    width:90%;
    
    display:flex;
    justify-content:center;
  flex-direction:column;
  .bird {
      display:none;
        top: 1rem;
      
    height: 38rem;
    position: absolute;

        img {
            width:100%;
            left:0%;
            height:100%;
        }
    }
  .flex-1 {
     margin-top:2rem;
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
          h3 {
              font-weight:900;
          }
          p {
              margin-top:0.5rem;
          }
          }
      }
      .right{
          width:100%;
          margin-top:1rem;
          display:flex;
          justify-content:flex-end;
          align-items:flex-end;
          flex-direction:column;
          .box {
              height:40%;
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
              padding-bottom:1rem;
             color: ${props => props.theme.colors.blue};
          }
          }
      }
  }

  }
}



}
`