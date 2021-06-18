

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media  (min-width: 1281px) {
    .grid-1 {
        display:none;
    }

    .grid {

        width:100%;
        height:46rem;
        position: relative;
        display:flex;
        justify-content:center;
        align-items:center;
         .birdOut {
             z-index:999;
           width:82rem;
           position: relative;
           height:100%;
          
         .birdd {
           
         z-index:999;
    height: 100%;
    display:flex;
  top:6%;
        justify-content:flex-start;
        
        height: 70rem;
    width: 100%;
   
   width:100%;
    position: absolute;
    /* transform: rotate( 
3.2deg
 ); */



        img {
        
        }
    } 
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
        width:70rem;
        
  
      
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
            font-size:1.9rem;
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

@media (min-width: 1024px) and (max-width: 1280px) {
    .grid-1 {
        display:none;
    }

    

    .grid {

        width:100%;
        height:46rem;
        position: relative;
        display:flex;
        justify-content:center;
       
        .birdOut {
             z-index:999;
           width:90%;
           position: relative;
           height:100%;
            
         .birdd {
           
         z-index:999;
    height: 100%;
    display:flex;
  top:8%;
        justify-content:flex-start;
        
        height: 65rem;
    width: 100%;
   
  
    position: absolute;
    transform: rotate( 
3.2deg
 );



        img {
        
        }
    } 
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
            font-size:1.9rem;
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

@media (min-width: 769px) and (max-width: 1024px) {
    .grid-1 {
        display:none;
    }

    .grid {

        width:100%;
        height:42rem;
        position: relative;
        display:flex;
        justify-content:center;
       
        .birdOut {
             z-index:999;
           width:100%;
           position: relative;
           height:100%;
            
         .birdd {
           
         z-index:999;
    height: 100%;
    display:flex;
  top:8%;
        justify-content:flex-start;
        
        height: 65rem;
    width: 100%;
   
   width:100%;
    position: absolute;
    transform: rotate( 
3.2deg
 );



        img {
        
        }
    } 
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
        width:80%;
  
      
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
        width:95%;
        height:50%;
        
        display:flex;
        justify-content:space-evenly;
        flex-direction:column;
      
    p {
       color: #2f3435; 
    }
    .head {
        h2 {
            font-size:1.5rem;
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
    margin-left:0.3rem;
    font-size:1.1rem;
}

  }
        }
        }
        }
    
    }

}
@media (max-width: 767px) {

.grid {

   display:none;
   
}

 .bird {
     display:none;
 }

.grid-1 {
    z-index: 1;
    height: 17%;
    width: 100%;
    margin-top: 3rem;


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
             height: 27rem;
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
        justify-content:center;
        flex-direction:column;
      h2 {
        font-size:1.8rem;
        color:${props => props.theme.colors.blue};
      }
    p {
       color: #2f3435;
       margin-bottom : 2rem; ;
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
img {
    margin-right:1rem;
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

@media only screen and (device-width: 768px) {

    .grid-1 {
        display:none;
    }

    

    .grid {

        width:100%;
        height:40rem;
        position: relative;
        display:flex;
        justify-content:center;
       
        .birdOut {
            display:none;
             z-index:999;
           width:90%;
           position: relative;
           height:100%;
            
         .birdd {
           
         z-index:999;
    height: 100%;
    display:flex;
  top:8%;
        justify-content:flex-start;
        
        height: 65rem;
    width: 100%;
   
  
    position: absolute;
    transform: rotate( 
3.2deg
 );



        img {
        
        }
    } 
         }
   
       
    }

    
    .card {
       z-index:1000;
        position:absolute;
        bottom:10%;
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
        width:90%;
  
      
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
        justify-content:center;
        flex-direction:column;
      
    p {
       color: #2f3435; 
       font-size:1rem;
    }
    .head {
        h2 {
            font-size:1.4rem;
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
    font-size:1rem;
}

  }
        }
        }
        }
    
    }

 

}
`