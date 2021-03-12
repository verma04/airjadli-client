

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
        height:40rem;
        position: relative

       
    }

    .bird {
        top: 1rem;
      
    height: 38rem;
    position: absolute;

        img {
            width:100%;
            left:0%;
            height:100%;
        }
    }
    .card {
    
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
        width:80%;
      
        .grid1 {
             width:30%;
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