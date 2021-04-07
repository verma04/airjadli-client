

import styled from 'styled-components'



export const  Section = styled.section`

@media (min-width: 1035px) {
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
         width:100%;
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
  width:100%;
  height:50%;
  h2 {
    font-family: SourceSansPro-Bold;
            font-family:1000;
       position: relative;
    
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
 
   
   

     .list {
       
        width:100%;
        height:100%;
        display:flex;
        justify-content:flex-start;
         
        flex-direction:column;
        align-items:center;
        margin-top:1.3rem;
        span {
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            background-color:white;
           height:18%;
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
  
    width:82%;
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