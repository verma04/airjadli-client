

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;

@media (min-width: 1281px) {

   .flex{

       height:40rem;
    background-color: #1690d2;
       display:flex;
       justify-content:center;
      align-items: center;
       width:100%;
       .left {
             width: 40%;
             height: 100%;
             display:flex;
       justify-content:space-evenly;
         align-items: center;
        flex-direction: column;
        span {
            color:white;
        }
        li {
            color: white;
        }
        .head {
            width: 100%;
             display:flex;
             justify-content: space-evenly;
             flex-direction: column;
             height: 20%;
             
             h2 {
                 color:white;
                 font-size: 1.6rem;
             }

        }
        .mid {
            width: 100%;
             display:flex;
             justify-content: space-evenly;
             flex-direction: column;
             height: 70%;
             
             li {
                 width: 100%;
                 height: 20%;
                 display: flex;
                 font-size: 1.3rem;
                 justify-content: flex-start;
                  
              i {
                  font-size: 1.7rem;
                  margin-right: 1rem;
                  
                height: 100%;
                
                  
                  
              }
             }
        }

        .bottom {
            width: 100%;
             display:flex;
             justify-content: center;
             flex-direction: column;
             height: 10%;

        }
        .mid {
            width: 100%;
             display:flex;
             justify-content: center;
             flex-direction: column;
             height: 60%;

        }
       }
       .right {
             width: 40%;
             position: relative;
             height: 100%;
       }
      

   }
}

@media (min-width: 1025px) and (max-width: 1280px)  {

    .flex{

height:40rem;
background-color: #1690d2;
display:flex;
justify-content:center;
align-items: center;
width:100%;
.left {
      width: 40%;
      height: 100%;
      display:flex;
justify-content:space-evenly;
  align-items: center;
 flex-direction: column;
 span {
     color:white;
 }
 li {
     color: white;
 }
 .head {
     width: 100%;
      display:flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 20%;
      
      h2 {
          color:white;
          font-size: 1.6rem;
      }

 }
 .mid {
     width: 100%;
      display:flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 70%;
      
      li {
          width: 100%;
          height: 20%;
          display: flex;
          font-size: 1.3rem;
          justify-content: flex-start;
           
       i {
           font-size: 1.7rem;
           margin-right: 1rem;
           
         height: 100%;
         
           
           
       }
      }
 }

 .bottom {
     width: 100%;
      display:flex;
      justify-content: center;
      flex-direction: column;
      height: 10%;

 }
 .mid {
     width: 100%;
      display:flex;
      justify-content: center;
      flex-direction: column;
      height: 60%;

 }
}
.right {
      width: 40%;
      position: relative;
      height: 100%;
}


}
}

@media (min-width: 768px) and (max-width: 1024px) {
    .flex{

height:40rem;
background-color: #1690d2;
display:flex;
justify-content:center;
align-items: center;
width:100%;
.left {
      width: 40%;
      height: 100%;
      display:flex;
justify-content:space-evenly;
  align-items: center;
 flex-direction: column;
 span {
     color:white;
 }
 li {
     color: white;
 }
 .head {
     width: 100%;
      display:flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 20%;
      
      h2 {
          color:white;
          font-size: 1.6rem;
      }

 }
 .mid {
     width: 100%;
      display:flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 70%;
      
      li {
          width: 100%;
          height: 20%;
          display: flex;
          font-size: 1.3rem;
          justify-content: flex-start;
           
       i {
           font-size: 1.7rem;
           margin-right: 1rem;
           
         height: 100%;
         
           
           
       }
      }
 }

 .bottom {
     width: 100%;
      display:flex;
      justify-content: center;
      flex-direction: column;
      height: 10%;

 }
 .mid {
     width: 100%;
      display:flex;
      justify-content: center;
      flex-direction: column;
      height: 60%;

 }
}
.right {
      width: 40%;
      position: relative;
      height: 100%;
}


}

}
  

@media (max-width: 767px) {

    .flex{

height:60rem;
background-color: #1690d2;
display:flex;
justify-content:center;
align-items: center;
flex-direction: column-reverse;
width:100%;
.left {
      width: 90%;
      height: 45%;
      display:flex;
justify-content:space-evenly;
  align-items: center;
 flex-direction: column;
 span {
     color:white;
 }
 li {
     color: white;
 }
 .head {
     width: 100%;
      display:flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 20%;
      
      h2 {
          color:white;
          font-size: 1.6rem;
      }

 }
 .mid {
     width: 100%;
      display:flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 70%;
      
      li {
          width: 100%;
          height: 20%;
          display: flex;
          font-size: 1.3rem;
          justify-content: flex-start;
           
       i {
           font-size: 1.7rem;
           margin-right: 1rem;
           
         height: 100%;
         
           
           
       }
      }
 }

 .bottom {
     width: 100%;
      display:flex;
      justify-content: center;
      flex-direction: column;
      height: 10%;

 }
 .mid {
     width: 100%;
      display:flex;
      justify-content: center;
      flex-direction: column;
      height: 60%;

 }
}
.right {
      width: 100%;
      height: 45%;
      position: relative;
   
}


}
}


`