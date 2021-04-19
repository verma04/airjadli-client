import styled from 'styled-components'



export const Section = styled.section` 

display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;
@media (max-width: 767px) {
  width: 100%;
    margin-top: 10rem;
    margin-bottom: 3rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
     
     .flex {
         
         border:1px solid red;
        
    

     }






}



   @media (min-width: 768px) and (max-width: 1280px) {
         
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
  z-index:1000;
      margin-top: 3rem;
        display:flex;
  justify-content:flex-start;
    flex-direction:column;
   align-items:center;
        width:80%;
  height:70rem;
      box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 5px rgb(0 0 0 / 15%);
  
  .top {
    display:flex;
  justify-content:flex-start;
  width:100%;
  height:15%;
  .top-1 {
      display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      height:100%;
      width:33.33%;
      background-color: #f5f5f5;
      h2 {
          height:20%;
          width:100%;
          text-align:center;
      }
      span {
        margin-top:1rem;
          height:20%;
          color: ${props => props.theme.colors.blue};
          i {
            padding-right:0.7rem;
          }
      }
  }
  #act {
    background-color: #dcdcdc !important; 
  }
  }
  .mid {
    display:flex;
  justify-content:flex-start;
  width:100%;
  height:85%;
  background-color: #f5f5f5;
  .mid-1 {
      
      width:66.66%;
      display:flex;
      justify-content:flex-start;
      align-items:center;
      flex-direction:column;

.form {
    background-color: rgb(221,243,255);;
   
     width:100%;
     height:60%;;
     display:flex;
       justify-content:center;
       align-items:center;
       
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
  background-color: rgb(221,243,255);;
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

   .socials-list {
       width:50%;
       height:20%;
       display:flex;
       justify-content:space-around;
       align-items:center;
  
       a {
           background-color:white;
           
            font-size:2rem;
            width:4rem;
            height:4rem;
            align-items:center;
            border-radius:50%;
            display:flex;
            justify-content:center;
            i {
                color: red;
            }
            .fa-facebook-f {
                color: #3b5998;
            }
            .fa-twitter {
  color: #55ACEE;
 
}
.fa-google {
  color: #dd4b39;
 
}

.fa-linkedin {
  color: #007bb5;

}
       }
   }
  }
  .mid-2 {
    width:33.33%; 
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;
 
    li {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:60%;
        height:6.2%;
        list-style:none;
        font-size:1.1rem;
        span {
          height:20%;
          font-size:1rem;
           margin-top:0.5rem;
          color: ${props => props.theme.colors.blue};
          i {
              
            padding-right:0.4rem;
          }
      }
    }
  }
  }


     }
 

    
}

   
  
   @media (min-width: 1281px) {
    margin-bottom: 5rem;
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
      margin-top: 3rem;
        display:flex;
  justify-content:flex-start;
    flex-direction:column;
   align-items:center;
        width:70%;
  height:70rem;
      box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 5px rgb(0 0 0 / 15%);
  
  .top {
    display:flex;
  justify-content:flex-start;
  width:100%;
  height:15%;
  .top-1 {
      display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      height:100%;
      width:33.33%;
      background-color: #f5f5f5
      h2 {
          height:20%;
      }
      span {
          height:20%;
          color: ${props => props.theme.colors.blue};
          i {
            padding-right:0.7rem;
          }
      }
  }
  #act {
    background-color: #dcdcdc !important; 
  }
  }
  .mid {
    display:flex;
  justify-content:flex-start;
  width:100%;
  height:85%;
  background-color: #f5f5f5;
  .mid-1 {
      
      width:66.66%;
      display:flex;
      justify-content:flex-start;
      align-items:center;
      flex-direction:column;

.form {
    background-color: rgb(221,243,255);;
   
     width:100%;
     height:60%;;
     display:flex;
       justify-content:center;
       align-items:center;
       
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
  background-color: rgb(221,243,255);;
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

   .socials-list {
       width:50%;
       height:20%;
       display:flex;
       justify-content:space-around;
       align-items:center;
  
       a {
           background-color:white;
           
            font-size:2rem;
            width:4rem;
            height:4rem;
            align-items:center;
            border-radius:50%;
            display:flex;
            justify-content:center;
            i {
                color: red;
            }
            .fa-facebook-f {
                color: #3b5998;
            }
            .fa-twitter {
  color: #55ACEE;
 
}
.fa-google {
  color: #dd4b39;
 
}

.fa-linkedin {
  color: #007bb5;

}
       }
   }
  }
  .mid-2 {
    width:33.33%; 
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;
 
    li {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:60%;
        height:6.2%;
        list-style:none;
        font-size:1.1rem;
        span {
          height:20%;
          font-size:1rem;
           margin-top:0.5rem;
          color: ${props => props.theme.colors.blue};
          i {
              
            padding-right:0.4rem;
          }
      }
    }
  }
  }


     }


   }



 
`