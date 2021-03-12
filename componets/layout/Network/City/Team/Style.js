


import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;

@media (min-width: 1035px) {

   .flex{

      

       display:flex;
       justify-content:space-between;
       flex-direction:column;
       align-items:center;
       width:90%;
       .head {
           width:90%;
        height:3rem;
           display:flex;
       justify-content:space-evenly;
       align-items:center;
      
    
       
       h2 {
           text-transform:uppercase;
         cursor: pointer;
    color: ${props => props.theme.colors.blue};
       }

       }
       .data {
     width:90%;

     .team {
         display:flex;
         justify-content:space-evenly;
         align-items:center;
         flex-flow: wrap;
         .member {
            width:30%;
            height:25rem;
            background-color: transparent;
            margin-top:2rem;
            cursor: pointer;
            position: relative;
            .flip-card-front {
              display:block;
            .det {
                position: absolute;
                width:60%;
                height:4rem;
                left:3%;
                bottom:4%;
                opacity:1;
                background:rgba(255,255,255, 0.9);
                display:flex;
               justify-content:center;
                .data {
                    width:90%;
                  
               display:flex;
               justify-content:center;
              
               align-items:center;
               flex-direction:column;
               h2 {
                   
                 text-align:left;
                 width:100%;
               }
               span {
                text-align:left;
                width:100%;
               }
                }
            }
            }

             .flip-card-front:hover {
                display:none;
             }

             .flip-card-back {
               width:100%;
               height:100%;
               display:flex;
               justify-content:center;
               flex-direction:column;
               align-items:center;
               h3 {
                 width:95%;
                 font-weight:900;
                
               }
               h4 {
                width:95%;
                 font-size:1.2rem;
               }
               p {
                width:95%;
                font-size:1.1rem;
               }
               background-color:#ddf3ff;
             }

         }
     }
      
       }

       .btn {
         margin-top:5rem;
         button {
     font-size:1.2rem;
     width:10rem;
     height:2rem;
     color: #0085C5;
     border: 1px solid #0085C5;
     background-color:white;
         }
       }

   }
}
  
@media (max-width: 600px) {
    .flex{

      

display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
width:90%;
.head {
    width:90%;
 height:3rem;
    display:flex;
justify-content:space-evenly;
align-items:center;


h2 {
text-transform:uppercase;
color: ${props => props.theme.colors.blue};
}



}
.data {
width:100%;

.team {
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  flex-flow: wrap;
  .member {
     width:49%;
     height:15rem;
     flex-wrap: wrap;

     margin-top:2rem;
     position: relative;

     .det {
         position: absolute;
         width:95%;
         height:6rem;
     
       
         bottom:5%;
         opacity:1;
         background:rgba(255,255,255, 0.9);
         display:flex;
        justify-content:center;
         .data {
             width:90%;
           
        display:flex;
        justify-content:center;
       
        align-items:center;
        flex-direction:column;
        h2 {
            text-transform:uppercase;
          text-align:left;
          width:100%;
        }
        span {
         text-align:left;
         width:100%;
        }
        
         }
     }

     .flip-card-back {
          display:none;
         }

  }
}

}


.btn {
         margin-top:3rem;
         button {
     font-size:1.2rem;
     width:10rem;
     height:2rem;
     color: #0085C5;
     border: 1px solid #0085C5;
     background-color:white;
         }
       }

}

}

`