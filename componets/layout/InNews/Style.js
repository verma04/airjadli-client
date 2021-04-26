

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
      
        width:76%;
      
        .grid1 {
            position: relative;
             width:30%;
            
         cursor: pointer;
             margin-top:2rem;
             background-color:white;
             display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        .wrapper {
        width:100%;
        height:15rem;
       
        }
        .data {
        width:90%;
        height:13rem;
         margin-bottom:2rem;
        display:flex;
        justify-content:space-evenly;
        flex-direction:column;

        .modal {
 /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 5; /* Sit on top */
  padding-top: 2%; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  .modal-content {
    position: relative;
  background-color: #fefefe;
  margin: auto;
  margin-top:10rem;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  height:20%;
  border-radius:10px;
  min-height:10rem;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    .text {
         font-size:1.5rem; 
    }
    .btn {
        width:40%;
        display:flex;
        justify-content:space-evenly;
        button {
            font-size:1.2rem;
            padding:0.3rem;
        }
        
        
         

    }
}

}
      
    p {
        padding-top:0.5rem;
        padding-bottom:0.5rem;
       color: #2f3435; 
       .read-more-button {
        
        color: #0085C5;
           }
    }
    h2 {
        padding-top:1rem;
        font-weight:900;
    }
   
    .head {
        h2 {
            padding-top:0.5rem;
        padding-bottom:0.5rem;
        text-align:left;
    }

    }
   
  .link {
    padding-top:0.5rem;
        padding-bottom:0.5rem;
display:flex;
cursor: pointer;
justify-content:flex-start;
color:${props => props.theme.colors.blue};
i {
    font-size:1.2rem;
}
span {
    margin-left:0.5rem;
    font-size:1.2rem;
}

  }
        }
        .fa-edit {
            position: absolute;
            bottom:2%;
            right:2%;
            font-size:1.4rem;
            color: ${props => props.theme.colors.blue};

        }
        .fa-trash {
            position: absolute;
            bottom:2%;
            right:15%;
            cursor: pointer;
            font-size:1.4rem;
            color: ${props => props.theme.colors.blue};

        }
        .status {
            position: absolute;
            bottom:2%;
            left:4%;
            color:#A0A0A0;
        }
        }
        }
    
    }

  

}

@media (min-width: 768px) and (max-width: 1024px) {
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

width:76%;

.grid1 {
    position: relative;
     width:30%;
    
 cursor: pointer;
     margin-top:2rem;
     background-color:white;
     display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
.wrapper {
width:100%;
height:15rem;

}
.data {
width:90%;
height:13rem;
 margin-bottom:2rem;
display:flex;
justify-content:space-evenly;
flex-direction:column;

.modal {
/* Hidden by default */
position: fixed; /* Stay in place */
z-index: 5; /* Sit on top */
padding-top: 2%; /* Location of the box */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
.modal-content {
position: relative;
background-color: #fefefe;
margin: auto;
margin-top:10rem;
padding: 20px;
border: 1px solid #888;
width: 30%;
height:20%;
border-radius:10px;
min-height:10rem;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
.text {
 font-size:1.5rem; 
}
.btn {
width:40%;
display:flex;
justify-content:space-evenly;
button {
    font-size:1.2rem;
    padding:0.3rem;
}


 

}
}

}

p {
padding-top:0.5rem;
padding-bottom:0.5rem;
color: #2f3435; 
.read-more-button {

color: #0085C5;
   }
}
h2 {
padding-top:1rem;
font-weight:900;
}

.head {
h2 {
    padding-top:0.5rem;
padding-bottom:0.5rem;
text-align:left;
}

}

.link {
padding-top:0.5rem;
padding-bottom:0.5rem;
display:flex;
cursor: pointer;
justify-content:flex-start;
color:${props => props.theme.colors.blue};
i {
font-size:1.2rem;
}
span {
margin-left:0.5rem;
font-size:1.2rem;
}

}
}
.fa-edit {
    position: absolute;
    bottom:2%;
    right:2%;
    font-size:1.4rem;
    color: ${props => props.theme.colors.blue};

}
.fa-trash {
    position: absolute;
    bottom:2%;
    right:15%;
    cursor: pointer;
    font-size:1.4rem;
    color: ${props => props.theme.colors.blue};

}
.status {
    position: absolute;
    bottom:2%;
    left:4%;
    color:#A0A0A0;
}
}
}

}

}
@media (max-width: 600px) {
z-index:1;
.grid {

    width:100%;
   
  margin-top:5rem;

  z-index: 1;   
}
.card {
   
z-index:1;
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
    width:100%;
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