

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media (min-width: 1035px) {
 
    .grid {

        width:100%;
        height:40rem;
        position: relative;

       
    }

    .bird {
        top: 11%;
   
    left: 2.5%;
    height: 39rem;
    position: absolute;


        img {
           
            left:0%;
            height:100%;
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
@media (min-width: 768px) and (max-width: 1024px) {

    .grid {

width:100%;
height:40rem;
position: relative;


}

.bird {
top: 11%;

left: 2.5%;
height: 39rem;
position: absolute;


img {
   
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
h1 {
    padding:1rem;
    background-color:white;
    width:90%;
    text-align:center;
  

}
   
}

}
}
}

@media (max-width: 600px) {
    margin-top:20%;
    z-index:-1;
.grid {
   
    width:100%;
    height:30rem;
    position: relative;

   
}
.bird {
    display:none;
}
.card {
    position:absolute;
    bottom:7%;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
   
    height:100%;
    .card-1 {
        display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
    width:80%;
  
    .grid1 {
         width:100%;
         height:70%;
       
         display:flex;
    justify-content:center;


    align-items:center;
    h1 {
        background-color:white;
        font-size:1.5rem;
        padding:1rem;
    }
       
    }

}
}



}
`