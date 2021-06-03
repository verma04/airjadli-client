

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;

@media (min-width: 1281px) {

   .flex{

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

@media (min-width: 1025px) and (max-width: 1280px)  {

    .flex{

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
    .flex{

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

    .flex{

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