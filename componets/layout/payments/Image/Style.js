

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:1rem;
width: 100%;

background-color: #F0F0F0;
@media (min-width: 1281px) {
padding-top: 1.5rem;
padding-bottom: 1.5rem;
   .flex-1{

       height:20rem;

       display:flex;
       justify-content:space-between;
       flex-direction:column;
       align-items: center;
       width:75rem;
      
       .logo {
        display:flex;
       justify-content:space-around;
      align-items:center;
       width:100%;
           height:95%;
  
      

        position: relative;
          
       }

   }
}

@media (min-width: 1025px) and (max-width: 1280px)  {

    .flex-1{

height:20rem;

display:flex;
justify-content:space-between;
flex-direction:column;
align-items: center;
width:75rem;

.logo {
 display:flex;
justify-content:space-around;
align-items:center;
width:70%;
    height:95%;



 position: relative;
   
}

}
}

@media (min-width: 768px) and (max-width: 1024px) {
    .flex-1{

height:20rem;

display:flex;
justify-content:space-between;
flex-direction:column;
align-items: center;
width:75rem;

.logo {
 display:flex;
justify-content:space-around;
align-items:center;
width:70%;
    height:95%;



 position: relative;
   
}

}

}
  

@media (max-width: 767px) {

    .flex-1{

height:10rem;

display:flex;
justify-content:space-between;
flex-direction:column;
align-items: center;
width:100rem;

.logo {
 display:flex;
justify-content:space-around;
align-items:center;
width:70%;
    height:95%;



 position: relative;
   
}

}

}


`