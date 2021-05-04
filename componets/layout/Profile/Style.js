

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media (min-width: 1281px) {

    .grid {

        width:100%;
        height:40rem;
        position: relative;
   display:flex;
        justify-content:center;
        align-items:center;
         .birdOut {
             z-index:999;
           width:90rem;
           position: relative;
           height:100%;
           display:flex;
           justify-content:center;
         
          
         .birdd {
           
         z-index:999;
    height: 100%;
    display:flex;
  top:7%;
        justify-content:flex-start;
        
        height: 70rem;
    width: 100%;
   
   width:100%;
    position: absolute;
  



        img {
        
        }
    } 
         }
    
   
    .card {
       z-index:990;
       position:absolute;
       bottom:8%;
       display:flex;
       justify-content:center;
       align-items:center;
       width:100%;
      
       height:70%;
       .card-1 {
           display:flex;
       justify-content:space-between;
       align-items:flex-end;
       height:100%;
       width:75rem;
    
       .grid1 {
         
            width:50%;
      
            background-color:white;
            display:flex;
       justify-content:center;
  
   
       align-items:center;
       h1 {
         padding:1rem;
     
           width:90%;
           text-align:center;
           text-align:center;
   
       }
          
       }
   
   }
   }

       
    }
   

  

}

@media (min-width: 1025px) and (max-width: 1280px)  {

    .grid {

width:100%;
height:40rem;
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
  top:9%;
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
.card {
z-index:990;
position:absolute;
bottom:8%;
display:flex;
justify-content:center;
align-items:center;
width:100%;

height:70%;
.card-1 {
   display:flex;
justify-content:space-between;
align-items:flex-end;
height:100%;
width:76%;

.grid1 {
 
    width:50%;

    background-color:white;
    display:flex;
justify-content:center;


align-items:center;
h1 {
 padding:1rem;

   width:90%;
   text-align:center;
   text-align:center;

}
  
}

}
}


}


}

@media (min-width: 768px) and (max-width: 1024px) {
    .grid {

width:100%;
height:30rem;
position: relative;

.bird {
        top: 6%;
    height: 60rem;
    width: 39%;
    left: 1%;
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
position:absolute;
bottom:7%;
z-index:1000;
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
width:80%;

.grid1 {
     width:50%;
     height:50%;
    
     display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
h1 {
    margin-top:10%;
    width:90%;
height:100%;
padding:4%;
background-color:white;
}
   
}

}
}


}

}
    

@media (max-width: 767px) {
    margin-top:22%;
  .bird {
      display:none;
  }
.grid {
    position: relative;
    width:100%;
    height:26rem;

    .birdOut {
             z-index:999;
           width:90rem;
           position: relative;
           height:100%;
           display:flex;
           justify-content:center;
         
          
         .birdd {
           
        display:none;
  



        
    } 
         }

    .card {
    position:absolute;
    bottom:20%;
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
    width:90%;
  
    .grid1 {
         width:90%;
         height:80%;
        
         display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    h1 {
        margin-top:10%;
        
        padding:1rem;
     font-size:1.5rem;
     background-color:white;
    }
       
    }

}
}

   
}




}
`