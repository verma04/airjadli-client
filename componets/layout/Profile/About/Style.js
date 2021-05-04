

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;

@media (min-width: 1281px)  {

.flex{



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
    .data {
        margin-top:1rem;
     display:flex;
    justify-content:space-around;
    flex-direction:column;
    width:100%;
        height:95%;
  
        width:60%;
        p {
            font-size:1.2rem;
        }
    }

}
}

  @media (min-width: 1025px) and (max-width: 1280px)  {

   .flex{

 

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
       .data {
           margin-top:1rem;
        display:flex;
       justify-content:space-around;
       flex-direction:column;
       width:100%;
           height:95%;
     
           width:60%;
           p {
               font-size:1.2rem;
           }
       }

   }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .flex{

 

display:flex;
justify-content:space-between;
flex-direction:column;
width:80%;
z-index:1000;
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
.data {
    margin-top:1rem;
 display:flex;
justify-content:space-around;
flex-direction:column;
width:100%;
    height:95%;

    width:60%;
    p {
        font-size:1.2rem;
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
    height:5%;
    display:flex;
justify-content:center;
flex-direction:column;
h1 {
color: ${props => props.theme.colors.blue};
}

}
.data {
 display:flex;
justify-content:space-around;
flex-direction:column;
width:100%;
    height:95%;

    width:100%;
    p {
        font-size:1.2rem;
    }
}

}


}


`