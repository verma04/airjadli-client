

import styled from 'styled-components'



export const Section = styled.div`
 

@media (min-width: 1035px) {
  display:flex;
justify-content:center;
height:100%;
width:100%;
flex-direction:column;
align-items:center;

align-items:center;


    .head {
      
        height:16rem;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        h1 {
         
         font-family: SourceSansPro-Bold ;
        }
        p {
          line-height:1.1;
          font-size:1.7rem;
          width:50%;
        text-align:center;
        }

    }

    .flex {
        height:50rem;
        
        width:76%;
        display:flex;
        justify-content:space-between;
       align-items:center;
       
       .flex-1 {
         width:27%;
        
         height:100%;
       
         color: white;
         display:flex;
         align-items:center;
         justify-content:center;
         flex-direction:column;
         
         p{
          
         
           line-height:1.5rem;
           font-size:1.7rem;
           width:100%;
           text-align:left;
         

         }
         .link {
display:flex;
margin-top:2rem;
cursor: pointer;
width:100%;


justify-content:flex-start;
color:${props => props.theme.colors.blue};
img {
  width:2rem;
}
span {
  margin-left:0.5rem;
    font-size:1rem;
}
margin-bottom:40%;

  }
        
        
        
       }
       .flex-2 {
         width:65%;
         
         height:100%;
        
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         position:relative;
         img {
           width:100%;
           height:100%;
         }
        
         .point {
           color:${props => props.theme.colors.lightblue};
           position: absolute;
           top: 18%;
    left: 33%;
         }
         .point1 {
           color:${props => props.theme.colors.lightblue};
           position: absolute;
           top: 23%;
    left: 39%;
         }
         .point2 {
           color:${props => props.theme.colors.lightblue};
           position: absolute;
           top: 37%;
    right: 37%;
         }
         .point3 {
           color:${props => props.theme.colors.lightblue};
           position: absolute;
           top: 45%;
    left: 44%;
         }
         .point4 {
           color:${props => props.theme.colors.lightblue};
           position: absolute;
           top: 42%;
    right: 28%;
         }
         .point5 {
           color:${props => props.theme.colors.lightblue};
           position: absolute;
           top: 53%;
    right: 73%;
         }
         .point6 {
           color:${props => props.theme.colors.lightblue};
           position: absolute;
           top: 66%;
    right: 72%;
         }
         
       }
       
    }

}

@media (max-width: 600px) {
  display:flex;
justify-content:center;
height:100%;
width:100%;
flex-direction:column;
align-items:center;

align-items:center;

  .head {
        height:10rem;
        display:flex;
        
        justify-content:center;
        
        flex-direction:column;
        width:90%;
        text-align:left;
        }
        p {
          line-height:1.1;
          text-align:left;
          width:100%;
     
        }

    

    .flex {
        height:25rem;
         
        width:95%;
        display:flex;
        justify-content:space-evenly;
       align-items:center;
        
       .flex-1 {
        display:none;   
        
        
       }
       .flex-2 {
         width:100%;
         height:100%;
         
         display:flex;
         justify-content:space-between;
         align-items:center;
         flex-direction:column;
         position:relative;
        
         img {
           
           width:100%;
           height:100%;
         }
         
       }
       
    }

}
`