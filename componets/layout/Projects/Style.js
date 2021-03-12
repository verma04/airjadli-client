

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media (min-width: 1035px) {

    .grid {

        width:100%;
       
      margin-top:5rem;

    
    }
    .card {
       
    
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;

       
       
     
        .card-1 {
            display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap: wrap;
      
        width:80%;
      
        .grid1 {
             width:30%;
             height:25rem;
             margin-top:2rem;
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
        cursor: pointer;
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

    width:100%;
   
  margin-top:5rem;

  z-index:1;
}
.card {
   

    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;

   
   
 
    .card-1 {
        display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap: wrap;
  
    width:90%;
  
    .grid1 {
         width:100%;
         height:25rem;
         margin-top:2rem;
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
`