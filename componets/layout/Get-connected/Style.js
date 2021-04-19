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
    
    .active{
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
/* @media (min-width: 768px) and (max-width: 1034px) {
  .flex {
    display:flex;
   justify-content:flex-start;
   width:100%;
   height:100%;
   .flex-1 {
    margin-top: 7vh;
       width:7%;
       height:90vh;
       min-height:40rem;
      
   
   }
   .flex-2 {
    margin-top: 10vh;
    width: 93%;
    height: 80vh;
    display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   
  .grid {
   
     width:80%;
     margin-top:4rem;
     margin-bottom:10rem;
     .grid-1 {
         
      .head {
        display:flex;
        justify-content:center;
        i {
        
            font-size:6rem;
            color: ${props => props.theme.colors.darkblue};
       
        }
        h1 {
            padding-top:0.6rem;
            font-size:6.5rem;
            
            color: ${props => props.theme.colors.darkblue};
        }
      }
      .para  {
        
        .haed {
            display:flex;
          justify-content:center;
          margin-top:1.5rem;
          margin-bottom:1.5rem;
        }
        P {
            display:flex;
          justify-content:center;
         font-size:1.3rem;
         text-align:center;
         line-height:1.6;
        }
      }
   .button {
       display:flex;
       justify-content:center;
       margin-top:1.8rem;
       button {
                     width:10rem;
                      padding:0.5rem;
                      border: none;
                      font-size:1.3rem;
                      padding:0.4rem;
                      background-color: ${props => props.theme.colors.darkblue};
                    color:white
                  }
   }
  }
  }
   }
  }
}
@media  (max-width: 600px) {
  .flex {
    display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex-1 {
 
      
   
   }
   .flex-2 {
    margin-top: 7rem;;
    width: 100%;
    height: 30rem;
    
    display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   
  .grid {
   
     width:70%;
     margin-top:4rem;
     margin-bottom:10rem;
     .grid-1 {
         
      .head {
        display:flex;
        justify-content:center;
        i {
        
            font-size:6rem;
            color: ${props => props.theme.colors.darkblue};
color: ${props => props.theme.colors.darkblue};
       
        }
        h1 {
            padding-top:0.6rem;
            font-size:6.5rem;
            color: ${props => props.theme.colors.darkblue};
color: ${props => props.theme.colors.darkblue};
         
        }
      }
      .para  {
        
        .haed {
            display:flex;
          justify-content:center;
          margin-top:1.5rem;
          margin-bottom:1.5rem;
          h1 {
            text-align:center;
          }
        }
        P {
            display:flex;
          justify-content:center;
         font-size:1.3rem;
         text-align:center;
         line-height:1.6;
        }
      }
   .button {
       display:flex;
       justify-content:center;
       margin-top:1.8rem;
       button {
           font-size:1.3rem;
           background-color: ${props => props.theme.colors.darkblue};

           color:white;
           padding:0.8rem;
           border:none;
       }
   }
  }
  }
   }
  }
} */
`