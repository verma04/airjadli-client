

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media (min-width: 1035px) {

   
    .grid {
    position: relative;
width:100%;
height:40rem;
.bird {
        top: 7%;
    height: 70rem;
    width: 39%;
   
    left: 5%;
    position: absolute;
   
    transform: rotate( 
3.2deg
 );


        img {
            width: 96%;
    height: 100%;
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
    position: relative;
width:100%;
height:40rem;
.bird {
        top: 6%;
    height: 70rem;
    width: 39%;
    left: 5%;
    position: absolute;
    -webkit-transform: rotate( 
1deg
 );
    -ms-transform: rotate( 1deg );
    -webkit-transform: rotate( 
1deg
 );
    -ms-transform: rotate( 1deg );
    transform: rotate( 
1deg
 );


        img {
            width: 96%;
    height: 100%;
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
width:76%;

.grid1 {
     width:50%;
     height:50%;
     
     display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
h1 {
    margin-top:10%;
    background-color:white;
    padding:5%;
    width:90%;
height:100%;
}
   
}

}
}

}


}

@media (max-width: 600px) {

   
.grid {
    margin-top:20%;
 position: relative;
width:100%;
height:26rem;
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
 height:60%;
 background-color:white;
 display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
h1 {
margin-top:10%;
width:90%;
height:100%;
}

}

}
}

}



}


`