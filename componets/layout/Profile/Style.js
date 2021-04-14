

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
    
        .bird {
        top: 6%;
    height: 70rem;
    width: 39%;
    z-index:99;
    left: 4%;
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
    

@media (max-width: 600px) {
    margin-top:22%;

.grid {
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
         height:80%;
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