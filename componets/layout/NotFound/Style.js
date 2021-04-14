import styled from 'styled-components'


export const Section = styled.section`
display:flex;
        justify-content:center;
        width:100%;
   height:100%;
@media (min-width: 1035px) {
  .flex {
    display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex-1 {

       width:7%;
     

      border: 1px solid red;
     
   }
   .flex-2 {
    margin-top: 5rem;
    width: 93%;

    
    display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   
  .grid {
 
     width:70%;
     margin-top:4rem;

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
@media (min-width: 768px) and (max-width: 1034px) {
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
}
`