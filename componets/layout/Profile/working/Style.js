

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
margin-top:5rem;
h2 {
    text-transform: uppercase;
}
@media (min-width: 1281px) {


    .grid {

        width:100%;
        height:45rem;
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
        width:75rem;
        .head {
             width:100%;
             height:5%;
            
          
             display:flex;
        justify-content:center;
   
        flex-direction:column;
        h2 {
          
        color:white; 
      }
           
        }
      
        .grid1 {
             width:100%;
           padding-top: 1rem;
            
           padding-bottom: 1rem;
             display:flex;
        justify-content:center;
   
        flex-direction:column;
      p {
        width:90%;
          font-size:1.4rem;
          color:white;
      }
      h2 {
        font-family:SourceSansPro-Bold;
        color:white; 
      }
           
        }
    
    }
    }

  

}

@media (min-width: 1025px) and (max-width: 1280px)  {

  .grid {

width:100%;
height:50rem;

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
width:90%;
.head {
     width:100%;

    
  height: 5%;
     display:flex;
justify-content:flex-start;

flex-direction:column;
h2 {
  
color:white; 
}
   
}

.grid1 {
     width:100%;
     padding-top: 1rem;
            
            padding-bottom: 1rem;
    
  
     display:flex;
justify-content:center;

flex-direction:column;
p {
width:90%;
  font-size:1.4rem;
  color:white;
}
h2 {
font-family:SourceSansPro-Bold;
color:white; 
}
   
}

}
}

}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid {

width:100%;
height:60rem;
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
  
    display:flex;
justify-content:space-around;
align-items:center;
flex-direction:column;
height:100%;
width:90%;

.head {
     width:100%;
   
  
     display:flex;
justify-content:center;

flex-direction:column;
h2 {
  
color:white; 
}
   
}

.grid1 {
     width:100%;
    
  margin-bottom: 1rem;;
  
     display:flex;
justify-content:center;

flex-direction:column;
p {
  font-size:1.5rem;
  color:white;
}
h2 {
font-family:SourceSansPro-Bold;
color:white; 
}
   
}

}
}


}

@media (max-width: 767px) {

  .grid {

width:100%;
height:45rem;
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
  font-size:1rem;
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