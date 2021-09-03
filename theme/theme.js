import {  createGlobalStyle } from "styled-components";


 export default   createGlobalStyle`
.styles_scroll-to-top__2A70v {
    background-color: white;
  
    right: 4rem !important;;

    bottom: 40px;
    position: fixed;
    z-index: 2;
    cursor: pointer;
    right: 10%;
    border-radius: 7px;
    width: 40px;
    height: 40px;
    transition: opacity 1s ease-in-out;
    box-shadow: 0 9px 25px 0 rgb(132 128 177 / 28%);
    border: none;
    outline: none;
    z-index: 1;
    margin-bottom: 6rem;
    background-color: rgb(0, 133, 197) !important;
    svg {
      fill: white;
    }
}

body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}



body::-webkit-scrollbar-thumb {
  background-color: #0085C5;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
   /* creates padding around scroll thumb */
}
 span {
   cursor: pointer;
 }
 em {
  font-style: italic;
}
strong {
  font-weight: bold;
}
.contact {
  cursor: pointer;
  .bottom {
    cursor: pointer;
  }
}
sub, sup {
  /* Specified in % so that the sup/sup is the right size relative to the surrounding text */
  font-size: 52%;
  /* Zero out the line-height so that it doesn't interfere with the positioning that follows */
  line-height: 0;
  /* Where the magic happens: makes all browsers position the sup/sup properly, relative to the surrounding text */
  position: relative;
  /* Note that if you're using Eric Meyer's reset.css, this is already set and you can remove this rule */
  vertical-align: baseline;
}
sup {
  /* Move the superscripted text up */
  
  top: -0.8em;
}
sub {
  /* Move the subscripted text down, but only half as far down as the superscript moved up */
  bottom: -0.25em;
}


a { 
  text-decoration: none; 
  color: white;

  font-family:  SourceSansPro-Regular;
} 

div {
    font-family:  SourceSansPro-Regular;
  
}
.bird {
        top: 11%;
   
    left: 2.5%;
    height: 39rem;
    position: absolute;


    
    }
  body {
    color: #2f3435; 
  font-family:  SourceSansPro-Regular;

      overflow-x: hidden;
      scrollbar-color: yellow blue;
      
      ::-webkit-scrollbar {
 

  
  #nprogress .bar {
  background: #FFBB00 !important;
}
#nprogress .peg {
  box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;
}
#nprogress .spinner-icon {
  border-top-color: #FFBB00;
  border-left-color: #FFBB00;
}
}
/* Track */
 
/* Handle */

      
  }
  ul {
    list-style: none;
    li {
      
    cursor: pointer;
    color: ${props => props.theme.colors.text1};
  }
  }
  img {
  cursor: pointer;
}
button {
  cursor: pointer;
  font-family:  SourceSansPro-Regular;
}

 
  h1 {
    font-size: 2rem;
    line-height: var(--line-height-lg);
  font-family:  SourceSansPro-Regular;
  color: #2f3435; 
  word-spacing:0.2rem;
  }
  h2 {
    font-size: 1.4rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey};
  font-family:  SourceSansPro-Regular;
  color: #2f3435; 
  font-weight:500;
  word-spacing:0.2rem;
  }
  tr {
    font-family:  SourceSansPro-Regular;
  }
  h3 {
    font-size: 1.2rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey};
    font-family:  SourceSansPro-Regular;
    color: #2f3435; 
    word-spacing:0.2rem;
    /* family=FiesoleTextW00-Italic */
  }
  p {
    font-family:  SourceSansPro-Regular;
    word-spacing:0.2rem;
    font-weight: normal;
    color: ${props => props.theme.colors.grey};
  }
  h3 {
    word-spacing:0.2rem;
  }
  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
    color: #2f3435; 
    word-spacing:0.2rem;
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
    color: #2f3435; 
    word-spacing:0.2rem;
  }
  a{
    color:rgb(22, 144, 210);
}
  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
    color: #2f3435; 
    word-spacing:0.2rem;
  }
  p {
    font-size:1.3rem;
line-height:1.1;
  
    font-family:  SourceSansPro-Regular;
    word-spacing:0.2rem;
    color: #2f3435; 
  }
  select {
  font-family:  SourceSansPro-Regular;
  color: #2f3435; 
  }
  
  .date {
  font-family:  SourceSansPro-Regular;
  }
  .card {
    border-radius:10px;
    color: #2f3435; 
  }
 
  button {
border-radius:10px;
font-family:  SourceSansPro-Regular;
transition: transform .8s;

  }
  input {
  font-family:  SourceSansPro-Regular;
    border:1px solid #EFEAE4;
    color:white;
  }
  span {
  font-family:  SourceSansPro-Regular;
  }
  i {
    color: ${props => props.theme.colors.darkBrown};
  }
  @media only screen and (max-width: 767px) {
    body {
      overflow-x: hidden;
    }
  }
  @media only screen and (min-width: 768px) {
    body {
      overflow-x: hidden;
    }
     
    .card {
      display:none;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      color: ${props => props.theme.colors.grey};
    }
    h3 {
      font-size: 1.25rem;
    }
  }
  a { 
    text-decoration: none; 
    color: ${props => props.theme.colors.darkBrown};
  font-family:  SourceSansPro-Regular;
} 
button {
  font-family:  SourceSansPro-Regular;
}
li {
  cursor: pointer;
}
img {
  cursor: pointer;
}
p {
    font-size:1.1rem;
line-height:1.1;
  margin-top: 0.3rem;
    font-family:  SourceSansPro-Regular;
    word-spacing:0.2rem;
    color: #2f3435; 
  }
 `;

