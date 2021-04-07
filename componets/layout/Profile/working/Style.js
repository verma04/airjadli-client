

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;
@media (min-width: 1035px) {

    .grid {

        width:100%;
        height:40rem;
        position: relative;
        .bird {
          right: -37px;
          top: -1%;
    right: 44%;
    /* height: 53rem; */
    /* width: 126%; */
    position: absolute;

        img {
            width:100%;
            right:0%;
            height:100%;
            margin-left: 90%;
        }
    }
       
    }
    .card {
        position:absolute;
       
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
       
        height:100%;
        .card-1 {
            margin-top:10%;
            display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;
        height:100%;
        width:76%;
        .head {
             width:100%;
             height:10%;
            
          
             display:flex;
        justify-content:center;
   
        flex-direction:column;
        h2 {
        color:white; 
      }
           
        }
      
        .grid1 {
             width:100%;
             height:15%;
            
          
             display:flex;
        justify-content:center;
   
        flex-direction:column;
      p {
          font-size:1.5rem;
          color:white;
      }
      h2 {
        color:white; 
      }
           
        }
    
    }
    }

  

}

@media (max-width: 600px) {

  .grid {

width:100%;
height:40rem;
position: relative;
.bird {
  display:none;
}

}
.card {
position:absolute;

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
 
height:100%;
.card-1 {
 
    margin-top:10%;
    display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
height:100%;
width:90%;
.head {
     width:100%;
     height:10%;
     
  
     display:flex;
justify-content:center;

flex-direction:column;
h2 {
color:white; 
}
   
}

.grid1 {
  
     width:100%;
    margin:0.5rem;
    
  
     display:flex;
justify-content:center;

flex-direction:column;
p {
  font-size:1.2rem;
  color:white;
}
h2 {
color:white; 
}
   
}

}
}



}
`