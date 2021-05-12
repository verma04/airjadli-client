

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;

@media (min-width: 1281px) {

   .flex{

       height:24rem;

       display:flex;
       justify-content:space-between;
       flex-direction:column;
       width:75rem;
       .head {
           width:100%;
           height:5%;
           display:flex;
       justify-content:center;
       flex-direction:column;
       h1 {
           
    color: ${props => props.theme.colors.blue};
       }

       }
       .logo {
        display:flex;
       justify-content:space-around;
      align-items:center;
       width:70%;
           height:95%;

           width:100%;

           .logo1 {
               width:15%;
               height:80%;
               
               display:flex;
       justify-content:center;
      align-items:center;
      flex-direction:column;
      .img {
          position: relative;
          width:100%;
          height: 60%;
     
      }
      h2 {
        margin-top:1rem;
            text-align:center;
            font-weight:900;
            height:10%;
          }
          span {
            height:10%;
            text-align:center;
            font-size:1.3rem;
              
          }
           }

          
       }

   }
}

@media (min-width: 1025px) and (max-width: 1280px)  {

    .flex{

height:24rem;

display:flex;
justify-content:space-between;
flex-direction:column;
width:76%;
.head {
    width:100%;
    height:5%;
    display:flex;
justify-content:center;
flex-direction:column;
h1 {
    
color: ${props => props.theme.colors.blue};
}

}
.logo {
 display:flex;
justify-content:space-around;
align-items:center;
width:70%;
    height:95%;

    width:100%;

    .logo1 {
        width:15%;
        height:80%;
        
        display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
.img {
   position: relative;
   width:100%;
   height: 60%;

}
h2 {
 margin-top:1rem;
     text-align:center;
     font-weight:900;
     height:10%;
   }
   span {
     height:10%;
     text-align:center;
     font-size:1.3rem;
       
   }
    }

   
}

}
}

@media (min-width: 768px) and (max-width: 1024px) {
    .flex{

height:24rem;

display:flex;
justify-content:space-between;
flex-direction:column;
width:90%;
.head {
    width:100%;
    height:5%;
    display:flex;
justify-content:center;
flex-direction:column;
h1 {
    
color: ${props => props.theme.colors.blue};
}

}
.logo {
 display:flex;
justify-content:space-between;
align-items:center;

    height:95%;

    width:100%;

    .logo1 {
        width:22%;
        height:80%;
        
        display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
.img {
   position: relative;
   width:100%;
   height: 60%;

}
h2 {
 margin-top:1rem;
     text-align:center;
     font-weight:900;
     height:10%;
   }
   span {
     height:10%;
     text-align:center;
     font-size:1.3rem;
       
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
width:90%;
.head {
    width:100%;
    height:3rem;
    display:flex;
justify-content:center;
flex-direction:column;
h1 {
color: ${props => props.theme.colors.blue};
}

}
.logo {
 display:flex;
justify-content:space-around;
align-items:center;
flex-wrap: wrap;
width:100%;
    height:35rem;

    width:100%;

    .logo1 {
        width:45%;
        height:45%;
         
        display:flex;
justify-content:space-around;
align-items:center;
flex-direction:column;
.img {
   position: relative;
   width:90%;
   height: 60%;

}
h2 {
     text-align:center;
     font-weight:900;
    
   }
   span {
     text-align:center;
     font-size:1.1rem;
       
   }
    }

   
}

}

}


`