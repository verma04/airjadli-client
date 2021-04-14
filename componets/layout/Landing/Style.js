

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media (min-width: 1035px) {
    .grid-1 {
        display:none;
    }

    .grid {

        width:100%;
        height:46rem;
        position: relative;
 
       
    }

    .bird {
        top: 6%;
    height: 70rem;
    width: 39%;
    left: 4%;
    position: absolute;

    transform: rotate( 
3.2deg
 );


        img {
            width: 96%;
            height: 109%;
        }
    }
    .card {
       z-index:1000;
        position:absolute;
        bottom:7%;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
     
        height:75%;
        .card-1 {
           
            display:flex;
        justify-content:space-between;
        align-items:center;
        height:100%;
        width:74%;
  
      
        .grid1 {
             width:32%;
             height:100%;
             background-color:white;
             display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        .wrapper {
        width:100%;
        height:50%;
       
        }
        .data {
        width:90%;
        height:50%;
        
        display:flex;
        justify-content:space-evenly;
        flex-direction:column;
      
    p {
       color: #2f3435; 
    }
    .head {
        h2 {
            font-size:1.8rem;
        text-align:left;
     
    }

    }
   
  .link {
display:flex;
cursor: pointer;
justify-content:flex-start;
color:${props => props.theme.colors.blue};
img {
    width:34px;
    height:1rem;
}
span {
    margin-left:0.5rem;
    font-size:1.2rem;
}

  }
        }
        }
        }
    
    }

  

}

@media (max-width: 600px) {

.grid {

   display:none;
   
}

.grid-1 {
z-index:1;
width:100%;
margin-top:3rem;
.card {
        
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
       
        height:70%;
        .card-1 {
            display:flex;
        justify-content:space-between;
        align-items:center;
        height:100%;
        flex-direction:column;
        width:90%;
      
        .grid1 {
            margin-top:2rem;
             width:100%;
             height:30rem;
             background-color:white;
             display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        .wrapper {
        width:100%;
        height:50%;
       
        }
        .data {
        width:90%;
        height:50%;
        
        display:flex;
        justify-content:space-evenly;
        flex-direction:column;
      h2 {
        font-size:1.8rem;
      }
    p {
       color: #2f3435; 
    }
    .head {
        h2 {
           
        text-align:left;
    }

    }
   
  .link {
display:flex;
cursor: pointer;
justify-content:flex-start;
color:${props => props.theme.colors.blue};
i {
    font-size:1.2rem;
}
span {
    font-size:1.2rem;
}

  }
        }
        }
        }
    
    }



}




}
`