


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
       width:80%;
       .head {
           width:100%;
        height:3rem;
           display:flex;
       justify-content:space-between;
       align-items:center;
      
    
       
       h2 {
           text-transform:uppercase;
         cursor: pointer;
    color: ${props => props.theme.colors.blue};
       }
        i {
          font-size:3rem;
          cursor: pointer;
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
height: 300px;
margin-bottom:0.9rem;


}

.flip-card-inner {
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 1s;
transform-style: preserve-3d;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);


}

.flip-card:hover .flip-card-inner {
transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
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
background-color: rgb(221,243,255);
color: white;
transform: rotateY(180deg);
display:flex;
justify-content:center;
align-items:center;

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