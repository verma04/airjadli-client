import styled from 'styled-components'


export const Section = styled.section`
display:flex;
        justify-content:center;
      flex-direction:column;
      align-items:center;
        width:100%;
   height:100%;
  

@media (min-width: 1035px) {

  .grid {
        position: relative;
        width:100%;
        height:30rem;
        .card {
       
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
  .flex {
    display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   width:100%;
   height:100%;

   .form {
     margin-top:5rem;
     width:65%;
     height:30rem;
     display:flex;
       justify-content:center;
       align-items:center;
       border-radius:0.3rem;
       box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 5px rgb(0 0 0 / 15%);
     form {
       width:95%;
       height:95%;
       display:flex;
       justify-content:center;
       flex-direction:column;
      .group 			  { 
  position:relative; 
  margin-bottom:45px; 
  width:100%;
}
button {
  width:10%;
  height:3rem;
   font-size:1.3rem;
   background: #1690d2;
   border: none;
   color:white;
}
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:90%;
  border:none;
  color:black;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:1s ease all; 
  -moz-transition:1s ease all; 
  -webkit-transition:1s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block; width:92%; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#5264AE; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
     }
   }
  
  .offer{
    margin-top:3rem;
    width:65%;
    height:23rem;
    border-radius:0.2rem;
    display:flex;
    justify-content:space-around;
    .offer-1 {
      width:32%;
      height:100%;
      box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 5px rgb(0 0 0 / 15%);
      display:flex;
    justify-content:center;
    flex-direction:column;
   
    .top {
      width:100%;
      height:45%;
      background-color: #f5f5f5;
      display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    h5 {
      margin-bottom:1rem;
    }
    h2 {
      font-size:2.2rem;
      width:70%;
      text-align:center;
    }
    }
    
    #active{
      width:100%;
      height:45%;
      background: #1690d2;
      display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    h5 {
      margin-bottom:1rem;
      color:white;
    }
    h2 {
      font-size:2.2rem;
      width:70%;
      text-align:center;
      color:white;
    }
    span {
      color:white;
    }
    }
    .bottom {
      width:100%;
      height:55%;
      display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  
    li {
      width:100%;
      margin-top:0.9rem;
      text-align:center;
      list-style:none;
    }
    }
    }
  }
  }
 
}
 @media (min-width: 768px) and (max-width: 1034px) {
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

.flex {
    display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   width:100%;
   height:100%;

   .form {
     margin-top:5rem;
     width:75%;
     height:30rem;
     display:flex;
       justify-content:center;
       align-items:center;
       border-radius:0.3rem;
       box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 5px rgb(0 0 0 / 15%);
     form {
       width:95%;
       height:95%;
       display:flex;
       justify-content:center;
       flex-direction:column;
      .group 			  { 
  position:relative; 
  margin-bottom:45px; 
  width:100%;
}
button {
  width:10%;
  height:3rem;
   font-size:1.3rem;
   background: #1690d2;
   border: none;
   color:white;
}
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:90%;
  border:none;
  color:black;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:1s ease all; 
  -moz-transition:1s ease all; 
  -webkit-transition:1s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block; width:92%; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#5264AE; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
     }
   }
  
  .offer{
    margin-top:3rem;
    width:75%;
    height:23rem;
    border-radius:0.2rem;
    display:flex;
    justify-content:space-around;
    .offer-1 {
      width:32%;
      height:100%;
      box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 5px rgb(0 0 0 / 15%);
      display:flex;
    justify-content:center;
    flex-direction:column;
   
    .top {
      width:100%;
      height:45%;
      background-color: #f5f5f5;
      display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    h5 {
      margin-bottom:1rem;
    }
    h2 {
      font-size:2.2rem;
      width:70%;
      text-align:center;
    }
    }
    
    #active{
      width:100%;
      height:45%;
      background: #1690d2;
      display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    h5 {
      margin-bottom:1rem;
      color:white;
    }
    h2 {
      font-size:2.2rem;
      width:70%;
      text-align:center;
      color:white;
    }
    span {
      color:white;
    }
    }
    .bottom {
      width:100%;
      height:55%;
      display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  
    li {
      width:100%;
      margin-top:0.9rem;
      text-align:center;
      list-style:none;
    }
    }
    }
  }
  }

}
@media  (max-width: 600px) {
  .grid {
        position: relative;
        width:100%;
        height:30rem;
        margin-top:5rem;
        .card {
       
       position:absolute;
       bottom:8%;
       display:flex;
       justify-content:center;
       align-items:center;
       width:100%;
      
       height:95%;
       .card-1 {
           display:flex;
       justify-content:space-between;
       align-items:flex-end;
       height:100%;
       width:95%;
    
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
  .flex {
    display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   width:100%;
   height:100%;

   .form {
     margin-top:5rem;
     width:95%;
     height:30rem;
     display:flex;
       justify-content:center;
       align-items:center;
       border-radius:0.3rem;
       box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 5px rgb(0 0 0 / 15%);
     form {
       width:95%;
       height:95%;
       display:flex;
       justify-content:center;
       flex-direction:column;
      .group 			  { 
  position:relative; 
  margin-bottom:45px; 
  width:100%;
}
button {
  width:50%;
  height:3rem;
   font-size:1.3rem;
   background: #1690d2;
   border: none;
   color:white;
}
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:90%;
  border:none;
  color:black;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:1s ease all; 
  -moz-transition:1s ease all; 
  -webkit-transition:1s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block; width:92%; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#5264AE; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
     }
   }
  
  .offer{
    margin-top:3rem;
    width:90%;
      
    border-radius:0.2rem;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    .offer-1 {
      width:100%;
      height:23rem;
      box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 5px rgb(0 0 0 / 15%);
      display:flex;
    justify-content:center;
    flex-direction:column;
   
    .top {
      width:100%;
      height:45%;
      background-color: #f5f5f5;
      display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    h5 {
      margin-bottom:1rem;
    }
    h2 {
      font-size:2.2rem;
      width:70%;
      text-align:center;
    }
    }
    
    #active{
      width:100%;
      height:45%;
      background: #1690d2;
      display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    h5 {
      margin-bottom:1rem;
      color:white;
    }
    h2 {
      font-size:2.2rem;
      width:70%;
      text-align:center;
      color:white;
    }
    span {
      color:white;
    }
    }
    .bottom {
      width:100%;
      height:55%;
      display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  
    li {
      width:100%;
      margin-top:0.9rem;
      text-align:center;
      list-style:none;
    }
    }
    }
  }
  }
} 
`