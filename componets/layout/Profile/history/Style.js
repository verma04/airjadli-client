

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;

@media (min-width: 1281px) {

   .flex{

       height:45rem;

       display:flex;
       justify-content:flex-start;
      
       width:100%;
      .flex-1 {
          width:40%;
          height:100%;
       
          position: relative;
         

      }
      .flex-2 {
          margin-left:7%;
        display:flex;
       justify-content:space-between;
       align-items:center;
       flex-direction:column;
 
       width:50%;
       height:100%;
       .head {
           display:flex;
           justify-content:center;
           flex-direction:column;
           height:10%;
           align-items:left;
           width:100%;
           h2 {
            color: ${props => props.theme.colors.blue};
           }
       }
       .data {
           width:100%;
           height:90%;
           display:flex;
           justify-content:center;
           flex-direction:column;
         
        
           .data1 {
               margin-bottom: 0.5rem;
               width:100%;
               height:10%;
           
               display:flex;
               justify-content:space-between;
               align-items:center;

               .left {
                   width:7%;
                   color: ${props => props.theme.colors.blue};
               }
               p {
                   width:83%;
               }

           }

       }
      }

   }
}
@media (min-width: 1025px) and (max-width: 1280px)  {
    .flex{

height:50rem;

display:flex;
justify-content:space-between;

width:100%;
.flex-1 {
   width:45%;
   height:100%;

   position: relative;
  

}
.flex-2 {

 display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;

width:50%;
height:100%;
.head {
    display:flex;
    justify-content:center;
    flex-direction:column;
    height:10%;
    align-items:left;
    width:100%;
    h2 {
     color: ${props => props.theme.colors.blue};
    }
}
.data {
    width:100%;
    height:90%;
    display:flex;
    justify-content:center;
    flex-direction:column;
  
 
    .data1 {
        width:100%;
        height:10%;
       
        display:flex;
        justify-content:space-between;
        align-items:center;

        .left {
            width:10%;
            color: ${props => props.theme.colors.blue};
        }
        p {
            width:80%;
        }

    }

}
}

}

}

@media (min-width: 768px) and (max-width: 1024px) {

    .flex{



display:flex;
justify-content:flex-start;
flex-direction: column;
align-items: center;
width:100%;
.flex-1 {
   width:100%;
   height:70rem;

   position: relative;
  display: none;

}
.flex-2 {

 display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;

width:90%;
height:100%;
.head {
    display:flex;
    justify-content:center;
    flex-direction:column;
    height:10%;
    align-items:left;
    width:100%;
    h2 {
     color: ${props => props.theme.colors.blue};
    }
}
.data {
    width:100%;
    height:90%;
    display:flex;
    justify-content:center;
    flex-direction:column;
  
 
    .data1 {
        width:100%;
        height:10%;
       
        display:flex;
        justify-content:space-between;
        align-items:center;

        .left {
            width:10%;
            color: ${props => props.theme.colors.blue};
        }
        p {
            width:80%;
        }

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
.flex-1 {
   width:100%;
   height:25rem;

   position: relative;
  

}
.flex-2 {
 display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;

width:100%;
height:100%;
.head {
    display:flex;
    justify-content:center;
    flex-direction:column;
    height:10%;
    align-items:left;
    width:100%;
    h2 {
     color: ${props => props.theme.colors.blue};
    }
}
.data {
    width:100%;
    height:90%;
    display:flex;
    justify-content:center;
    flex-direction:column;
  
 
    .data1 {
        width:100%;
        height:10%;
       margin-bottom: 0.5rem;
        display:flex;
        justify-content:space-between;
        align-items:center;

        .left {
            width:10%;
            color: ${props => props.theme.colors.blue};
        }
        p {
            width:80%;
        }

    }

}
}

}


}

`