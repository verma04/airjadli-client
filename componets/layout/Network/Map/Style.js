

import styled from 'styled-components'



export const  Section = styled.section`

@media (min-width: 1281px) {
    display:flex;
justify-content:center;
height:100%;
margin-top:5rem;
height:100rem;
 background-color:#ddf3ff;
.grid {
    display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     width:100%;
     height:100%;
      position: relative;
     .head  {
       width:75rem;
         height:10%;
         
         display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     .head-1 {
         width:90%;
         align-items:left;
         font-size:1.7rem;
         h2 {
            color:${props => props.theme.colors.blue};
           
         }
     }
  
     .head-2{
        display:flex;
    justify-content:space-between;
     align-items:center;
  width:90%;
  height:50%;
  h2 {
    font-family: SourceSansPro-Bold;
            font-family:1000;
       position: relative;
    font-size:1.9rem;
      cursor: pointer;
      .dropdown-content {
          display:none;

  position: absolute;
 
  width:100%;
  top:2rem;
  left:0;
 opacity:0.9;

  z-index: 1;
  top: 9.5%;
  justify-content:flex-start;
  .content {
     display:flex;
     justify-content:flex-start;
     width: 38%;
   margin-top:0.4rem;
   
   

     .list {
       
        width:100%;
        height:100%;
        display:flex;
        justify-content:flex-start;
         
        flex-direction:column;
        align-items:center;
        margin-top:1.3rem;
        span {
            
            background-color:white;
          text-align:left;
           font-weight: normal;
           width:12rem;
            text-align:left;
           text-transform:uppercase;
           font-size:1.2rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           align-items:center;
           color:black;
         
           height:2.5rem;
           .point {
       
           position: absolute;
          
     display:none;
         }
          
        }
        span:hover {
           border-bottom: 2px solid ;

        }
      
      
     }

     
  }
 

        }

        #north {
            margin-left:30%;
        }

        #east {
            margin-left:30%;
        }
      
      
    
  }
  h2:hover .dropdown-content {
          display:flex;
      }

      h2:hover .dropdown-content {
          display:flex;
      }
      h2:hover .dropdown-content .content .list .ban #point  {
          display:flex;
          top: 120%;
    left: 20%;
      }
      h2:hover .dropdown-content .content .list .har #point1  {
          display:flex;
          top: 80%;
    left: 30%;
      }
      h2:hover .dropdown-content .content .list .chh #point2  {
          display:flex;
          top: 80%;
    left: 40%;
      }
      h2:hover .dropdown-content .content .list .kha #point3  {
          display:flex;
          top: 65%;
    left: 30%;
      }

      h2:hover .dropdown-content .content .list .seo #point5  {
          display:flex;
          top: 60%;
    left: 30%;
      }

      h2:hover .dropdown-content .content .list .kan #point  {
          display:flex;
          top: 140%;
    left: 10%;
      }
    
     }
     }
     .map {

    width:70rem;
    height:90%;
    
    position: relative;

      .cityData {  
        cursor: pointer;
    .chamba {
        position:absolute;
       
        top: 18%;
    left: 29%;

z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

#chamba{
    display:none;
}
.chamba:hover  #chamba {
     display:flex;
     margin-top:0.2rem;
     background-color:white;
     width:10rem;
     z-index:1000;
     border: 1px solid red;
     height:10rem;

 }

      }

  
.Palampur {
        position:absolute;
        
        top: 18%;
    left: 31%;

z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Manali {
        position:absolute;
        
        top: 20%;
    left: 33%;

z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Bir {
        position:absolute;
        
        top: 21%;
    left: 31%;


z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Nurpur {
        position:absolute;
        
        top: 19%;
    left: 28%;


z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Kangra {
        position:absolute;
        
        top: 20%;
    left: 29%;


z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}
.dharmshala {
        position:absolute;
        top: 19.5%;
    left: 31%;



z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Kot {
        position:absolute;
        top: 26.5%;
    left: 34%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Utt {
        position:absolute;
        top: 23.5%;
    left: 35%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Tehri {
        position:absolute;
        top: 25.5%;
    left: 37%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Pauri {
        position:absolute;
     
    top: 26.5%;
    left: 39%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Dehradun {
        position:absolute;
        top: 25.5%;
    left: 35%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Nanital {
        position:absolute;
        top: 28.5%;
    left: 40%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Almora {
        position:absolute;
        top: 24.5%;
    left: 39%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.paratwada{
    position:absolute;
    top: 52.5%;
    left: 30%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.murtizapur{
    position:absolute;
    top: 54%;
    left: 33%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}


.dharni{
    position:absolute;
    top: 56%;
    left: 33%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}


.balapur{
    position:absolute;
    top: 56%;
    left: 27%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.rohtas{
    position:absolute;
    top: 56%;
    left: 27%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.bky{
    position:absolute;
    top: 76%;
    left: 25%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.MUN{
    position:absolute;
    top: 71%;
    left: 21%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.ranchi{
    position:absolute;
    top: 46%;
    left: 59%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.sahibhag{
    position:absolute;
    top: 44%;
    left: 62%;;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.bhojpure{
    position:absolute;
    top: 39%;
    left: 58%;







z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.gaya{
    position:absolute;
    top: 41%;
    left: 58%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.jeha{
    position:absolute;
    top: 42%;
    left: 59%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.nawada{
    position:absolute;
    top: 42%;
    left: 63%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.singtam{
    position:absolute;
 
    top: 32.2%;
    left: 70%;







z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.pelling{
    position:absolute;
    top: 33.5%;
    left: 70%;;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.komipong{
    position:absolute;
    top: 35.2%;
    left: 71%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.rohtas {
    position:absolute;
    top: 39.2%;
    left: 60%;

z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}
.barwani{
    position:absolute;
    top: 48.2%;
    left: 22%;


z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}

.chinnwara{
    position:absolute;
    top: 50.2%;
    left: 41%;



z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}

.seoni{
    position:absolute;
    top: 48%;
    left: 43%;



z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}
.kha{
    position:absolute;
    top: 50%;
    left: 28%;



z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}



@keyframes blinker {  
  from { opacity: 1; }
  to { opacity: 0; }
}
      
     }
}


   
    

  

}

@media (min-width: 1024px) and (max-width: 1280px) {
    display:flex;
justify-content:center;
height:100%;
margin-top:5rem;
height:100rem;
 background-color:#ddf3ff;
.grid {
    display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     width:100%;
     height:100%;
      position: relative;
     .head  {
       width:76%;
         height:10%;
          
         display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     .head-1 {
         width:90%;
         align-items:left;
         font-size:1.7rem;
         h2 {
            color:${props => props.theme.colors.blue};
           
         }
     }
  
     .head-2{
        display:flex;
    justify-content:space-between;
     align-items:center;
  width:90%;
  height:50%;
  h2 {
    font-family: SourceSansPro-Bold;
            font-family:1000;
       position: relative;
    font-size:1.9rem;
      cursor: pointer;
      .dropdown-content {
          display:none;

  position: absolute;
 
  width:100%;
  top:2rem;
  left:0;
 opacity:0.9;

  z-index: 1;
  top: 9.5%;
  justify-content:flex-start;
  .content {
     display:flex;
     justify-content:flex-start;
     width: 38%;
   margin-top:0.4rem;
   
   

     .list {
       
        width:100%;
        height:100%;
        display:flex;
        justify-content:flex-start;
         
        flex-direction:column;
        align-items:center;
        margin-top:1.3rem;
        span {
            
            background-color:white;
          text-align:left;
           font-weight: normal;
           width:12rem;
            text-align:left;
           text-transform:uppercase;
           font-size:1.2rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           align-items:center;
           color:black;
         
           height:2.5rem;
           .point {
       
           position: absolute;
          
     display:none;
         }
          
        }
        span:hover {
           border-bottom: 2px solid ;

        }
      
      
     }

     
  }
 

        }

        #north {
            margin-left:30%;
        }

        #east {
            margin-left:30%;
        }
      
      
    
  }
  h2:hover .dropdown-content {
          display:flex;
      }

      h2:hover .dropdown-content {
          display:flex;
      }
      h2:hover .dropdown-content .content .list .ban #point  {
          display:flex;
          top: 120%;
    left: 20%;
      }
      h2:hover .dropdown-content .content .list .har #point1  {
          display:flex;
          top: 80%;
    left: 30%;
      }
      h2:hover .dropdown-content .content .list .chh #point2  {
          display:flex;
          top: 80%;
    left: 40%;
      }
      h2:hover .dropdown-content .content .list .kha #point3  {
          display:flex;
          top: 65%;
    left: 30%;
      }

      h2:hover .dropdown-content .content .list .seo #point5  {
          display:flex;
          top: 60%;
    left: 30%;
      }

      h2:hover .dropdown-content .content .list .kan #point  {
          display:flex;
          top: 140%;
    left: 10%;
      }
    
     }
     }
     .map {
   
    width:70%;
    height:90%;
    
    position: relative;

    .chamba {
        position:absolute;
       
        top: 18%;
    left: 29%;

z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

#chamba{
    display:none;
}
.chamba:hover  #chamba {
     display:flex;
     margin-top:0.2rem;
     background-color:white;
     width:10rem;
     z-index:1000;
     border: 1px solid red;
     height:10rem;

 }

      }

  
.Palampur {
        position:absolute;
        
        top: 18%;
    left: 31%;

z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Manali {
        position:absolute;
        
        top: 20%;
    left: 33%;

z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Bir {
        position:absolute;
        
        top: 21%;
    left: 31%;


z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Nurpur {
        position:absolute;
        
        top: 19%;
    left: 28%;


z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Kangra {
        position:absolute;
        
        top: 20%;
    left: 29%;


z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}
.dharmshala {
        position:absolute;
        top: 19.5%;
    left: 31%;



z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Kot {
        position:absolute;
        top: 26.5%;
    left: 34%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Utt {
        position:absolute;
        top: 23.5%;
    left: 35%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Tehri {
        position:absolute;
        top: 25.5%;
    left: 37%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Pauri {
        position:absolute;
     
    top: 26.5%;
    left: 39%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Dehradun {
        position:absolute;
        top: 25.5%;
    left: 35%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Nanital {
        position:absolute;
        top: 28.5%;
    left: 40%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.Almora {
        position:absolute;
        top: 24.5%;
    left: 39%;




z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.paratwada{
    position:absolute;
    top: 52.5%;
    left: 30%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.murtizapur{
    position:absolute;
    top: 54%;
    left: 33%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}


.dharni{
    position:absolute;
    top: 56%;
    left: 33%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}


.balapur{
    position:absolute;
    top: 56%;
    left: 27%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.rohtas{
    position:absolute;
    top: 56%;
    left: 27%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.bky{
    position:absolute;
    top: 76%;
    left: 25%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.MUN{
    position:absolute;
    top: 71%;
    left: 21%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.ranchi{
    position:absolute;
    top: 46%;
    left: 59%;





z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.sahibhag{
    position:absolute;
    top: 44%;
    left: 62%;;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.bhojpure{
    position:absolute;
    top: 39%;
    left: 58%;







z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.gaya{
    position:absolute;
    top: 41%;
    left: 58%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.jeha{
    position:absolute;
    top: 42%;
    left: 59%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.nawada{
    position:absolute;
    top: 42%;
    left: 63%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.singtam{
    position:absolute;
 
    top: 32.2%;
    left: 70%;







z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.pelling{
    position:absolute;
    top: 33.5%;
    left: 70%;;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}

.komipong{
    position:absolute;
    top: 35.2%;
    left: 71%;






z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;    
}
.rohtas {
    position:absolute;
    top: 39.2%;
    left: 60%;

z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}
.barwani{
    position:absolute;
    top: 48.2%;
    left: 22%;


z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}

.chinnwara{
    position:absolute;
    top: 50.2%;
    left: 41%;



z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}

.seoni{
    position:absolute;
    top: 48%;
    left: 43%;



z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}
.kha{
    position:absolute;
    top: 50%;
    left: 28%;



z-index:990;
        color: ${props => props.theme.colors.blue};
  animation: blinker 2s cubic-bezier(.5, 0, 1, 1) infinite alternate;     
}
    
      
     }
}


   
    

  



@media (min-width: 768px) and (max-width: 1024px) {
    display:flex;
justify-content:center;
height:100%;
margin-top:5rem;
height:55rem;
 background-color:#ddf3ff;
.grid {
    display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     width:100%;
     height:100%;
      position: relative;
     .head  {
       width:80%;
         height:4rem;
          
         display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     .head-1 {
         margin-top:1rem;
         width:100%;
         align-items:left;
         font-size:1.7rem;
         h2 {
            color:${props => props.theme.colors.blue};
           
         }
     }
  
     .head-2{
        margin-top:1rem;
        display:flex;
    justify-content:space-between;
     align-items:center;
  width:100%;
  height:50%;
  h2 {
    font-family: SourceSansPro-Bold;
            font-family:1000;
       position: relative;
    font-size:1.9rem;
      cursor: pointer;
      .dropdown-content {
          display:none;

  position: absolute;
 
  width:100%;
  top:2rem;
  left:0;
 opacity:0.9;

  z-index: 1;
  top: 9.5%;
  justify-content:flex-start;
  .content {
     display:flex;
     justify-content:flex-start;
     width: 38%;
   margin-top:0.4rem;
   
   

     .list {
       
        width:100%;
        height:100%;
        display:flex;
        justify-content:flex-start;
         
        flex-direction:column;
        align-items:center;
        margin-top:1.3rem;
        span {
            
            background-color:white;
          text-align:left;
           font-weight: normal;
           width:12rem;
            text-align:left;
           text-transform:uppercase;
           font-size:1.3rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           align-items:center;
           color:black;
         
           height:3rem;
           .point {
       
           position: absolute;
          
     display:none;
         }
          
        }
        span:hover {
           border-bottom: 2px solid ;

        }
      
      
     }

     
  }
 

        }

        #north {
            margin-left:30%;
        }

        #east {
            margin-left:30%;
        }
      
      
    
  }
  h2:hover .dropdown-content {
          display:flex;
      }

      h2:hover .dropdown-content {
          display:flex;
      }
      h2:hover .dropdown-content .content .list .ban #point  {
          display:flex;
          top: 120%;
    left: 20%;
      }
      h2:hover .dropdown-content .content .list .har #point1  {
          display:flex;
          top: 80%;
    left: 30%;
      }
      h2:hover .dropdown-content .content .list .chh #point2  {
          display:flex;
          top: 80%;
    left: 40%;
      }
      h2:hover .dropdown-content .content .list .kha #point3  {
          display:flex;
          top: 65%;
    left: 30%;
      }

      h2:hover .dropdown-content .content .list .seo #point5  {
          display:flex;
          top: 60%;
    left: 30%;
      }

      h2:hover .dropdown-content .content .list .kan #point  {
          display:flex;
          top: 140%;
    left: 10%;
      }
    
     }
     }
     .map {
        margin-top:3rem;
    width:70%;
    height:90%;
    
    position: relative;

       
    .point {
           color:red;
           position: absolute;
           top: 18%;
    left: 33%;
    display:none;
         }
      
     }
}


}
@media (max-width: 600px) {
    display:flex;
justify-content:center;
height:100%;
margin-top:3rem;

height:30rem;
 background-color:#ddf3ff;
.grid {
    display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     width:90%;
     height:100%;
      position: relative;
     .head  {
       width:100%;
         height:15%;
          
         display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     .head-1 {
         margin-top:2rem;
         width:100%;
         align-items:left;
         font-size:1.7rem;
         h2 {
             
            color:${props => props.theme.colors.blue};
         }
     }
  
     .head-2{
        margin-top:1rem;
        display:flex;
    justify-content:space-between;
     align-items:center;
  width:100%;
  height:50%;
  h2 {
      font-weight:900;
      cursor: pointer;
      font-size:1.2rem;
      .dropdown-content {
          display:none;

  position: absolute;
 
  width:100%;
  top:0;
  left:0;
 

  z-index: 1;
  top:5rem;
  justify-content:flex-start;
  .content {
     display:flex;
     justify-content:flex-start;
     width: 38%;
 
   
   

     .list {
       
        width:100%;
        height:100%;
        display:flex;
        justify-content:flex-start;
         
        flex-direction:column;
        align-items:center;
       
        span {
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            background-color:white;
           height:18%;
           font-weight: normal;
           width:100%;
           font-size:1.3rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           align-items:center;
           color:black;
         
           height:3rem;
           .point {
           color:red;
           position: absolute;
          
     display:none;
         }
          
        }
        /* .ban:hover #point {
                    display:flex;
                    top: 23%;
    left: 39%;
        }

        .har:hover #point1 {
                    display:flex;
                    top: 30%;
    left: 39%;
        }

        .chh:hover #point2 {
                    display:flex;
                    top: 80%;
    left: 30%;
        }
        .kha:hover .point {
                    display:flex;
                    top: 70%;
    left: 30%;
        }

        .seo:hover .point {
                    display:flex;
                    top: 70%;
    left: 70%;
        } */
      
     }

     
  }
 

        }
      
    
  }
  h2:hover .dropdown-content {
          display:flex;
      }
      h2:hover .dropdown-content .content .list .ban #point  {
          display:flex;
          top: 23%;
    left: 39%;
      }
      h2:hover .dropdown-content .content .list .ban #point1  {
          display:flex;
          top: 30%;
    left: 39%;
      }
      h2:hover .dropdown-content .content .list .ban #point2  {
          display:flex;
          top: 80%;
    left: 30%;
      }
      h2:hover .dropdown-content .content .list .ban #point3  {
          display:flex;
          top: 23%;
    left: 39%;
      }
     }
     }
     .map {
    width:100%;
    height:85%;
    
    position: relative;

       
    .point {
           color:red;
           position: absolute;
           top: 18%;
    left: 33%;
    display:none;
         }
      
     }
}


   
    

  

}
`